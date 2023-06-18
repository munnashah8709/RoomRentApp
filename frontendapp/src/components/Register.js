import React, { useState } from 'react'
import './register.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Register() {
  const navigate=useNavigate();


  const [registerdata, setregisterdata]=useState({})
  const handleUsernameChange=(e)=>{
     const Name=e.target.name;
     const Value=e.target.value
     setregisterdata({...registerdata, [Name]:Value})
  }
  
  const formdata1 = new FormData();
  formdata1.append("username", registerdata.UserName);
  formdata1.append("email", registerdata.email);
  formdata1.append("contact", registerdata.PhoneNumber);
  formdata1.append("password", registerdata.password);


  const handleSubmit = (e) => {
    e.preventDefault();
   
    if(registerdata.Password!==registerdata.ConformPassword){
      console.log("error")
    }else{

      axios
      .post("http://localhost:8000/register", formdata1, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata1),
      })
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("Registered Successfull");
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }

  };



  const handelRoute=()=>{
    navigate("/")
  }
  return (
    <div className="row" style={{display:"flex"}}>
    <div className="col" style={{ width: '50%'}}>
    <div className="login-page">
      <div className="form1">
        <form className="login-form" onSubmit={handleSubmit}>


         
           <input
            type="text" required  placeholder="Username"
            name='UserName'
            onChange={handleUsernameChange}
            autoComplete="off"
          />
        
           <input
            type="email" required  placeholder="Email"
            name='email'
            onChange={handleUsernameChange}
            autoComplete="off"
          />

            <input
            type="number"
            required
            placeholder="Phone Number"
            name='PhoneNumber'
            onChange={handleUsernameChange}
            autoComplete="off"
          />

          <input
            type="text" required  placeholder="Password"
            name='Password'
            onChange={handleUsernameChange}
            autoComplete="off"
          />

           <input
            type="text" required  placeholder="ConformPassword"
            name='ConformPassword'
            onChange={handleUsernameChange}
            autoComplete="off"
          />
        
          <button type="submit">SIGN UP</button>
          <p className="message" onClick={handelRoute}>Allerdy Have An Acount</p>
        </form>
      </div>
    </div>
    </div>


    <div className="col div2">
    {/* <img className='imagelog' src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Image Description" />  */}
    <h1 style={{color:"white", textAlign:"center", marginTop:"350px"}}>Register Here To Explore More</h1>
    </div>
    </div>
  )
}

export default Register
