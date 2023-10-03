import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Trails from "./components/Trails";
import Gallery from "./components/Gallery";
import Articles from "./components/Articles";
import Team from "./components/Team";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="position-relative">
      <Router basename="/">
        <Navbar />
        <Routes>
          <Route path="/iitpkd_novare" element={<HomePage />}></Route>
          <Route path="/trails" element={<Trails />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
