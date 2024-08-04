import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav id="navbar">
    <div id="logo">
      <a href="/">
        <img src="websiteimages/logoinf.jpeg" alt="Logo" />
      </a>
    </div>
    <ul>
      <li className="item"><a href="#home">Home</a></li>
      <li className="item"><a href="#services-container">Services</a></li>
      <li className="item"><a href="#client-section">Top-10 stocks</a></li>
      <li className="item"><a href="#client-section">Gate Preparation</a></li>
      <li className="item"><a href="#client-section">About me</a></li>
      <li className="item"><a href="#contact">Contact Us</a></li>
    </ul>
  </nav>
);

export default Navbar;
