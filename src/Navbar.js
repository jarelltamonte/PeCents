import React from 'react';
import './Navbar.css';
import logo from "./img/logo.png"

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home">Saving</a></li>
        <p className="vbar">|</p>
        <li><a href="#about"><img src={logo} alt='logo' className='logo'/></a></li>
        <p className="vbar">|</p>
        <li><a href="#contact">Profile</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
