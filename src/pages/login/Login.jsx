import React from 'react'
import './Login.css'
import Header from '../../components/header/Header.jsx';
import loginImg from '../../../public/login-img.png'
import { Link } from "react-router-dom";
import Footer from '../../components/footer/Footer.jsx';

const Login = () => {
  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-text">
          <p className='welcome'>Welcome Back</p>
          <img className='login-img' src={loginImg} alt="" />
          <div style={{display: "flex"}}>
            <p className='first-time'>First time here?</p>
            <Link className='sign-up' to="/sign-up">Signup</Link>
          </div>
        </div>
        <form>
          <label className='email-label'>Email</label>
          <input className='email' type="email" placeholder='Enter your email address'/>
          <label className='password-label'>Password</label>
          <input className='password' type="password" placeholder='Enter your password'/>
          <button className='form-btn'>Login</button>
          <div className="google">Login with Google</div>
          <div className="facebook">Login with Facebook</div>
        </form>
      </div>

      <Footer />
    </div>
  )
}

export default Login
