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
import TrailContent from "./components/TrailContent";
import details from "./trailcontents";

function App() {
  // Create an array of Route components using the map function
  const routes = Object.keys(details).map((key) => (
    <Route key={key} path={`/${key}`} element={<TrailContent url={key} />} />
  ));

  return (
    <div className="position-relative">
      <Router basename="/">
        <Navbar />
        <Routes>
          <Route path="/iitpkd_novare" element={<HomePage />} />
          <Route path="/trails" element={<Trails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {routes}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
