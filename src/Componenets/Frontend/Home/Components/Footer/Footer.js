import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = (props) => {

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="bg-black">
                        <div className='col-sm-10 mx-auto'>
                            <div className='row pb-5 px-3 p-sm-0'>
                                <div className='col-6 col-sm-6 col-md-6 col-lg-3 about-footer py-5'>
                                    <h3 className='text-white mb-4'>About</h3>
                                    <p>Shipping & Deliveries</p>
                                    <p>Return & Exchanges</p>
                                    <p>Our Story</p>
                                    <Link exact to="/faq/help"> <p>FAQ/Help</p> </Link>
                                    <p>Terms of Service</p>
                                    <p>Refund Policy</p>
                                </div>
                                <div className='col-6 col-sm-6 col-md-6 col-lg-3 about-footer py-5'>
                                    <h3 className='text-white mb-4'>Company</h3>

                                    <Link exact to="/about-us"> <p className='font-weight-bold'>About Us</p></Link>
                                    <Link exact to="/provacy-policy"> <p>Privacy Policy</p> </Link>
                                    <Link exact to="/terms-condition"> <p>Terms & Conditions</p> </Link>
                                    <Link exact to="/contact"><p> Contact Us</p></Link>
                                </div>
                                <div className='col-sm-12 col-md-6 col-lg-5 py-5 footer-wrapper'>
                                    <h3 className='text-white mb-4'>Keep in Touch</h3>
                                    <p className='text-white'>Signup for our newsletter and be the first to<br /> know about the coupons ans special promotions.</p>
                                    <input type="email" className="form-control rounded-pill border-0 my-3" aria-describedby="emailHelp" placeholder="Sign up with email.." />
                                    <div>
                                        <button className='footer-icon-btn'>
                                            <i class="bi bi-twitter"></i>
                                        </button>
                                        <button className='footer-icon-btn mx-2'>
                                            <i class="bi bi-facebook"></i>
                                        </button>
                                        <button className='footer-icon-btn'>
                                            <i class="bi bi-instagram"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className='col-sm-10 mx-auto'>
                            <div className='footer-bottom d-flex flex-row justify-content-between align-items-center my-1'>
                                <small>Tagua Gun Leather 2021 Copyrights </small>
                                <div className='footer-credit-img-wrapper'>
                                    <img src='images/credit.png' alt='credit-images'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;