import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from "../Assets";

const Navbar = ({ isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <NavLink to="/Home">JATE Estate</NavLink>
            <img src={logo} alt="JATE Estate" className="navbar-logo"/>
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/Home" activeClassName="active">Home</NavLink>
          <NavLink to="/Blog" activeClassName="active">Blog</NavLink>
        </div>
        <div className={`navbar-user ${isOpen ? 'open' : ''}`}>
          {isAuthenticated ? (
            <>
              <NavLink to="/logout" activeClassName="active">Logout</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login" activeClassName="active">Login</NavLink>
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
