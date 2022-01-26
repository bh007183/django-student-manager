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
import { accountCreate, reset_error, createStudent, updateStudent } from "../../app/classSlice";

export default function CreateStudent() {
  const error = useSelector(store => store.Class.Error)
  const student = useSelector(store => store.Class.Student)
 let route = window.location.pathname.split("/")


  const dispatch = useDispatch();
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    classes: Number(route[route.length - 1]),
    guardian_name_1: "",
    guardian_name_2: "",
    emergency_contact_number1: "",
    emergency_contact_number2: "",
    
  });

  useEffect(() => {
    if(student){
      console.log(student)
      setState({
        ...student
      })
    }
    return () => {
      dispatch(reset_error())
    }
    
  }, [])



  const handleSubmit = (event) => {
    event.preventDefault();
    if(!student){
      dispatch(createStudent(state))
    }else{
      dispatch(updateStudent(state))
    }
  };

  return (
      <>
       
    <form
      className="center-from align-center"
      onSubmit={handleSubmit}
    >
      
      <Grid container spacing={2}>
      <Grid className="align-center" item xs={12}>
      {error ? <Error/> : <></>}
      </Grid>
        <Grid className="align-center" item xs={12} md={6}>
          <FormControl>
            <InputLabel htmlFor="my-input">First Name</InputLabel>
            <Input
              onChange={(event) =>
                handleInput(event, state, setState)
              }
              placeholder="First Name"
              name="first_name"
              value={state.first_name}
            />
          </FormControl>
        </Grid>
        <Grid className="align-center" item xs={12} md={6}>
          <FormControl>
            <InputLabel htmlFor="my-input">Last Name</InputLabel>
            <Input
              onChange={(event) =>
                handleInput(event, state, setState)
              }
              placeholder="Last Name"
              name="last_name"
              value={state.last_name}
            />
          </FormControl>
        </Grid>
        <Grid className="align-center" item xs={12} md={6}>
          <FormControl>
            <InputLabel htmlFor="my-input">Emergency Contact 1</InputLabel>
            <Input
              onChange={(event) =>
                handleInput(event, state, setState)
              }
              placeholder="Emergency Contact 1"
              name="emergency_contact_number1"
              value={state.emergency_contact_number1}
            />
          </FormControl>
        </Grid>
        <Grid className="align-center" item xs={12} md={6}>
          <FormControl>
            <InputLabel htmlFor="my-input">Emergency Contact 2</InputLabel>
            <Input
              onChange={(event) =>
                handleInput(event, state, setState)
              }
              placeholder="Emergency Contact 2"
              name="emergency_contact_number2"
              value={state.emergency_contact_number2}
            />
          </FormControl>
        </Grid>
        <Grid className="align-center" item xs={12} md={6}>
          <FormControl>
            <InputLabel htmlFor="my-input">Guardian 1</InputLabel>
            <Input
              onChange={(event) =>
                handleInput(event, state, setState)
              }
              placeholder="Guardian 1"
              name="guardian_name_1"
              value={state.guardian_name_1}
            />
          </FormControl>
        </Grid>
        <Grid className="align-center" item xs={12} md={6}>
          <FormControl>
            <InputLabel htmlFor="my-input">Guardian 2</InputLabel>
            <Input
              onChange={(event) =>
                handleInput(event, state, setState)
              }
              placeholder="Guardian 2"
              name="guardian_name_2"
              value={state.guardian_name_2}
            />
          </FormControl>
        </Grid>
        <Grid className="align-center" item xs={12}>
          {!student ? <Button id="login-button" variant="contained" type="submit">
          Add Student
          </Button>: <Button id="login-button" variant="contained" type="submit">
            Update Student
          </Button>}
         
        </Grid>
      </Grid>
    </form>
    </>
  );
}