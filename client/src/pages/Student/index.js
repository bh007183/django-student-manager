import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getStudent, deleteStudent} from "../../app/classSlice"
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


export default function Student() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch()
    const student = useSelector(store => store.Class.Student)
    let route = window.location.pathname.split("/")
    useEffect(() => {
        dispatch(getStudent(route[route.length - 1]))
        return () => { 
        }
    }, [])

    const handleDelete = () => {
        dispatch(deleteStudent(route[route.length - 1]))
    }
    return (
        <div>
            <h1 className="align-center">{student.first_name + " " + student.last_name}</h1>
            <table>
                <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Guardian 1</th>
                    <th>Guardian 2</th>
                    <th>Emergency Contact 1</th>
                    <th>Emergency Contact 2</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{student.first_name + " " + student.last_name}</td>
                    <td>{student.guardian_name_1}</td>
                    <td>{student.guardian_name_2}</td>
                    <td>{student.emergency_contact_number1}</td>
                    <td>{student.emergency_contact_number2}</td>
                </tr>
                </tbody>

            </table>
            <div className="align-center" style={{marginTop: "20px"}}>
                <Button onClick={handleDelete} style={{margin: "10px"}} color="error" variant="contained">Delete Student</Button>
                <Button onClick={handleOpen} style={{margin: "10px"}} variant="contained">Update Student</Button>
            </div>
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
    )
}
