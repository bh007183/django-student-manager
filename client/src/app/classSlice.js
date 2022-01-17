import {createSlice} from '@reduxjs/toolkit';
import {start} from "./custom-actions"





export const slice = createSlice({
  name: 'Admin',
  initialState: {
    LoggedIn: false,
    Classes: [],
    Students: [],
    Teacher: "",
    Error: "",
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    
    set_error: (Admin, action) => {
      console.log(action)
      Admin.Error = action.payload.data
    },
    set_student: (Admin, action) => {
      console.log(action.payload)
    },
    reset_error: (Admin, action) => {
      Admin.Error = ""

    },
    set_classes: (Admin, action) => {
      console.log(action.payload)
      Admin.Classes = action.payload
    },
    set_students: (Admin, action) => {
      console.log(action.payload)
      Admin.Students = action.payload
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

export const { set_error, logged_in, reset_error, set_user, set_classes, set_students, set_student} = slice.actions;
export default slice.reducer;

// export const login = () => start({

// })
export const getClass = () => start({
url: "http://127.0.0.1:8000/api/class",
headers: {
  authorization: localStorage.getItem('token')
},
onSuccess: set_classes.type,
onError: set_error.type
})
export const getStudents = (id) => start({
url: "http://127.0.0.1:8000/api/student/byclass/" + id,
headers: {
  authorization: localStorage.getItem('token')
},
onSuccess: set_students.type,
onError: set_error.type
})
export const getStudent = (id) => start({
url: "http://127.0.0.1:8000/api/student/" + id,
headers: {
  authorization: localStorage.getItem('token')
},
onSuccess: set_student.type,
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



