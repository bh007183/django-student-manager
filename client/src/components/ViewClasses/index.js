import React from 'react'
import ClassCard from "../../components/ClassCard"
import {useDispatch, useSelector} from "react-redux"
import {Link, Route, Routes} from "react-router-dom"

export default function ViewClasses() {
    const classes = useSelector(state => state.Class.Classes)
    return (
        <div>
            <div className="align-center">
           <h1>Your Classes</h1>
           </div>
           <div style={{display: "flex", flexWrap: "wrap"}}>
               {classes.length > 0 ? classes.map(item => (
                <ClassCard class={item}/>
               )
               ): <p>You have not created any classes. Click <Link to="/dashboard/add">here</Link> to add a class.</p>}
            
            </div>
            
        </div>
    )
}
