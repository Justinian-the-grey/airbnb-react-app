import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/airbnb_logo.png';

function Navbar() {
  return (
    <nav className="nav-bar">
      <img className="nav-logo" src={logo} alt="logo" width="10%" />
    </nav>
  );
}

export default Navbar;
