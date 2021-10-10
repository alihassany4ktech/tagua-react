import { Button } from '@mui/material';
import React from 'react' 
import { Link } from 'react-router-dom';
import './MainHeader.css';
const MainHeader = () => {
    return (
        <> 
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 bg-black rounded-50'>
                    <div className='col-8 header-content-wrapper'>
                        <h1 className='text-white'>Search the Perfect Holsters that suits you</h1>
                        <p className='text-white mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing, dolor sit amet</p> 
                        <Button 
                        to='/allproducts'
                        component={Link}
                        style={{
                            borderRadius: 0,
                            backgroundColor: "#FFFFFF",
                            color: '#000000',
                            fontSize: "16px",
                            fontFamily: 'inherit',
                            fontWeight: '600',
                            textTransform: 'none',
                            width: '160px',
                            height: '32px'
                        }}
                    >
                        Shop Now
                    </Button> 
                    </div>
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-0 top-head-right'>
                    <span className='upto-off'>
                        <p className='m-0'>UPTO</p> 
                        <h3 className='m-0 text-white'>20%</h3>
                        <p className='m-0'>OFF</p> 
                    </span>
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M25.39,-3.45 C63.76,62.66 10.15,134.70 0.57,149.50 L-0.56,148.52 L0.00,0.00 Z" style={{ stroke: 'none', fill: "#000000" }}></path></svg>                    
                </div>
            </div> 

        </>
    );
}

export default MainHeader;