import React, { useState, useEffect } from "react";
import { handleInput } from "../../Utils";
import Grid from "@mui/material/Grid";

import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Error from "../Error";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import { createClass, reset_error } from "../../app/classSlice";
import Select from "@mui/material/Select";

export default function CreateClass() {
  const error = useSelector((store) => store.Class.Error);
  const success = useSelector((store) => store.Class.Success);

  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: "",
    class_grade: "",
  });

  useEffect(() => {
    return () => {
      dispatch(reset_error());
    };
  }, []);

  const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(createClass(state))

  }

  return (
    <>
      <h1 className="center-h1">Create Class</h1>
      <form onSubmit={handleSubmit} className="center-from align-center entry-from">
        <Grid container spacing={2}>
          <Grid className="align-center" item xs={12}>
            {error ? <Error message={error.detail} /> : <></>}
          </Grid>
          <Grid className="align-center" item xs={12}>
            <FormControl>
              <InputLabel htmlFor="my-input">Give your class a name</InputLabel>
              <Input
                value={state.title}
                placeholder="title"
                name="title"
                onChange={(event) => handleInput(event, state, setState)}
              />
            </FormControl>
          </Grid>
          <Grid className="align-center" item xs={12}>
            <FormControl>
              <InputLabel htmlFor="my-input">Grade of class</InputLabel>
              <Select
              style={{width: "150px"}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                value={state.class_grade}
                name="class_grade"
                onChange={(event) => handleInput(event, state, setState)}
              >
                <MenuItem value={"1st"}>1st</MenuItem>
                <MenuItem value={"2nd"}>2nd</MenuItem>
                <MenuItem value={"3rd"}>3rd</MenuItem>
                <MenuItem value={"4th"}>4th</MenuItem>
                <MenuItem value={"5th"}>5th</MenuItem>
                <MenuItem value={"6th"}>6th</MenuItem>
                <MenuItem value={"7th"}>7th</MenuItem>
                <MenuItem value={"8th"}>8th</MenuItem>
                <MenuItem value={"9th"}>9th</MenuItem>
                <MenuItem value={"10th"}>10th</MenuItem>
                <MenuItem value={"11th"}>11th</MenuItem>
                <MenuItem value={"12th"}>12th</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid className="align-center" item xs={12}>
            <Button id="login-button" variant="contained" type="submit">
              Create Class
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
