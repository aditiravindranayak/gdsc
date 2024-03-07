import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo (2).png"; // Correct path to the logo file


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="DSC Logo" className="logo-img" />
      </div>
      <div className="navbar-links">
        <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/challenges">Challenges</a></li>
        <li><a href="/core">Core</a></li>
        <li><a href="/events">Events</a></li>
        
        </ul>
      </div>
      <div className="contact-button">
        <a href="/contact" className="btn-blue">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
