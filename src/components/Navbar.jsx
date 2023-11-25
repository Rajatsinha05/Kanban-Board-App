import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css'
// Navbar.js



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src='https://gurucool.life/static/media/GurucoolNewWebLogo.7044d1e41f0ae5cc0426c727085ab32d.svg' alt='img'/>
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/login" className="navbar-link">
            Login
          </Link>
          <Link to="/signup" className="navbar-link">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
