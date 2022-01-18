import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getStudent} from "../../app/classSlice"
import Button from "@mui/material/Button"
import "./style.css"


export default function Student() {
    const dispatch = useDispatch()
    const student = useSelector(store => store.Class.Student)
    let route = window.location.pathname.split("/")
    useEffect(() => {
        dispatch(getStudent(route[route.length - 1]))
        return () => {
            
        }
    }, [])
    return (
        <div>
            <h1 className="align-center">{student.first_name + " " + student.last_name}</h1>
            <table>
                <tr>
                    <th>Student Name</th>
                    <th>Guardian 1</th>
                    <th>Guardian 2</th>
                    <th>Emergency Contact 1</th>
                    <th>Emergency Contact 2</th>
                </tr>
                <tr>
                    <th>{student.first_name + " " + student.last_name}</th>
                    <th>{student.guardian_name_1}</th>
                    <th>{student.guardian_name_2}</th>
                    <th>{student.emergency_contact_number1}</th>
                    <th>{student.emergency_contact_number2}</th>
                </tr>

            </table>
            <div className="align-center" style={{marginTop: "20px"}}>
                <Button style={{margin: "10px"}} color="error" variant="contained">Delete Student</Button>
                <Button style={{margin: "10px"}} variant="contained">Update Student</Button>
            </div>
            
        </div>
    )
}
