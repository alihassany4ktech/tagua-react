import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import './SpecialOffer.css';
const SpecialOffer = () => {
    return (
        <>
            <div className='row'>
                <div className='col-lg-6 special-offer-section'>
                    <div className='offer-content'>
                        <h1 className='text-center text-white'>Special Offers</h1>
                        <h3 className='text-white mt-3'>UPTO 40% OFF</h3>
                        <h1 className='text-white mb-3'>00 : 00: 35</h1>
                        <Button
                            to='/allproducts'
                            component={Link}
                            style={{
                                borderRadius: 0,
                                backgroundColor: "#000000",
                                color: '#E8C21E',
                                fontSize: "16px",
                                fontFamily: 'inherit',
                                fontWeight: '600',
                                width: '240px',
                                textTransform: 'none'
                            }}
                        >
                            Shop Now
                        </Button>
                    </div>
                </div>
                <div className='col-lg-6 py-5 special-offer-right'>
                    <div className='special-offer-right-content px-xl-5 mt-4'>
                        <h4 className='text-dark'>Introducing the All-New foundation Series Tactical Nylon Suit</h4>
                        <p align='justify' className='text-dark my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis orci nec pretium tincidunt. Donec egestas semper tortor, ac viverra massa tempus eu. Fusce scelerisque ligula elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis orci nec pretium tincidunt. Donec egestas semper tortor, ac viverra massa tempus eu. Fusce scelerisque ligula elit, ut fringilla nisi suscipit quis. Sed consectetur felis at massa suscipit cursus.</p>
                        <Button
                            to='/allproducts'
                            component={Link}
                            style={{
                                borderRadius: 0,
                                backgroundColor: "#000000",
                                color: '#FFFFFF',
                                fontSize: "16px",
                                fontFamily: 'inherit',
                                fontWeight: '600',
                                width: '240px',
                                textTransform: 'none'
                            }}
                        >
                            Learn More
                        </Button>
                    </div>
                    <span className='m-5'>&nbsp;</span>
                </div>
            </div>

        </>
    );
}

export default SpecialOffer;