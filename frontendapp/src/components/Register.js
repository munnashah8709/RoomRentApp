import React, { useState } from 'react'
import './register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate=useNavigate();
  const [registerdata, setregisterdata]=useState({})
  const handleUsernameChange=(e)=>{
     const Name=e.target.name;
     const Value=e.target.value
     setregisterdata({...registerdata, [Name]:Value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerdata)
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
         <div className='row' style={{display:"flex"}}>
           <div className='col-6' style={{ width: '50%'}} >
           <input
            type="text" required  placeholder="Username"
            name='UserName'
            onChange={handleUsernameChange}
            autoComplete="off"
          />
           </div>

           <div className='col-6' style={{ width: '50%',marginLeft:"10px"}}>
          <input
            type="text"
            required
            placeholder="Father Name"
             name='FatherName'
            onChange={handleUsernameChange}
            autoComplete="off"
          />
           </div>
         </div>

         <div className='row' style={{display:"flex"}}>
           <div className='col-6' style={{ width: '50%'}} >
           <input
            type="text" required  placeholder="Mother Name"
            name='MotherName'
            onChange={handleUsernameChange}
            autoComplete="off"
          />
           </div>

           <div className='col-6' style={{ width: '50%',marginLeft:"10px"}}>
          <input
            type="number"
            required
            placeholder="Phone Number"
            name='PhoneNumber'
            onChange={handleUsernameChange}
            autoComplete="off"
          />
           </div>
         </div>
         <div className='row' style={{display:"flex"}}>
           <div className='col-6' style={{ width: '50%'}} >
           <input
            type="email" required  placeholder="Email"
            name='email'
            onChange={handleUsernameChange}
            autoComplete="off"
          />
           </div>

           <div className='col-6' style={{ width: '50%',marginLeft:"10px"}}>
          <input
            type="date"
            required
            placeholder="Date Of Birth"
            name='DOB'
            onChange={handleUsernameChange}
            autoComplete="off"
          />
           </div>
         </div>

         <div className='row' style={{display:"flex"}}>
           <div className='col-6' style={{ width: '50%'}} >
           <input
            type="text" required  placeholder="Password"
            name='Password'
            onChange={handleUsernameChange}
            autoComplete="off"
          />
           </div>

           <div className='col-6' style={{ width: '50%',marginLeft:"10px"}}>
          <input
            type="text"
            required
            placeholder="Conform Password"
            name='ConformPassword'
            onChange={handleUsernameChange}
            autoComplete="off"
          />
           </div>
         </div>
         <div className='row' style={{display:"flex"}}>
           <div className='col-6' style={{ width: '50%'}} >
           <input
            type="text" required  placeholder="Pan Number"
             name='PanNumber'
            onChange={handleUsernameChange}
            autoComplete="off"
          />
           </div>

           <div className='col-6' style={{ width: '50%',marginLeft:"10px"}}>
          <input
            type="text"
            required
            placeholder="Aadhar"
            name='AadharNumber'
            onChange={handleUsernameChange}
            autoComplete="off"
          />
           </div>
         </div>

        
  
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
