import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ChallanForm from './components/ChallanForm';
import ViewChallan from './components/ViewChallan'; // Import the ViewChallan component
import Navbar from './components/Navbar';  // Import the Navbar component
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Include the Navbar on every page */}
        <Navbar />
        
        <Routes>
          {/* Route for Home page */}
          <Route path="/" element={<Home />} />

          {/* Route for About page */}
          <Route path="/about" element={<About />} />

          {/* Route for Challan Form page */}
          <Route path="/challan" element={<ChallanForm />} />

          {/* Route for View Challan page */}
          <Route path="/view-challan" element={<ViewChallan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
