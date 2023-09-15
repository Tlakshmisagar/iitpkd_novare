import React, { useState } from 'react';
import './NavBar.css';

function Navbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  function Profile() {
    return (
      <img
        src="/home/sagar/Desktop/novare/src/images/Untitled.png"
        alt="logo"
      />
    );
  }

  return (
    <nav id = "navbar">
        {/* header logo */}
        <div id="logo">
            <a href='/'>home</a>
        </div>
        {/* END header logo */}

        {/* Drop down menu */}
        <div id = "dropDownMenu">
            <ul>
                <button onClick={toggleDropdown}>Dropdown</button>
                {isDropdownVisible && (
                    <ul className="dropdown-menu">
                    <li><a href="/about">About</a></li>
                    <li><a href="/activities">Activities</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/team">Team</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    </ul>
                )}
            </ul>
        </div>
        {/* END Drop down menu */}
    </nav>
  );
}

export default Navbar;
