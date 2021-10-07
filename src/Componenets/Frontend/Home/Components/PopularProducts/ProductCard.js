import React from 'react'
import './PopularProducts.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const ProductCard = (props) => {

    return (
        <>
            <div className='card border-0 product-card mx-auto p-0'>
                <div className='img-div rounded-15'>
                    <div className="overlay pt-4">
                    <i class="bi bi-heart-fill text-yellow float-end m-3"> Whishlist</i>

                    </div>
                    <img src={props.imgSource} alt="item image" className='img-fluid' />
                </div>

                <div className='card-body px-0'>
                    <p className='text-dark mb-0'><b>{props.decription}</b></p>
                    <p className='mt-0 mb-2'><del>{props.prevPrice}</del>&ensp;{props.newPrice}</p>
                    <Button
                        component={Link}
                        to="/productdetail"
                        style={{
                            borderRadius: 0,
                            backgroundColor: "#E8C21E",
                            color: '#FFFFFF',
                            fontSize: "16px",
                            fontFamily: 'inherit',
                            fontWeight: '600',
                            textTransform: 'none',
                            width: '100%',
                        }}
                    >
                        Shop Now
                    </Button>
                </div>

            </div>
        </>
    );
}

export default ProductCard;