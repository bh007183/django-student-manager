import {createSlice} from '@reduxjs/toolkit';
import {start} from "./custom-actions"





export const slice = createSlice({
  name: 'Admin',
  initialState: {
    LoggedIn: false,
    Classes: [],
    Students: [],
    Student: "",
    Teacher: "",
    Error: "",
    Success: ""
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    
    set_error: (Admin, action) => {
      Admin.Error = action.payload.data
    },
    set_success: (Admin, action) => {
      console.log(action.payload)
      Admin.Success = true

    },

    set_student: (Admin, action) => {
      Admin.Student = action.payload
    },
    reset_error: (Admin, action) => {
      Admin.Error = ""

    },
    reset_success: (Admin, action) => {
      Admin.Success = ""

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
       Admin.LoggedIn = true
       localStorage.setItem("token", `JWT ${action.payload.access}`)
    }, 

    set_user: (Admin, action) => {
      console.log(action.payload)
    },
    go_back: (Admin, action) => {
      window.history.back()
    }
   
  },
});

export const { set_error, go_back, logged_in, reset_success, set_success, reset_error, set_user, set_classes, set_students, set_student} = slice.actions;
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

export const createClass = (data) => start({
  url: "http://127.0.0.1:8000/api/class/",
  method: 'POST',
  headers: {
    authorization: localStorage.getItem('token')
  },
  data,
  onSuccess: set_success.type,
  onError: set_error.type
})
export const createStudent = (data) => start({
  url: "http://127.0.0.1:8000/api/student/",
  method: 'POST',
  headers: {
    authorization: localStorage.getItem('token')
  },
  data,
  onSuccess: set_success.type,
  onError: set_error.type
})

export const deleteStudent = (id) => start({
  url: "http://127.0.0.1:8000/api/student/" + id,
  method: 'DELETE',
  headers: {
    authorization: localStorage.getItem('token')
  },
  onSuccess: go_back.type,
  onError: set_error.type
})
export const updateStudent = (data) => start({
  url: "http://127.0.0.1:8000/api/student/"+ window.location.pathname.split("/")[2] + "/",
  method: 'PUT',
  headers: {
    authorization: localStorage.getItem('token')
  },
  data,
  onSuccess: set_success.type,
  onError: set_error.type
})



