import {createSlice} from '@reduxjs/toolkit';
import {start} from "./custom-actions"




export const slice = createSlice({
  name: 'Admin',
  initialState: {
    Class: "",
    Teacher: "",
    Error: "",
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    set_teacher_class: (Admin, action) => {
      console.log(action.payload)
     
    },
    set_error: (Admin, action) => {
      console.log(action)
    }
   
  },
});

export const { set_teacher_class, set_error } = slice.actions;
export default slice.reducer;

// export const login = () => start({

// })
export const getClass = () => start({
url: "http://127.0.0.1:8000/api/class",
onSuccess: set_teacher_class.type,
onError: set_error.type
})

