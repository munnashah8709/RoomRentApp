import React from 'react'
import Login from '../components/Login';
//import Register from '../components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from '../components/Register';
const Routings = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />

          <Route path='/registration' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routings
