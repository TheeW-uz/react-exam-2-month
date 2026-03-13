import React from 'react'
import './Verificate.css'
import VerificateImg from '../../../public/verificate-img.png'
import { Link } from "react-router-dom";
import Header from '../../components/header/Header.jsx'
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/Footer.jsx';


const Verificate = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-text">
          <p className='welcome'>Welcome Back</p>
          <img className='login-img' src={VerificateImg} alt="img" />
          <div style={{ display: "flex" }}>
            <p className='first-time'>Already a member?</p>
            <Link className='sign-up' to="/login">Log in</Link>
          </div>
        </div>
        <div className="verificate-extra">
          <h1 className='sent'>We just sent an SMS</h1>
          <p className='number'>Enter the security code we sent to <br /> +32 123456789</p>

          <div className="code-box">
            <input className='code-1' type="text" maxLength={1} onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }} />
            <input className='code-2' type="text" maxLength={1} onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }} />
            <input className='code-3' type="text" maxLength={1} onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }} />
            <input className='code-4' type="text" maxLength={1} onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }} />
            <input className='code-5' type="text" maxLength={1} onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }} />
            <input className='code-6' type="text" maxLength={1} onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }} />
          </div>

          <div className="get-code">
            <p className='code'>Didn’t get the code? </p>
            <Link className='resend' style={{ color: "#0C59B6", fontSize: "25px", textDecoration: "none", marginLeft: "5px" }}>Resend it</Link>
          </div>
          <button className='verificate-btn' onClick={() => navigate("/home")}>Submit</button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Verificate
