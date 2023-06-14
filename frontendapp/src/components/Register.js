import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./register.css"



const Register = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    contact: '',
    dateOfBirth: '',
    alternatePhone: '',
    fatherName: '',
    motherName: '',
    panNumber: '',
    panImage: null,
    voterCardImage: null,
    aadharNumber: '',
    aadharImage: null,
    profilePic: null
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    const validationErrors = {};
    if (!formData.username) {
      validationErrors.username = 'Username is required';
    }
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    }
    // Add more validation checks here for other fields

    // If there are validation errors, set the errors state
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // No validation errors, proceed with form submission
      // You can access the form data in the formData state object
      console.log(formData);
      // Reset form data
      setFormData({
        username: '',
        email: '',
        password: '',
        contact: '',
        dateOfBirth: '',
        alternatePhone: '',
        fatherName: '',
        motherName: '',
        panNumber: '',
        panImage: null,
        voterCardImage: null,
        aadharNumber: '',
        aadharImage: null,
        profilePic: null
      });
      // Reset errors
      setErrors({});
    }
  };

  return (<>
    <Navbar />
    <div className="registration-form-container">
      
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
  <label htmlFor="contact">Contact</label>
  <div className="contact-input-container">
    <select
      id="countryCode"
      name="countryCode"
      value={formData.countryCode}
      onChange={handleChange}
      required
    >
      <option value="+91">
  <FontAwesomeIcon icon={faFlag} className="flag-icon" />
  +91 (India)
</option>


      
    </select>
    <input
      type="tel"
      id="contact"
      name="contact"
      value={formData.contact}
      onChange={handleChange}
      placeholder="Enter your contact number"
      required
    />
  </div>
</div>


<div className="form-group">
  <label htmlFor="dateOfBirth">Date of Birth</label>
  <DatePicker
    id="dateOfBirth"
    name="dateOfBirth"
    selected={selectedDate}
    onChange={(date) => setSelectedDate(date)}
    dateFormat="dd/MM/yyyy"
    placeholderText="Select your date of birth"
    required
  />
</div>

        <div className="form-group">
  <label htmlFor="alternatePhone">Alternate Number</label>
  <input
    type="tel"
    id="alternatePhone"
    name="alternatePhone"
    value={formData.alternatePhone}
    onChange={handleChange}
    placeholder="Enter your phone number"
    required
  />
</div>

        <div className="form-group">
          <label htmlFor="fatherName">Father's Name</label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="motherName">Mother's Name</label>
          <input
            type="text"
            id="motherName"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
  <label htmlFor="panNumber">PAN Number</label>
  <input
    type="text"
    id="panNumber"
    name="panNumber"
    value={formData.panNumber}
    onChange={handleChange}
    placeholder="Enter your PAN number"
    required
  />
</div>

        <div className="form-group">
          <label htmlFor="panImage">Pan Image</label>
          <input
            type="file"
            id="panImage"
            name="panImage"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="voterCardImage">Voter Card Image</label>
          <input
            type="file"
            id="voterCardImage"
            name="voterCardImage"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="aadharNumber">Aadhar Number</label>
          <input
            type="text"
            id="aadharNumber"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="aadharImage">Aadhar Image</label>
          <input
            type="file"
            id="aadharImage"
            name="aadharImage"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="profilePic">Profile Picture</label>
          <input
            type="file"
            id="profilePic"
            name="profilePic"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      
    </div>
    <Footer />
    </>
  );
};

export default Register;

