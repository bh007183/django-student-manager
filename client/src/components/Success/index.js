import React from 'react'
import Alert from '@mui/material/Alert';

export default function Success(props) {
    return (
        <div>
             <Alert severity="success">{props.message}</Alert>
        </div>
    )
}