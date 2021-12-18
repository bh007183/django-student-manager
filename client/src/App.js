import React from 'react';
import Home from './pages/Home'
import PublicNav from './components/PublicNav'
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
        
        <Route path="/" element={<PublicNav/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
