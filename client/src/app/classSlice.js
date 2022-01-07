import {createSlice} from '@reduxjs/toolkit';
import {start} from "./custom-actions"





export const slice = createSlice({
  name: 'Admin',
  initialState: {
    LoggedIn: false,
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
      Admin.Error = action.payload.data
    },
    reset_error: (Admin, action) => {
      Admin.Error = ""

    },

    logged_in: (Admin, action) => {
      console.log(action)
       Admin.LoggedIn = true
       localStorage.setItem("token", `JWT ${action.payload.access}`)
    }, 

    set_user: (Admin, action) => {
      console.log(action.payload)
    }
   
  },
});

export const {set_teacher_class, set_error, logged_in, reset_error, set_user} = slice.actions;
export default slice.reducer;

// export const login = () => start({

// })
export const getClass = () => start({
url: "http://127.0.0.1:8000/api/class",
onSuccess: set_teacher_class.type,
onError: set_error.type
})
export const teacherLogin = (data) => start({
url: "http://127.0.0.1:8000/auth/jwt/create",
method: "POST",
data,
onSuccess: logged_in.type,
onError: set_error.type
})
export const accountCreate = (data) => start({
url: "http://127.0.0.1:8000/auth/users/",
method: "POST",
data,
onSuccess: logged_in.type,
onError: set_error.type
})
export const getUser = (data) => start({
url: "http://127.0.0.1:8000/auth/users/me/",
headers: {
  authorization: localStorage.getItem('token')
},
onSuccess: set_user.type,
onError: set_error.type
})


