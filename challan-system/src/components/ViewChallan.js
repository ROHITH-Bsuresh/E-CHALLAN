import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ViewChallan.css';

function ViewChallan() {
  const [carNumber, setCarNumber] = useState('');
  const [challans, setChallans] = useState([]);
  const [error, setError] = useState('');

  const handleFetchChallans = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/getChallans/${carNumber}`);
      setChallans(response.data);
      setError('');
    } catch (err) {
      console.error('Error fetching challans:', err);
      setError('Failed to fetch challans');
    }
  };

  return (
    <div className="view-challan">
      <h1>View Challans</h1>
      <div className="form-group">
        <label htmlFor="carNumber">Car Number</label>
        <input
          type="text"
          id="carNumber"
          value={carNumber}
          onChange={(e) => setCarNumber(e.target.value)}
          required
        />
        <button onClick={handleFetchChallans}>Fetch Challans</button>
      </div>
      {error && <p className="error">{error}</p>}
      {challans.length > 0 && (
        <div className="challan-list">
          {challans.map((challan, index) => (
            <div key={index} className="challan-summary">
              <h2>Challan Summary</h2>
              <p><strong>Car Number:</strong> {challan.carNumber}</p>
              <p><strong>Driver Name:</strong> {challan.driverName}</p>
              <p><strong>Driver ID:</strong> {challan.driverId}</p>
              <p><strong>Parking Place:</strong> {challan.street}</p>
              <p><strong>Parking Duration:</strong> {challan.parkingDuration} hours</p>
              <p><strong>Total Amount:</strong> ₹{challan.totalAmount}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewChallan;
