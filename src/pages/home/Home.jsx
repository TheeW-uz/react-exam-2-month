import React from 'react'
import './Home.css'
import SwiperComponent from '../../components/swiper/SwiperComponent'
import { BsBoxSeam } from "react-icons/bs";
import './Home.css'
import { GiTrophyCup } from "react-icons/gi";
import { CiCreditCard1 } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import brandImg1 from '../../../public/brand-1.png'
import brandImg2 from '../../../public/brand-2.png'
import brandImg3 from '../../../public/brand-3.png'
import brandImg4 from '../../../public/brand-4.png'
import brandImg5 from '../../../public/brand-5.png'
import brandImg6 from '../../../public/brand-6.png'
import { products } from '../../data/Home.js'
import topImg1 from '../../../public/top-img-1.png'
import topImg2 from '../../../public/top-img-2.png'
import topImg3 from '../../../public/top-img-3.png'
import topImg4 from '../../../public/top-img-4.png'
import topImg5 from '../../../public/top-img-5.png'
import topImg6 from '../../../public/top-img-6.png'
import topImg7 from '../../../public/top-img-7.png'
import { IoLogoApple } from "react-icons/io";
import electronicImg1 from '../../../public/electronic-img-1.png'
import electronicImg2 from '../../../public/electronic-img-2.png'
import electronicImg3 from '../../../public/electronic-img-3.png'
import Footer from '../../components/footer/Footer.jsx'
import { Link } from "react-router-dom";
import Header from '../../components/header/Header.jsx'

const Home = () => {
  return (
    <div>
      <Header />
      <SwiperComponent />

      <div className="our-services">
        <div className="delivery">
          <BsBoxSeam className='delivery-box' />

          <div className="delivery-text">
            <p className='delivery-title'>Fasted Delivery</p>
            <p className='delivery-time'>Delivery in 24/H</p>
          </div>
        </div>

        <div className="refund">
          <GiTrophyCup className='refund-box' />

          <div className="refund-text">
            <p className='refund-title'>24 Hours Return</p>
            <p className='refund-time'>100% money-back guarantee</p>
          </div>
        </div>

        <div className="safe">
          <CiCreditCard1 className='safe-box' />

          <div className="safe-text">
            <p className='safe-title'>Secure Payment</p>
            <p className='safe-time'>Your money is safe</p>
          </div>
        </div>

        <div className="live">
          <CiHeadphones className='live-box' />

          <div className="live-text">
            <p className='live-title'>Support 24/7</p>
            <p className='live-time'>Live contact/message</p>
          </div>
        </div>
      </div>

      <div className="brands">
        <div className="brand-1">
          <img src={brandImg1} alt="img" />
        </div>
        <div className="brand-2">
          <img src={brandImg2} alt="img" />
        </div>
        <div className="brand-3">
          <img src={brandImg3} alt="img" />
        </div>
        <div className="brand-4">
          <img src={brandImg4} alt="img" />
        </div>
        <div className="brand-5">
          <img src={brandImg5} alt="img" />
        </div>
        <div className="brand-6">
          <img src={brandImg6} alt="img" />
        </div>
      </div>

      <div className="deal">
        <div className="deal-addon">
          <p className='deal-title'>Today’s Deals of the day</p>
          <p className='deal-ends'>Deal ends in</p>

          <div id="timer" className="timer">16d : 21h : 57m : 23s</div>

          <button className='deal-btn'>VIEW ALL</button>
        </div>

        <div className="deal-container">
          {products.map((product) => (
            <div className="deal-div">
              <div className="deal-img-div">
                <Link to={`/products/${product.id}`}>
                  <img className='deal-img' src={product.image} alt="img" />
                </Link>
              </div>

              <p className='deal-end'>{product.flashDealEnds}</p>
              <p className='deal-product-title'>{product.title}</p>
              <button className='deal-price-btn'>BUY NOW - {product.price}</button>
            </div>
          ))}
        </div>
      </div>

      <div className="top-categories">
        <div className="top-addon">
          <p className='top-title'>Shop From Top CateGories</p>
          <button className='top-btn'>VIEW ALL</button>
        </div>

        <div className="top-container">
          <div className="top-div-1">
            <div className="top-div-img">
              <img src={topImg1} alt="" />
            </div>

            <p className='top-product-name'>Mobile</p>
          </div>
          <div className="top-div-2">
            <div className="top-div-img">
              <img src={topImg2} alt="" />
            </div>

            <p className='top-product-name'>Consmetics</p>
          </div>
          <div className="top-div-3">
            <div className="top-div-img">
              <img src={topImg3} alt="" />
            </div>

            <p className='top-product-name'>Electronics</p>
          </div>
          <div className="top-div-4">
            <div className="top-div-img">
              <img src={topImg4} alt="" />
            </div>

            <p className='top-product-name'>Furniture</p>
          </div>
          <div className="top-div-5">
            <div className="top-div-img">
              <img src={topImg5} alt="" />
            </div>

            <p className='top-product-name'>Watches</p>
          </div>

          <div className="top-div-6">
            <div className="top-div-img">
              <img src={topImg6} alt="" />
            </div>

            <p className='top-product-name'>Decor</p>
          </div>

          <div className="top-div-7">
            <div className="top-div-img">
              <img src={topImg7} alt="" />
            </div>

            <p className='top-product-name'>Accessories</p>
          </div>
        </div>
      </div>

      <div className="electronic">
        <h1 className='electronic-title'>TOP <span style={{ color: "#FCBD01" }}>ELECTRONIC BRANDS</span></h1>
        <div className="electronic-container">
          <div className="electronic-1">
            <div className="electronic-text">
              <div style={{ width: "109px", height: "38px", borderRadius: "9px", border: "0", background: "#494949", fontSize: "15px", marginLeft: "22px", marginTop: "22px", display: "flex", alignItems: "center", justifyContent: "center" }}>IPHONE</div>
              <div className='apple-logo'>
                <IoLogoApple className='apple-icon'/>
              </div>
              <p className='electronic-discount'>UP to 80% OFF</p>
            </div>
            <img className='electronic-img' src={electronicImg1} alt="" />
          </div>

          <div className="electronic-2">
            <div className="electronic-text">
              <div style={{ width: "109px", height: "38px", borderRadius: "9px", border: "0", background: "#494949", fontSize: "15px", marginLeft: "22px", marginTop: "22px", display: "flex", alignItems: "center", justifyContent: "center" }}>REALME</div>
              <div className='apple-logo'>
                <IoLogoApple className='apple-icon'/>
              </div>
              <p className='electronic-discount'>UP to 80% OFF</p>
            </div>
            <img className='electronic-img' src={electronicImg2} alt="" />
          </div>

          <div className="electronic-3">
            <div className="electronic-text">
              <div style={{ width: "109px", height: "38px", borderRadius: "9px", border: "0", background: "#494949", fontSize: "15px", marginLeft: "22px", marginTop: "22px", display: "flex", alignItems: "center", justifyContent: "center" }}>REDMI</div>
              <div className='apple-logo'>
                <IoLogoApple className='apple-icon'/>
              </div>
              <p className='electronic-discount'>UP to 80% OFF</p>
            </div>
            <img className='electronic-img' src={electronicImg3} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
