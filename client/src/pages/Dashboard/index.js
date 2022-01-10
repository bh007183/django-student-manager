import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getUser, getClass} from "../../app/classSlice"
import ClassCard from "../../components/ClassCard"

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
            <div className="align-center">
           <h1>Your Classes</h1>
           </div>
           <div>
               <div>hi</div>
               {classes.map(item => (
                <ClassCard class={item}/>
               )
                   
               

               )}
            
            </div>
        </div>
    )
}
