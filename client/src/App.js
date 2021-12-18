import React from 'react';
import Home from './pages/Home'
import Nav from './components/Nav'
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
      <Routes>
        
        <Route path="/" element={<Nav/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Home/>}/>
        <Route path="/create-account" element={<Home/>}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
