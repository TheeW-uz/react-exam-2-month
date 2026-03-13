import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/sign-up/SignUp';
import Verificate from './pages/verificate/Verificate';
import Products from './pages/products/Products';

const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verificate" element={<Verificate />} />
        <Route path="/products/:id" element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
