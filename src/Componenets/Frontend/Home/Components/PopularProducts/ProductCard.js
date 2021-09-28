import React from 'react'
import './PopularProducts.css';
import { Link } from 'react-router-dom';
const ProductCard = (props) => {

    return (
        <>
            <div className='card border-0 rounded-15 product-card mx-auto p-0'>
                <img src={props.imgSource} alt="item image" className='rounded-15' />
                <div className='card-body px-0'>
                    <p className='text-dark mb-0'><b>{props.decription}</b></p>
                    <p className='mt-0 mb-2'><del>{props.prevPrice}</del>&ensp;{props.newPrice}</p>
                    <Link className='btn w-100 bg-yellow text-white' to="/productdetail">Shop Now</Link> 
                </div>

            </div>
        </>
    );
}

export default ProductCard;