import React, {useEffect} from 'react'
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from "react-redux";

export default function Error() {
    const error = useSelector(store => store.Class.Error)
    let message;

    if(error){
        if(error.detail){
            message = error.detail
        }else if( error.email){
            message = error.email[0]
        }else if(error.password){
            message = error.password[0]
        }else if(error.username){
            message = error.username[0]
        }
    }
    return (
        <div>
             <Alert severity="error">{message}</Alert>
        </div>
    )
}
