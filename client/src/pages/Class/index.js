import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getStudents} from "../../app/classSlice"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import StudentHorizontal from "../../components/StudentHorizontal"
import "./style.css"

export default function Class() {
    const dispatch = useDispatch() 
    const students = useSelector(state => state.Class.Students)

    useEffect(() => {
        dispatch(getStudents(window.location.pathname[window.location.pathname.length - 1]))
        return () => {
            
        }
    }, [])
    return (
        <>
        <div id="classBar">
            Manage Bar
        </div>
        <h1>Student Manage Portal</h1>
        <div id="studentBox" >
      
          {students.map(student => (
              <StudentHorizontal student={student}/>
          ))}
        
     
    </div>
        </>
    )
}
