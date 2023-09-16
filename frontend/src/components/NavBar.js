// import React, { useState } from "react";
import "../styles/NavBar.css";
import Logo from "../images/Untitled.png";

function Navbar() {
  // const [isDropdownVisible, setDropdownVisible] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownVisible(!isDropdownVisible);
  // };

  return (
    <nav class="navbar bg-body-tertiar">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src={Logo}
            alt="Logo"
            width="50"
            height="36"
            class="d-inline-block align-text-top"
          />
          Novare
        </a>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Team
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
