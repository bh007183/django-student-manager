import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getUser, getClass} from "../../app/classSlice"
import ClassCard from "../../components/ClassCard"
import {Link, Route, Routes} from "react-router-dom"
import CreateClass from '../../components/CreateClass'
import ViewClasses from '../../components/ViewClasses'

export default function Dashboard() {
    const dispatch = useDispatch()
    
   useEffect(() => {
      dispatch(getClass())
       return () => {
           
       }
   }, [])
   
    return (
        <div>
             <div className="classBar">
                 <Link to="/dashboard/add" style={{color: 'white', textDecoration: 'none', paddingLeft: "10px", paddingRight: "10px"}}>
                 Add Class
                 </Link>
                 <Link to="/dashboard" style={{color: 'white', textDecoration: 'none'}}>
                 Dashboard
                 </Link>
            
        </div>
        <Routes>
        <Route exact path="add" element={<CreateClass/>}/>
        <Route exact path="/" element={<ViewClasses/>}/>
        </Routes>
        
            
        </div>
    )
}
