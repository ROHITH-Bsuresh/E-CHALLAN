import React from 'react';
import '../styles/Home.css';
import companyLogo from '../assets/e-challan.jpg'; // Ensure this path is correct
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <img src={companyLogo} alt="Company Logo" className="home-logo" />
        <h1>Welcome to the Challan Management System</h1>
      </header>
      <main className="home-content">
        <p>
          Our system is designed to streamline the process of managing parking challans. 
          With a user-friendly interface, you can easily submit your challan details, 
          view records, and track your status with ease.
        </p>
        <p>
          Whether you are a vehicle owner, parking authority, or just want to learn 
          more about parking management, we have you covered. Explore our site to 
          understand how our system works and get started with hassle-free challan 
          management.
        </p>
        <div className="home-buttons">
          <button onClick={() => window.location.href='/challan'}>Submit a Challan</button>
          <Link to="/view-challan">
            <button>View Challan</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
