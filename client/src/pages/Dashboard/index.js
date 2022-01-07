import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getUser} from "../../app/classSlice"

export default function Dashboard() {
    const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getUser())
       return () => {
           
       }
   }, [])
    return (
        <div>
            Dashboard
        </div>
    )
}
