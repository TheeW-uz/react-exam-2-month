import React from 'react'
import './Header.css'
import { BiMenuAltLeft } from "react-icons/bi";
import headerFlashLogo from '../../../public/header-flash-logo.png'
import { CiSearch } from "react-icons/ci";
import { MdOutlineHandshake } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import './Header'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='container'>
            <div className="top-bar">
                <p className='top-bar-welcome'>Welcome Suprava Saha !</p>
                <p className='top-bar-1'>Deliver to 423651</p>
                <p className='top-bar-2'>Track your order</p>
                <p className='top-bar-3'>All Offers</p>
            </div>

            <header>
                <div className="menu">
                    <BiMenuAltLeft className='menu-icon' />
                </div>

                <p className='header-deals'>UNITED DEALS</p>
                <img className='flash-logo' src={headerFlashLogo} alt="img" />

                <form>
                    <CiSearch className='search-icon'/>
                    <input className='search-input' type="search" placeholder='Search essentials, groceries and more...'/>
                </form>

                <div className="header-extra">
                    <div className="deals-page">
                        <MdOutlineHandshake className='deals-icon'/>
                        <Link className='deals-title' to="/home">My Deals</Link>
                    </div>
                    <div className="sign-up">
                        <FiUser className='user-icon'/>
                        <Link className='sign-up-title' to="/login">Sign Up/Sign In</Link>
                    </div>
                    <div className="cart-page">
                        <CiShoppingCart className='cart-icon'/>
                        <p className='cart-title'>Cart</p>
                    </div>
                </div>
            </header>

            <nav className='nav'>
                <div className='nav-link-1' id='window'>
                    <p>Groceries</p>
                    <FaChevronDown className='link-icon' id='linkIcon' style={{color: 'white'}}/>
                </div>
                <div className='nav-link-2'>
                    <p>Premium Fruits</p>
                    <FaChevronDown className='link-icon'/>
                </div>
                <div className='nav-link-3'>
                    <p>Home & Kitchen</p>
                    <FaChevronDown className='link-icon'/>
                </div>
                <div className='nav-link-4'>
                    <p>Fashion</p>
                    <FaChevronDown className='link-icon'/>
                </div>
                <div className='nav-link-5'>
                    <p>Electronics</p>
                    <FaChevronDown className='link-icon'/>
                </div>
                <div className='nav-link-6'>
                    <p>Beauty</p>
                    <FaChevronDown className='link-icon'/>
                </div>
                <div className='nav-link-7'>
                    <p>Home Improvement</p>
                    <FaChevronDown className='link-icon'/>
                </div>
                <div className='nav-link-8'>
                    <p>Sports, Toys & Luggage</p>
                    <FaChevronDown className='link-icon'/>
                </div>
            </nav>
        </div>
    )
}

export default Header
