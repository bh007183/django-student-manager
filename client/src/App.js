import React from 'react';
import Home from './pages/Home'
import Nav from './components/Nav'
import CreateLogin from './pages/CreateLogin'
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
        <Route path="/entry" element={<CreateLogin/>}/>
       
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
