import React, {useState} from 'react'
import Login from "../../components/Login"


export default function CreateLogin() {
    const [state, setState] = useState(false)
    return (
        <div>
            {state === false ? <><h1 className="center-h1">Login</h1> <Login/></>: <h1 className="center-h1">Create Account</h1>}
            
        </div>
    )
}
