import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // e.g., make an API call to authenticate the user
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = () => {
    if (password.length <= 8 ) {
      setPasswordError('Minimum 8 characters');
    } else {
      setPasswordError('');
    }
  }
    
  const handelrout=()=>{
    navigate("/registration")
  }
  return(
    <div className="row" style={{display:"flex"}}>
    <div className="col div1">
    {/* <img className='imagelog' src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Image Description" />  */}
    <h1 style={{color:"white"}}>Wellcome to Home page</h1>
    </div>

    
    <div className="col" style={{ width: '50%'}}>
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>SIGN IN TO YOUR ACCOUNT</h2>
          <input
            type="text"
            required
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            autoComplete="off"
          />
          <input
            type={showPassword ? 'text' : 'password'} required
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            onFocus={validatePassword}
            onBlur={validatePassword}
            autoComplete="off"
          />
          <img
            src={showPassword ? 'https://static.thenounproject.com/png/777494-200.png' : 'https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png'}
            onClick={handleTogglePasswordVisibility}
            alt="Toggle Password Visibility"
          />
          <span id="vaild-pass">{passwordError}</span>
          <button type="submit">SIGN IN</button>
          <p className="message"><a href="#">Forgot your password?</a></p>
          <p className="message" onClick={handelrout}>Do not have a Acount</p>
        </form>
      </div>
    </div>
    </div>
  </div>
  )
};

export default Login;