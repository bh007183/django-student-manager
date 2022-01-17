import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getUser, getClass} from "../../app/classSlice"
import ClassCard from "../../components/ClassCard"
import {Link, Route, Routes} from "react-router-dom"
import CreateClass from '../../components/CreateClass'

export default function Dashboard() {
    const dispatch = useDispatch()
    const classes = useSelector(state => state.Class.Classes)
   useEffect(() => {
      dispatch(getClass())
       return () => {
           
       }
   }, [])
   console.log(classes)
    return (
        <div>
             <div className="classBar">
                 <Link to="/dashboard/add" style={{color: 'white', textDecoration: 'none'}}>
                 Add Class
                 </Link>
            
        </div>
        <Routes>
        <Route exact path="add" element={<CreateClass/>}/>
        </Routes>
        
            <div className="align-center">
           <h1>Your Classes</h1>
           </div>
           <div>
               <div>hi</div>
               {classes.length > 0 ? classes.map(item => (
                <ClassCard class={item}/>
               )
               ): <p>You have not created any classes. Click <Link to="/dashboard/add">here</Link> to add a class.</p>}
            
            </div>
        </div>
    )
}
