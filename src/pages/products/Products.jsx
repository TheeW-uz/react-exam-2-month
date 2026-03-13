import React from 'react'
import Header from '../../components/header/Header.jsx'
import { useParams } from 'react-router-dom'
import products from '../../data/Home.js'

const Products = () => {
    const { id } = useParams()

    const product = products.find((p) => p.id === Number(id))

    if (!product) {
        return <h1>Product not found</h1>
    }

    return (
        <div>
            <Header />
            <div>
                <img src={product.image} alt="" />
            </div>
        </div>
    )
}

export default Products