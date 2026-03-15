import React from 'react'
import Header from '../../components/header/Header.jsx'
import { useParams } from 'react-router-dom'
import products from '../../data/Home.js'
import './Products.css'
import { useState } from 'react';
import productImg1 from '../../../public/product-image-1.png'
import { CiShoppingTag } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { BsFillBagCheckFill } from "react-icons/bs";
import paymentMethod from '../../../public/product-payment.png'
import Footer from '../../components/footer/Footer.jsx'

const Products = () => {
    const { id } = useParams()

    const product = products.find((p) => p.id === Number(id))

    if (!product) {
        return <h1>Product not found</h1>
    }

    const [count, setCount] = useState(0);

    return (
        <div>
            <Header />
            <div className="product-container">
                <div className='product-image'>
                    <img src={product.image} alt="image" />
                </div>
                <div className="product-context">
                    <h1 className='product-title'>2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray</h1>
                    <div className="product-stock" style={{ display: "flex", marginTop: "15px" }}>
                        <p style={{ fontSize: "13px", fontWeight: "400" }}>Sku: A264671</p>
                        <p style={{ fontSize: "13px", fontWeight: "400", marginLeft: "250px" }}>Availability: In Stock</p>
                    </div>
                    <div className="product-stock" style={{ display: "flex", marginTop: "8px" }}>
                        <p>Brand: Apple</p>
                        <p style={{ marginLeft: "250px" }}>Category: Electronics Devices</p>
                    </div>

                    <p className='product-price'>Rs 125000</p>
                    <div style={{ display: "flex" }}>
                        <p className='get-it'>Get it for <span style={{ color: "#2EB100", marginLeft: "5px" }}>Rs 90,0000</span></p>
                        <div className='counter'>
                            <button onClick={() => setCount(count - 1)} disabled={count === 0}> <p>-</p> </button>
                            <span>{count}</span>
                            <button onClick={() => setCount(count + 1)}> <p>+</p> </button>
                        </div>
                    </div>

                    <div className="options">
                        <div className="color">
                            <p>Color</p>
                            <div className='color-div' style={{ display: "flex" }}>
                                <div className='color-mini'></div>
                                <div className='color-mini-2'></div>
                            </div>
                        </div>
                        <div className="size">
                            <p>Size</p>
                            <select>
                                <option>14-inch Liquid Retina XDR display</option>
                            </select>
                        </div>
                        <div className="memory">
                            <p>Memory</p>
                            <select>
                                <option>16GB unified memory</option>
                            </select>
                        </div>
                        <div className="storage">
                            <p>Storage</p>
                            <select>
                                <option>1TV SSD Storage</option>
                            </select>
                        </div>
                    </div>

                    <div className="offers">
                        <div className="offers-1">
                            <p style={{fontSize: "15px", fontWeight: "500", marginTop: "27px"}}>Deal Members Filled</p>
                            <p style={{fontSize: "14.47px", fontWeight: "800", color: "#000000", marginTop: "27px", marginLeft: "12px"}}>700/1000</p>
                            <p style={{fontSize: "15px", fontWeight: "500", marginTop: "27px", marginLeft: "80px"}}>No. Of Buy In Deal</p>
                            <p style={{fontSize: "14.47px", fontWeight: "800", color: "#000000", marginTop: "27px", marginLeft: "38px"}}>22</p>
                        </div>
                        <div className="offers-2">
                            <p style={{fontSize: "15px", fontWeight: "500", marginTop: "27px"}}>Current Deal Price</p>
                            <p style={{fontSize: "14.47px", fontWeight: "800", color: "#000000", marginTop: "27px", marginLeft: "12px"}}>Rs 90000.00</p>
                            <p style={{fontSize: "15px", fontWeight: "500", marginTop: "27px", marginLeft: "80px"}}>Deal Tread Indicator</p>
                            <img src={productImg1} alt="image" />
                        </div>
                        <p className='end-deal'>{product.flashDealEnds}</p>
                    </div>

                    <div className="product-sale">
                        <div className="product-sale-1">
                            <CiShoppingTag className='sale-icon-1'/>
                            <p>Get DEAL ( ₹90k )</p>
                        </div>
                        <button className='product-sale-2'>
                            <LuShoppingCart className='sale-icon-2'/>
                            <p>ADD</p>
                        </button>
                        <button className='product-sale-3'>
                            <BsFillBagCheckFill className='sale-icon-3'/>
                            <p>BUY</p>
                        </button>
                    </div>

                    <div className="payment-method">
                        <p className='payment-p'>100% Guarantee Safe Checkout</p>
                        <img src={paymentMethod} alt="img" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Products