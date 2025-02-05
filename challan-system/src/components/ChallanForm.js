import React, { useState, useEffect } from 'react';
import '../styles/ChallanForm.css';

const states = [
  { id: '1', name: 'Tamil Nadu' },
  { id: '2', name: 'Karnataka' },
  { id: '3', name: 'Maharashtra' },
  { id: '4', name: 'Delhi' },
  { id: '5', name: 'Gujarat' }
];

const districts = {
  '1': ['Chennai', 'Coimbatore', 'Madurai', 'Trichy', 'Salem'],
  '2': ['Bengaluru', 'Mysuru', 'Mangaluru', 'Hubballi', 'Gulbarga'],
  '3': ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad'],
  '4': ['New Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi'],
  '5': ['Ahmedabad', 'Vadodara', 'Surat', 'Rajkot', 'Gandhinagar']
};

const streets = {
  'Chennai': ['Chidhambaranar Street - ₹20', 'Anna Salai - ₹15', 'Nungambakkam - ₹25'],
  'Coimbatore': ['R S Puram - ₹18', 'Peelamedu - ₹19', 'Tidel Park - ₹21'],
  'Madurai': ['Periyar Bus Stand - ₹17', 'Koodal Nagar - ₹16', 'Anna Nagar - ₹18'],
  'Trichy': ['Srirangam - ₹20', 'Thillai Nagar - ₹19', 'Ranjith Road - ₹21'],
  'Salem': ['Brooke Bond - ₹19', 'Rathinapuri - ₹18', 'Sankagiri - ₹20'],
  'Bengaluru': ['MG Road - ₹20', 'Koramangala - ₹18', 'Whitefield - ₹22'],
  'Mysuru': ['Devaraja Market - ₹18', 'Krishnaraja Boulevard - ₹19', 'Saraswathipuram - ₹20'],
  'Mangaluru': ['Kankanady - ₹19', 'Pandeshwar - ₹18', 'Bunts Hostel - ₹20'],
  'Hubballi': ['Keshwapur - ₹20', 'Gokul Road - ₹19', 'Navanagar - ₹21'],
  'Gulbarga': ['Cattle Market - ₹18', 'Jayanagar - ₹19', 'Shahabad - ₹20'],
  'Mumbai': ['Marine Drive - ₹30', 'Andheri - ₹25', 'Colaba - ₹28'],
  'Pune': ['Camp - ₹22', 'Kothrud - ₹21', 'Hinjewadi - ₹23'],
  'Nagpur': ['Sitabuldi - ₹20', 'Sadar - ₹18', 'Wardha Road - ₹19'],
  'Nashik': ['Panchavati - ₹22', 'Gangapur - ₹21', 'Mhasrul - ₹20'],
  'Aurangabad': ['CIDCO - ₹21', 'Railway Station - ₹20', 'Jalna Road - ₹19'],
  'New Delhi': ['Connaught Place - ₹25', 'Karol Bagh - ₹20', 'Lajpat Nagar - ₹23'],
  'North Delhi': ['Rohini - ₹22', 'Pitampura - ₹21', 'Model Town - ₹23'],
  'South Delhi': ['Greater Kailash - ₹24', 'Hauz Khas - ₹25', 'Lajpat Nagar - ₹23'],
  'East Delhi': ['Preet Vihar - ₹22', 'Vikas Marg - ₹21', 'Mayur Vihar - ₹20'],
  'West Delhi': ['Janakpuri - ₹23', 'Dwarka - ₹24', 'Uttam Nagar - ₹22'],
  'Ahmedabad': ['CG Road - ₹22', 'S.G. Highway - ₹21', 'Maninagar - ₹20'],
  'Vadodara': ['Alkapuri - ₹20', 'Sayajigunj - ₹18', 'Ellora Park - ₹19'],
  'Surat': ['Ring Road - ₹21', 'Gopi Talav - ₹20', 'City Light - ₹18'],
  'Rajkot': ['Kalamandir - ₹20', 'Gondal Road - ₹19', 'Madhapar - ₹18'],
  'Gandhinagar': ['Sector 21 - ₹22', 'Sector 25 - ₹21', 'Sector 16 - ₹20']
};



