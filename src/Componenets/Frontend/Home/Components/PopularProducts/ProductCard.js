import React from 'react'
import './PopularProducts.css';
const ProductCard = (props) => {

    return (
        <>
            <div className='card border-0 rounded-15 product-card mx-auto p-0'>
                <img src={props.imgSource} alt="item image" className='rounded-15' />
                <div className='card-body px-0'>
                    <small className='text-dark my-2 mb-0'><b>{props.decription}</b></small>
                    <p className='mt-0 mb-3'><small><del>{props.prevPrice}</del>&ensp;{props.newPrice}</small></p>
                    <button className='btn w-100 bg-yellow text-white'>Shop Now</button>
                </div>

            </div>
        </>
    );
}

export default ProductCard;