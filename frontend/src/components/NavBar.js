// import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
// import Logo from "../images/Untitled.png";

function Navbar() {

  return (
    <nav className="navbar position-fixed z-3 w-100 border-bottom border-dark-subtle py-0 bg-dark ">
      <div className="container-fluid container">
        <Link className="navbar-brand text-light" to="/iitpkd_novare">
          {/* <img
            src={Logo}
            alt="Logo"
            width="50"dark
            height="36"
            className=""
          /> */}
          <h3 className="">Novare</h3>
        </Link>
        <ul className="nav justify-content-end ">
          <li className="nav-item ">
            <Link className="container text-white nav-link" to="/trails">
              Trails
            </Link>
          </li>
          <li className="nav-item">
            <Link className="container text-white nav-link" to="/gallery">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link className="container text-white nav-link" to="/articles">
              Articles
            </Link>
          </li>
          <li className="nav-item">
            <Link className="container text-white nav-link" to="/team">
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link className="container text-white nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="container text-white nav-link" to="/contact">
              Contact Us
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
