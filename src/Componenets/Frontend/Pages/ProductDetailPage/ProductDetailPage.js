import React, { useState } from 'react'
import Footer from '../../Home/Components/Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import './ProductDetailPage.css';
import ImageGallery from 'react-image-gallery';
import MenuDrop from '../../Navbar/MenuDrop/MenuDrop';
import CartCounter from './CartCounter';
import ReactStars from "react-rating-stars-component";
import ProductGallery from './ProductGallery';

const ProductDetailPage = (props) => {

    const images = [
        {
            original: 'images/web-image.jpg',
            thumbnail: 'images/web-image.jpg', 
        },
        {
            original: 'images/special-offer.jpg',
            thumbnail: 'images/special-offer.jpg',
        },
        {
            original: 'images/web-image.jpg',
            thumbnail: 'images/web-image.jpg', 
        },
    ];
    const items = [
        {
            id: 1,
            value: 'item 1',
        },
        {
            id: 2,
            value: 'item 2',
        },
        {
            id: 3,
            value: 'item 3',
        },
        {
            id: 4,
            value: 'item 4',
        },
        {
            id: 5,
            value: 'item 5',
        },
        {
            id: 6,
            value: 'item 6',
        },
    ];
    return (
        <>
            
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-7 col-lg-7 p-0'>
                        <ProductGallery images={images}/> 
                    </div>
                    <div className='col-12 col-sm-12 col-md-5 col-lg-5 product-detail-wrapper py-2 py-md-3 py-lg-5  px-xl-5'>
                        <h2>TAGUA ECOLEATHER-PINK WEIGHTLESS 4 IN 1 OPEN TOP HOLSTER</h2>
                        <h3 className='m-0'>$145</h3>
                        <ReactStars
                            count={5}
                            value={3.5} 
                            size={24}
                            activeColor="#E8C21E"
                            edit={false}
                            isHalf={true}
                        />
                        <p>Lightweight, low profile, tough and comfortable. These, among others are some of the best words to describe the Foundation Series Gunbelt. </p>
                        <MenuDrop title='Select Size' items={items} />
                        <MenuDrop title='Select Color' items={items} styles={{ marginTop: 10 }} />
                        <div className='d-flex flex-row justify-content-center align-items-center mt-3'>
                            <CartCounter />
                            <button className='btn add-card-btn mx-3'>Add to Cart</button>
                        </div>
                        
                    </div>
                </div>
                

        </>
    );
}

export default ProductDetailPage;