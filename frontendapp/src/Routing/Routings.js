import React from 'react'
import Login from '../components/Login';
//import Register from '../components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Routings = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routings
