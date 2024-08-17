import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/views/Home'
import Login from './components/views/authentication/Login'
import Signup from './components/views/authentication/Signup'
import Index from './components/views/Index'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
        </Routes>
      </BrowserRouter>
  )
}

export default App
