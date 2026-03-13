import React from 'react'
import Header from '../../components/header/Header.jsx';
import loginImg from '../../../public/login-img.png'
import { Link } from "react-router-dom";
import './SignUp.css'
import { useNavigate } from "react-router-dom";
import Footer from '../../components/footer/Footer.jsx';

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-text">
          <p className='welcome'>Welcome Back</p>
          <img className='login-img' src={loginImg} alt="" />
          <div style={{display: "flex"}}>
            <p className='first-time'>Already a member?</p>
            <Link className='sign-up' to="/login">Log in</Link>
          </div>
        </div>
        <form>
          <label className='fullName-label'>full name</label>
          <input className='fullName' type="text" placeholder='Enter your full name'/>
          <label className='email-label'>Email</label>
          <input className='email' type="email" placeholder='Enter your email address'/>
          <label className='password-label'>Password</label>
          <input className='password' type="password" placeholder='Enter your password'/>
          <button onClick={() => navigate("/verificate")} className='form-btn'>Sign Up</button>
          <div className="google">Login with Google</div>
          <div className="facebook">Login with Facebook</div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default SignUp
