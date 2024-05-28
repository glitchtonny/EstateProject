import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
//import logo from ""

const Navbar = ({ isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <NavLink to="/home">JATE Estates</NavLink>

        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/home" activeClassName="active">Home</NavLink>
          <NavLink to="/blog" activeClassName="active">Blog</NavLink>
        </div>
        <div className={`navbar-user ${isOpen ? 'open' : ''}`}>
          {isAuthenticated ? (
            <>
              <NavLink to="/profile" activeClassName="active">Profile</NavLink>
              <NavLink to="/logout" activeClassName="active">Logout</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login" activeClassName="active">Login</NavLink>
              <NavLink to="/signup" activeClassName="active">Sign Up</NavLink>
            </>
          )}
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
