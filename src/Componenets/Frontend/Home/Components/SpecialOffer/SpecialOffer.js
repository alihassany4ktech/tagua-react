import React from 'react'
import './SpecialOffer.css';
const SpecialOffer = () => {
    return (
        <>
            <div className='row'>
                <div className='col-lg-6 special-offer-section'>
                    <div className='offer-content'>
                        <h1 className='text-center text-white'>Special Offers</h1>
                        <h3 className='text-white mt-3'>UPTO 40% OFF</h3>
                        <h1 className='text-white'>00 : 00: 35</h1>
                        <button className='btn mt-3'>Shop Now</button>
                    </div>
                </div>
                <div className='col-lg-6 py-5 special-offer-right'>
                    <div className='special-offer-right-content px-xl-5 mt-4'>
                        <h4 className='text-dark'>Introducing the All-New foundation Series Tactical Nylon Suit</h4>
                        <p align='justify' className='text-dark my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis orci nec pretium tincidunt. Donec egestas semper tortor, ac viverra massa tempus eu. Fusce scelerisque ligula elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis orci nec pretium tincidunt. Donec egestas semper tortor, ac viverra massa tempus eu. Fusce scelerisque ligula elit, ut fringilla nisi suscipit quis. Sed consectetur felis at massa suscipit cursus.</p>
                        <button className='btn'>Learn More</button>
                    </div>
                    <span className='m-5'>&nbsp;</span>
                </div>
            </div>

        </>
    );
}

export default SpecialOffer;