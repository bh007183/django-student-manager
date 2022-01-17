import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getStudent} from "../../app/classSlice"


export default function Student() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getStudent(window.location.pathname[window.location.pathname.length - 1]))
        return () => {
            
        }
    }, [])
    return (
        <div>
            <h1>Manage Student</h1>
            
        </div>
    )
}
