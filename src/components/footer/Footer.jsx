import React from 'react'
import './Footer.css'
import { TbBrandGooglePlay } from "react-icons/tb";
import { FaApple } from "react-icons/fa";


const Footer = () => {
    return (
        <footer>
            <div className="footer-1">
                <h1 className='footer-main'>UNITED DEAL</h1>
                <p className='support'>Customer Supports: </p>
                <p className='number'>(629) 555-0129</p>
                <p className='address'>4517 Washington Ave. <br /> Manchester, Kentucky 39495</p>
                <p className='info'>info@kinbo.com</p>
            </div>
            <div className="footer-2">
                <h1 className='footer-top'>TOP CATEGORY</h1>
                <p className='footer-2-p'>Computer & Laptop</p>
                <p className='footer-2-p'>SmartPhone</p>
                <p className='footer-2-p'>Headphone</p>
                <p className='footer-2-p'>Accessories</p>
                <p className='footer-2-p'>Camera & Photo</p>
                <p className='footer-2-p'>TV & Homes</p>
            </div>
            <div className="footer-3">
                <h1 className='footer-top'>Quick links</h1>
                <p className='footer-2-p'>Shoping Cart</p>
                <p className='footer-2-p'>Wishlist</p>
                <p className='footer-2-p'>Refund Policy</p>
                <p className='footer-2-p'>Shipping Policy</p>
                <p className='footer-2-p'>Privacy Policy</p>
                <p className='footer-2-p'>Terms of Service</p>
            </div>
            <div className="footer-4">
                <h1 className='download'>DOWNLOAD APP</h1>
                <div className='play-market'><TbBrandGooglePlay className='market-icon'/></div>
                <div className='app-store'><FaApple className='market-icon'/></div>
            </div>
        </footer>
    )
}

export default Footer
