import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getStudents} from "../../app/classSlice"

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
        <div>
            Manage Bar
        </div>
        <section>

        </section>
        </>
    )
}
