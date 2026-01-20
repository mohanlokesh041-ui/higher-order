import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import User from '../components/User'

const AppRouting = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/user/:id/:name" element={<User/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default AppRouting;