import React, {useState} from "react";
import { handleInput } from "../../Utils";
import Grid from "@mui/material/Grid";
import {useDispatch, useSelector} from "react-redux"
import {teacherLogin} from "../../app/classSlice"

export default function Login() {
    const dispatch = useDispatch()

  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (event) => {

      event.preventDefault()
      console.log("submited")
      dispatch(teacherLogin(loginState))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => handleInput(event, loginState, setLoginState)}
        placeholder="username"
        name="username"
        value={loginState.username}
      ></input>
      <input
        onChange={(event) => handleInput(event, loginState, setLoginState)}
        placeholder="password"
        name="password"
        value={loginState.password}
      ></input>
      <button>This</button>
    </form>
  );
}
