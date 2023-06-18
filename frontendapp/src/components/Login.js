import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate=useNavigate();
  const [loginData, setlogindata]=useState({})
  
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');


  
  const handleUsernameChange = (e) => {
    const Name=e.target.name;
     const Value=e.target.value
     setlogindata({...loginData, [Name]:Value})
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // e.g., make an API call to authenticate the user
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const validatePassword = () => {
  //   if (password.length <= 8 ) {
  //     setPasswordError('Minimum 8 characters');
  //   } else {
  //     setPasswordError('');
  //   }
  // }
    
  const handelrout=()=>{
    navigate("/registration")
  }
  
  const submit=async ()=>{
  
    console.log(loginData.email)
    console.log(loginData.Password)

    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.Password,
      }),
    });
    const datas = await response.json();
    if (datas.token) {
      localStorage.setItem("jwt", datas.token);
      localStorage.setItem("User", JSON.stringify(datas.user));
    }
    if (!datas.error) {
      alert("login successfull");
     
    } else {
      alert("Invalid Credentials");
    }
  }

  return(
    <div className="row" style={{display:"flex"}}>
    <div className="col div1">
    {/* <img className='imagelog' src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Image Description" />  */}
    <h1 style={{color:"white", marginTop:"300px", marginLeft:"20px"}}>Wellcome to Home page</h1>
    </div>

    
    <div className="col" style={{ width: '50%'}}>
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>SIGN IN TO YOUR ACCOUNT</h2>
          <input
            type="email" required  placeholder="Email"
            name='email'
            onChange={handleUsernameChange}
            autoComplete="off"
          />

           <input
            type="text" required  placeholder="Password"
            name='Password'
            onChange={handleUsernameChange}
            autoComplete="off"
          />
          <img
            src={showPassword ? 'https://static.thenounproject.com/png/777494-200.png' : 'https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png'}
            onClick={handleTogglePasswordVisibility}
            alt="Toggle Password Visibility"
          />
          <span id="vaild-pass">{passwordError}</span>
          <button type="submit" onClick={submit} >SIGN IN</button>
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