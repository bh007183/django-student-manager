import React from 'react'
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom"
import"./style.css"

export default function StudentHorizontal(props) {
    let link = `/student/${props.student.id}`
    return (
        <div className="studentCard">
    
        <div className="align">
            <p>{props.student.first_name + " " + props.student.last_name}</p>
        </div>
        <div className="align-center studentLinkContain">
            <Link to={link}>Manage</Link>
        </div>
        </div>
    )
}