function ChallanForm() {
  const [formData, setFormData] = useState({
    carNumber: '',
    driverName: '',
    driverId: '',
    parkingPlace: '',
    parkingDuration: '',
    state: '',
    district: '',
    street: '',
    totalAmount: 0
  });

  const [districtOptions, setDistrictOptions] = useState([]);
  const [streetOptions, setStreetOptions] = useState([]);

  useEffect(() => {
    if (formData.state) {
      setDistrictOptions(districts[formData.state] || []);
      setFormData((prevData) => ({ ...prevData, district: '', street: '', totalAmount: 0 }));
    }
  }, [formData.state]);

  useEffect(() => {
    if (formData.district) {
      setStreetOptions(streets[formData.district] || []);
      setFormData((prevData) => ({ ...prevData, street: '', totalAmount: 0 }));
    }
  }, [formData.district]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };

      if (name === 'street') {
        const streetRateMatch = value.match(/₹(\d+)/);
        const streetRate = streetRateMatch ? parseInt(streetRateMatch[1], 10) : 0;
        const durationHours = parseInt(updatedData.parkingDuration, 10) || 0;
        updatedData.totalAmount = streetRate * durationHours;
      } else if (name === 'parkingDuration') {
        const durationHours = parseInt(value, 10) || 0;
        const streetRateMatch = updatedData.street.match(/₹(\d+)/);
        const streetRate = streetRateMatch ? parseInt(streetRateMatch[1], 10) : 0;
        updatedData.totalAmount = streetRate * durationHours;
      }

      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/saveChallan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Challan data has been saved successfully!');
        setFormData({
          carNumber: '',
          driverName: '',
          driverId: '',
          parkingPlace: '',
          parkingDuration: '',
          state: '',
          district: '',
          street: '',
          totalAmount: 0
        });
      } else {
        alert('Failed to save challan data.');
      }
    } catch (error) {
      console.error('Error saving challan data:', error);
      alert('An error occurred while saving challan data.');
    }
  };

  return (
    <div className="challan-form-container">
      <h1>Challan Details</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="carNumber">Car Number</label>
        <input
          type="text"
          id="carNumber"
          name="carNumber"
          value={formData.carNumber}
          onChange={handleChange}
          pattern="[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}"
          title="Enter a valid car number in the format AB12CD3456"
          required
        />

        <label htmlFor="driverName">Driver Name</label>
        <input
          type="text"
          id="driverName"
          name="driverName"
          value={formData.driverName}
          onChange={handleChange}
          maxLength="25"
          required
        />

        <label htmlFor="driverId">Driver ID</label>
        <input
          type="text"
          id="driverId"
          name="driverId"
          value={formData.driverId}
          onChange={handleChange}
          pattern="\d{12}"
          title="Driver ID must be 12 digits"
          required
        />

        <label htmlFor="state">Select State</label>
        <select id="state" name="state" value={formData.state} onChange={handleChange} required>
          <option value="">Select State</option>
          {states.map(state => (
            <option key={state.id} value={state.id}>{state.name}</option>
          ))}
        </select>

        <label htmlFor="district">Select District</label>
        <select id="district" name="district" value={formData.district} onChange={handleChange} required>
          <option value="">Select District</option>
          {districtOptions.map(district => (
            <option key={district} value={district}>{district}</option>
          ))}
        </select>

        <label htmlFor="street">Select Street</label>
        <select id="street" name="street" value={formData.street} onChange={handleChange} required>
          <option value="">Select Street</option>
          {streetOptions.map(street => (
            <option key={street} value={street}>{street}</option>
          ))}
        </select>

        <label htmlFor="parkingDuration">Parking Duration (hours)</label>
        <input
          type="number"
          id="parkingDuration"
          name="parkingDuration"
          value={formData.parkingDuration}
          onChange={handleChange}
          min="1"
          required
        />

        <button type="submit">Generate Challan</button>
      </form>

      {formData.totalAmount > 0 && (
        <div className="challan-summary">
          <div className="card">
            <h2>Challan Summary</h2>
            <p><strong>Car Number:</strong> {formData.carNumber}</p>
            <p><strong>Driver Name:</strong> {formData.driverName}</p>
            <p><strong>Driver ID:</strong> {formData.driverId}</p>
            <p><strong>Parking Place:</strong> {formData.street}</p>
            <p><strong>Parking Duration:</strong> {formData.parkingDuration} hours</p>
            <p><strong>Total Amount:</strong> ₹{formData.totalAmount}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChallanForm;