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
import { useState } from 'react';


const navLinks = [
    {
        id: 1,
        title: "Groceries",
        dropdown: [
            { title: "Fruits", submenu: ["Apples", "Oranges", "Bananas"] },
            { title: "Vegetables", submenu: ["Carrots", "Tomatoes", "Spinach"] },
            { title: "Dairy", submenu: ["Milk", "Cheese", "Yogurt"] },
        ]
    },
    {
        id: 2,
        title: "Premium Fruits",
        dropdown: [
            { title: "Exotic Fruits", submenu: ["Dragon Fruit", "Durian", "Lychee"] },
            { title: "Organic", submenu: ["Organic Apples", "Organic Bananas", "Organic Carrots"] },
            { title: "Seasonal", submenu: ["Mangoes", "Cherries", "Peaches"] },
        ]
    },
    {
        id: 3,
        title: "Home & Kitchen",
        dropdown: [
            { title: "Cookware", submenu: ["Pots", "Pans", "Bakeware"] },
            { title: "Decor", submenu: ["Wall Art", "Vases", "Candles"] },
            { title: "Furniture", submenu: ["Tables", "Chairs", "Shelves"] },
        ]
    },
    {
        id: 4,
        title: "Fashion",
        dropdown: [
            { title: "Men", submenu: ["Shirts", "Pants", "Shoes"] },
            { title: "Women", submenu: ["Dresses", "Tops", "Heels"] },
            { title: "Kids", submenu: ["T-Shirts", "Shorts", "Sneakers"] },
        ]
    },
    {
        id: 5,
        title: "Electronics",
        dropdown: [
            { title: "Computer & Laptops", submenu: ["iPhone", "Samsung", "Xiaomi"] },
            { title: "Computers Accessories", submenu: ["Laptops", "Desktops", "Monitors"] },
            { title: "Smartphone", submenu: ["All", "Iphone", "Samsung", "Realme", "Xiaomi", "Oppo", "Vivo", "OnePlus", "Huawei", "Infinix", "Tecno"] },
            { title: "Headphone", submenu: ["Bloody", "Logitech", "Earphone"] },
            { title: "Mobile Accessories", submenu: ["Cases", "Charger", "Cables"] },
            { title: "Gaming Console", submenu: ["Playstation 5", "Playstation 4 pro", "Xbox"] },
            { title: "Camera & Photo", submenu: ["360 degree", "Cannon", "Sony"] },
            { title: "TV & Homes Appliances", submenu: ["Oled", "QLED", "Samsung"] },
            { title: "Watchs & Accessories", submenu: ["Jacob and CO", "Rolex", "Richard Mille"] },
            { title: "GPS & Navigation", submenu: ["Garmin", "Suunto Vertical 2", "Apple Watch Ultra 3"] },
            { title: "Warable Technology", submenu: ["Smart Rings", "Smartwatches", "Smart Glasses"] },
        ]
    },
    {
        id: 6,
        title: "Beauty",
        dropdown: [
            { title: "Makeup", submenu: ["Lipstick", "Foundation", "Eyeshadow"] },
            { title: "Skincare", submenu: ["Moisturizer", "Serum", "Cleanser"] },
            { title: "Haircare", submenu: ["Shampoo", "Conditioner", "Hair Oil"] },
        ]
    },
    {
        id: 7,
        title: "Home Improvement",
        dropdown: [
            { title: "Tools", submenu: ["Drills", "Screwdrivers", "Hammers"] },
            { title: "Lighting", submenu: ["Ceiling Lights", "Desk Lamps", "LED Strips"] },
            { title: "Plumbing", submenu: ["Faucets", "Pipes", "Valves"] },
        ]
    },
    {
        id: 8,
        title: "Sports, Toys & Luggage",
        dropdown: [
            { title: "Sports", submenu: ["Soccer", "Basketball", "Tennis"] },
            { title: "Toys", submenu: ["Action Figures", "Puzzles", "Board Games"] },
            { title: "Bags", submenu: ["Backpacks", "Suitcases", "Duffel Bags"] },
        ]
    },
];


const Header = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    let timer;

    const handleMouseEnter = (id) => {
        clearTimeout(timer);
        setOpenDropdown(id);
    };

    const handleMouseLeave = () => {
        timer = setTimeout(() => setOpenDropdown(null), 200);
    };

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
                    <CiSearch className='search-icon' />
                    <input className='search-input' type="search" placeholder='Search essentials, groceries and more...' />
                </form>

                <div className="header-extra">
                    <div className="deals-page">
                        <MdOutlineHandshake className='deals-icon' />
                        <Link className='deals-title' to="/home">My Deals</Link>
                    </div>
                    <div className="sign-up">
                        <FiUser className='user-icon' />
                        <Link className='sign-up-title' to="/login">Sign Up/Sign In</Link>
                    </div>
                    <div className="cart-page">
                        <CiShoppingCart className='cart-icon' />
                        <p className='cart-title'>Cart</p>
                    </div>
                </div>
            </header>

            <nav className="nav">
                {navLinks.map((link) => (
                    <div
                        key={link.id}
                        className={`nav-link-${link.id}`}
                        onMouseEnter={() => handleMouseEnter(link.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <p>{link.title}</p>
                        <FaChevronDown className="link-icon" />

                        {openDropdown === link.id && (
                            <div className="dropdown">
                                {link.dropdown.map((item, index) => (
                                    <div className="dropdown-item" key={index}>
                                        <a href="#">{item.title}</a>

                                        {item.submenu && (
                                            <div className="submenu">
                                                {item.submenu.map((sub, subIndex) => (
                                                    <a href="#" key={subIndex}>{sub}</a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    )
}
export default Header
