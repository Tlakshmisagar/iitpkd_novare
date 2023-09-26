import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/NavBar';
import Captions from './components/Captions'

function App() {
  return (
    <>
    <Router basename="/">
      <div>
      <Navbar/>
      </div>
      <Routes>
          <Route path="/" element={<Captions />}></Route>
          <Route path="/about" element={<Captions />} ></Route>
          <Route path="/gallery" element={<><Captions /></>} ></Route>
          <Route path="/team" element={<><Captions /></>} ></Route>
          <Route path="/contact" element={<><Captions /></>} ></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
