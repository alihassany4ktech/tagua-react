import { React } from 'react';
import './ProductDetailPage.css';
import MenuDrop from '../../Navbar/MenuDrop/MenuDrop';
import CartCounter from './CartCounter';
import ReactStars from "react-rating-stars-component";
import ProductGallery from './ProductGallery';
import ProductTabs from './ProductTabs/ProductTabs';
import { Button } from '@mui/material'; 
 
const ProductDetailPage = (props) => {

    const images = [
        {
            original: 'https://www.taguagunleather.com/wp-content/uploads/2019/03/p_4_4_3_443-TWHS-H4-PINK-THE-PINK-4-IN-1-Open-Top-Holster.jpg',
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
            <div className='row p-3 p-md-3 p-lg-4'>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6 p-0'>
                    <ProductGallery images={images} />
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6 product-detail-wrapper p-0 mt-2 mt-md-0 px-md-3 px-lg-4'>
                    <h2>TAGUA ECOLEATHER-PINK WEIGHTLESS 4 IN 1 OPEN TOP HOLSTER</h2>
                    <h3 className='m-0'>$145</h3>
                    <ReactStars
                        count={5}
                        value={3.5}
                        size={20}
                        activeColor="#E8C21E"
                        edit={false}
                        isHalf={true}
                    />
                    <p>Lightweight, low profile, tough and comfortable. These, among others are some of the best words to describe the Foundation Series Gunbelt. </p>
                    <div className='row'>
                        <div className='col-sm-6 my-1'>
                            <MenuDrop title='Guns' items={items} width='100%' background='#E8C21E' />
                        </div>
                        <div className='col-sm-6 my-1'>
                            <MenuDrop title='Select Color' items={items} width='100%' background='#E8C21E' />
                        </div>
                    </div>

                    <div className='d-flex flex-row justify-content-center align-items-center mt-3'>
                        <CartCounter />
                        <div className='mx-3'></div>
                        <Button
                            style={{
                                width: '150px',
                                height: '35px',
                                borderRadius: 0,
                                backgroundColor: "#E8C21E",
                                color: '#FFFFFF',
                                fontSize: "15px",
                                fontFamily: 'inherit',
                                boxShadow: 'none',
                                fontWeight: '600',
                                textTransform: 'none'
                            }}
                            variant="contained"
                        >
                            Add to Cart
                        </Button>
                    </div>

                </div>
            </div>
            <div className='col-lg-10 mx-auto border-0 mt-3 rounded shadow'>
                <ProductTabs />

            </div>


        </>
    );
}

export default ProductDetailPage;