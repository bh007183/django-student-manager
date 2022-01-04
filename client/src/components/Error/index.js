import React from 'react'
import Alert from '@mui/material/Alert';

export default function Error(props) {
    return (
        <div>
             <Alert severity="error">{props.message}</Alert>
        </div>
    )
}
