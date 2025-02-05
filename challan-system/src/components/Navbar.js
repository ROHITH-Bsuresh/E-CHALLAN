import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import companyLogo from '../assets/e-challan.jpg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={companyLogo} alt="Company Logo" className="logo-image" />
        <h1 className="logo-text">Challan System</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/challan">Challan Details</Link></li>
        <li><Link to="/view-challan">View Challan</Link></li> {/* Add link */}
      </ul>
    </nav>
  );
}

export default Navbar;
