import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getStudents} from "../../app/classSlice"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Link, Route, Routes} from "react-router-dom"
import StudentHorizontal from "../../components/StudentHorizontal"
import CreateStudent from "../../components/AddStudent"

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./style.css"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    height: "80%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: "10px"
  };

export default function Class() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let route = window.location.pathname.split("/")

    const dispatch = useDispatch() 
    const students = useSelector(state => state.Class.Students)

    useEffect(() => {
        dispatch(getStudents(route[route.length - 1]))
        return () => {
            
        }
    }, [])
    return (
        <>
        <div className="classBar">
        <Button onClick={handleOpen}>Open modal</Button>
        </div>
        <h1 className="align-center">Student Manage Portal</h1>
        <div id="studentBox" >
      
          {students.map(student => (
              <StudentHorizontal student={student}/>
          ))}
           <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateStudent/>
        </Box>
      </Modal>
        
     
    </div>
        </>
    )
}
