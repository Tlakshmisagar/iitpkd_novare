// import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
// import Logo from "../images/Untitled.png";

function Navbar() {
  // const [isDropdownVisible, setDropdownVisible] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownVisible(!isDropdownVisible);
  // };

  return (
    <nav className="navbar position-fixed z-3 w-100 border-bottom border-dark-subtle py-0 bg-light-subtle">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {/* <img
            src={Logo}
            alt="Logo"
            width="50"
            height="36"
            className=""
          /> */}
          <h3 className="">Novare</h3>
        </Link>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link className="nav-Link active" aria-current="page" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-Link" to="/gallery">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-Link" to="/team">
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-Link" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
