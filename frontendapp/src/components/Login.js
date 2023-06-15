import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './login.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggle = () => {
    setIsSignIn(!isSignIn);
  };

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: '',
    dateOfBirth: null,
    alternetPhone: '',
    fatherName: '',
    motherName: '',
    panNumber: '',
    panImage: null,
    panImageFileName: '',
    votercardImage: null,
    votercardImageFileName: '',
    aadharNumber: '',
    aadharImage: null,
    aadharImageFileName: '',
    profilePic: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      dateOfBirth: date
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const fileName = files[0] ? files[0].name : '';

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files[0],
      [`${name}FileName`]: fileName
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 4) {
      setStep((prevStep) => prevStep + 1);
    } else {
      handleSignUp(e);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Perform sign up logic with the form data
    console.log('Sign Up Data:', formData);
  };

  const renderFormFields = () => {
    const fieldGroups = [
      [
        { name: 'username', placeholder: 'Username', value: formData.username },
        { name: 'email', placeholder: 'Email', value: formData.email },
        { name: 'password', placeholder: 'Password', value: formData.password },
        { name: 'confirmPassword', placeholder: 'Confirm password', value: formData.confirmPassword }
      ],
      [
        { name: 'contact', placeholder: 'Contact', value: formData.contact },
        { name: 'dateOfBirth', placeholder: 'Date of Birth', value: formData.dateOfBirth },
        { name: 'alternetPhone', placeholder: 'Alternate Phone', value: formData.alternetPhone },
        { name: 'fatherName', placeholder: "Father's Name", value: formData.fatherName }
      ],
      [
        { name: 'motherName', placeholder: "Mother's Name", value: formData.motherName },
        { name: 'panNumber', placeholder: 'PAN Number', value: formData.panNumber },
        { name: 'panImage', placeholder: 'PAN Image', type: 'file' },
        { name: 'votercardImage', placeholder: 'Voter Card Image', type: 'file' }
      ],
      [
        { name: 'aadharNumber', placeholder: 'Aadhar Number', value: formData.aadharNumber },
        { name: 'aadharImage', placeholder: 'Aadhar Image', type: 'file' },
        { name: 'profilePic', placeholder: 'Profile Pic', type: 'file' }
      ]
    ];

    const currentGroup = fieldGroups[step - 1] || [];

    return (
      <>
        {currentGroup.map((field, index) => (
          <div className="input-group" key={index}>
            {field.type === 'file' ? (
              <>
                <i className="bx bxs-image"></i>
                <div className="file-input">
                  <input
                    type={field.type}
                    name={field.name}
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <label htmlFor={field.name}>
                    {field.placeholder}{' '}
                    {formData[`${field.name}FileName`] ? `- ${formData[`${field.name}FileName`]}` : ''}
                  </label>
                </div>
              </>
            ) : field.name === 'dateOfBirth' ? (
              <>
                <i className="bx bxs-calendar"></i>
                <DatePicker
                  selected={formData.dateOfBirth}
                  onChange={handleDateChange}
                  placeholderText={field.placeholder}
                  dateFormat="MM/dd/yyyy"
                />
              </>
            ) : (
              <>
                <i className="bx bxs-user"></i>
                <input
                  type="text"
                  name={field.name}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={handleChange}
                />
              </>
            )}
          </div>
        ))}
        <div className="button-group">
          {/* {step > 1 && (
            // <button className="back-button" onClick={handleBack}>
            //   <AiOutlineArrowLeft />
            // </button>
          )} */}
          {step < fieldGroups.length && (
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          )}
          {step === fieldGroups.length && (
            <button className="sign-up-button" onClick={handleSignUp}>
              Sign up
            </button>
          )}
        </div>
      </>
    );
  };

  return (
    <div id="container" className={`container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
      <div className="row">
        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <div className="form sign-up">
              {renderFormFields()}
              <p>
                {step > 1 && (
                  <button className="back-icon" onClick={handleBack}>
                    <AiOutlineArrowLeft />
                  </button>
                )}
                <span>Already have an account?</span>
                <b onClick={toggle} className="pointer">
                  Sign in here
                </b>
              </p>
            </div>
          </div>
        </div>
        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <div className="form sign-in">
              <div className="input-group">
                <i className="bx bxs-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Password" />
              </div>
              <button>Sign in</button>
              <p>
                <b>Forgot password?</b>
              </p>
              <p>
                <span>Don't have an account?</span>
                <b onClick={toggle} className="pointer">
                  Sign up here
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;