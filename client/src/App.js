import React from 'react';
import Home from './pages/Home'
import Nav from './components/Nav'
import Dashboard from './pages/Dashboard'

import Login from "./components/Login"
import CreateAccount from "./components/CreateAccount"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  
  return (
    <>
    
    <Router>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/entry" element={<Login/>}/>
        <Route path="/create-account" element={<CreateAccount/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
