import React, { useState } from 'react';
import './ngoDetail.css'; // Assuming you have a separate CSS file
import axios from 'axios';

const NgoDetail = () => {
  const [formData, setFormData] = useState({
    ngoName: '',
    registrationNumber: '',
    yearOfEstablishment: '',
    typeOfNGO: '',
    country: '',
    state: '',
    city: '',
    address: '',
    contactNumber: '',
    email: '',
    website: '',
    founders: '',
    ceo: ''
  });

  const [message, setMessage] = useState('');

  // Handle form field change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register-ngo', formData);
      setMessage(response.data.message);
      alert("Sign-up successful")
      // Clear the form
      setFormData({
        ngoName: '',
        registrationNumber: '',
        yearOfEstablishment: '',
        typeOfNGO: '',
        country: '',
        state: '',
        city: '',
        address: '',
        contactNumber: '',
        email: '',
        website: '',
        founders: '',
        ceo: ''
      });
    } catch (error) {
      setMessage('An error occurred during registration. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="ngodetailform">
    <form onSubmit={handleSubmit} className="registration-form">
      <h2 className="form-title">NGO Registration</h2>

      <input
        type="text"
        name="ngoName"
        placeholder="NGO Name"
        value={formData.ngoName}
        onChange={handleChange}
        required
        className="form-input"
      />

      <input
        type="text"
        name="registrationNumber"
        placeholder="Registration Number"
        value={formData.registrationNumber}
        onChange={handleChange}
        required
        className="form-input"
      />

      <input
        type="date"
        name="yearOfEstablishment"
        placeholder="Year of Establishment"
        value={formData.yearOfEstablishment}
        onChange={handleChange}
        required
        className="form-input"
      />

<select
          name="typeOfNGO"
          className='form-input'
          value={formData.typeOfNGO}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select NGO Category</option>
          <option value="Water">Water</option>
          <option value="Education">Education</option>
          <option value="Land">Land</option>
          <option value="Child and Women">Child and Women</option>
          <option value="Animals">Animals</option>
          <option value="Forest">Forest</option>
          <option value="Other">Other</option>
        </select>
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
        required
        className="form-input"
      />

      <input
        type="text"
        name="state"
        placeholder="State/Province"
        value={formData.state}
        onChange={handleChange}
        required
        className="form-input"
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        required
        className="form-input"
      />

      <textarea
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        required
        className="form-input"
      />

      <input
        type="tel"
        name="contactNumber"
        placeholder="Contact Number"
        value={formData.contactNumber}
        onChange={handleChange}
        required
        className="form-input"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="form-input"
      />

      <input
        type="url"
        name="website"
        placeholder="Website URL"
        value={formData.website}
        onChange={handleChange}
        className="form-input"
      />

      <input
        type="text"
        name="founders"
        placeholder="Founder(s) Name(s)"
        value={formData.founders}
        onChange={handleChange}
        required
        className="form-input"
      />

      <input
        type="text"
        name="ceo"
        placeholder="Current CEO/President/Director"
        value={formData.ceo}
        onChange={handleChange}
        required
        className="form-input"
      />

      <button type="submit" className="submit-button">Register</button>
    </form>
    </div>
  );
};

export default NgoDetail;
