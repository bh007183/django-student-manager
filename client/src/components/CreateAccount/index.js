import React, { useState, useEffect } from "react";
import { handleInput } from "../../Utils";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Error from "../Error"
import { Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { teacherLogin, reset_error } from "../../app/classSlice";

export default function Login() {
  const error = useSelector(store => store.Class.Error)
  const loggedIn = useSelector(store => store.Class.LoggedIn)


  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    return () => {
      dispatch(reset_error())
    }
  }, [])

  if(loggedIn){
    return <Navigate to="/dashboard"/>
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(teacherLogin(loginState));
  };

  return (
    <form
      className="center-from align-center entry-from"
      onSubmit={handleSubmit}
    >
      
      <Grid container spacing={2}>
      <Grid className="align-center" item xs={12}>
      {error ? <Error message={error.detail}/> : <></>}
      </Grid>
        <Grid className="align-center" item xs={12}>
          <FormControl>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input
              onChange={(event) =>
                handleInput(event, loginState, setLoginState)
              }
              placeholder="Username"
              name="username"
              value={loginState.username}
            />
          </FormControl>
        </Grid>
        <Grid className="align-center" item xs={12}>
          <FormControl>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input
              onChange={(event) =>
                handleInput(event, loginState, setLoginState)
              }
              placeholder="password"
              name="password"
              value={loginState.password}
            />
          </FormControl>
        </Grid>
        <Grid className="align-center" item xs={12}>
          <Button id="login-button" variant="contained" type="submit">
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
