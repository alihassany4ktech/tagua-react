import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import CartCounter from '../../ProductDetailPage/CartCounter'
import './CartTest.css'
const CartTest = () => {
    return (
        <>
            <div className="card-cart shadow-lg">
                <div className="row">
                    <div className="col-md-8 cart-area p-3 p-md-4 p-lg-4">
                        <div className="cart-title">
                            <div className="row">
                                <div className="col">
                                    <h3>Shopping Cart</h3>
                                </div>
                                <div className="col align-self-center text-end text-muted">3 items</div>
                            </div>
                        </div>
                        <div className="row border-top">
                            <div className="row main-area align-items-center">
                                <div className="col-4 col-md-2"><img className="img-fluid" src="https://www.taguagunleather.com/wp-content/uploads/2019/03/p_4_4_3_443-TWHS-H4-PINK-THE-PINK-4-IN-1-Open-Top-Holster.jpg" /></div>
                                <div className="col-5 col-md">
                                    <div className="row ">Name</div>
                                    <div className="row text-muted">Description</div>
                                    <div className="row text-yellow">
                                        <span type='button' className='p-0 small'>
                                            <i class="bi bi-heart-fill text-yellow"></i>
                                            &nbsp;Wishlist
                                        </span>
                                    </div>
                                </div>
                                <div className="col"> <CartCounter /></div>
                                <div className="col text-end">
                                    &euro; 44.00 &nbsp;
                                    <span>
                                        <i type='button' class="bi bi-trash text-danger"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="row border-top">
                            <div className="row main-area align-items-center">
                                <div className="col-4 col-md-2"><img className="img-fluid" src="https://www.taguagunleather.com/wp-content/uploads/2019/03/p_4_4_3_443-TWHS-H4-PINK-THE-PINK-4-IN-1-Open-Top-Holster.jpg" /></div>
                                <div className="col-5 col-md">
                                    <div className="row ">Name</div>
                                    <div className="row text-muted">Description</div>
                                    <div className="row text-yellow">
                                        <span type='button' className='p-0 small'>
                                            <i class="bi bi-heart-fill text-yellow"></i>
                                            &nbsp;Wishlist
                                        </span>
                                    </div>
                                </div>
                                <div className="col"> <CartCounter /></div>
                                <div className="col text-end">
                                    &euro; 44.00 &nbsp;
                                    <span>
                                        <i type='button' class="bi bi-trash text-danger"></i>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 summary-area p-3 p-md-4 p-lg-4">
                        <div className='cart-title'>
                            <h3 className='text-yellow'>Summary</h3>
                        </div>
                        <div className="row">
                            <div className="col text-white">ITEMS 3
                            </div>
                            <div className="col text-white text-end">&euro; 132.00</div>
                        </div>
                        <div className="row mt-3">
                            <div className="col text-white">SHIPPING</div>
                            <div className="col text-white text-end">&euro; 132.00</div>
                        </div>
                        <div className="row mt-3">
                            <div className="col text-white">COUPIN CODE</div>
                            <div className="col text-white text-end">&euro; 132.00</div>
                        </div>
                        <div className="row my-3" >
                            <div className="col text-white">TOTAL</div>
                            <div className="col text-white text-end">&euro; 137.00</div>
                        </div> 
                        <Button
                            component={Link}
                            to='/checkout'
                            style={{
                                borderRadius: 0,
                                backgroundColor: "#E8C21E",
                                color: '#000000',
                                fontSize: "15px",
                                fontFamily: 'inherit',
                                fontWeight: '600',
                                textTransform: 'none',
                                width: '100%',
                            }}
                        >
                            Check Out
                        </Button>
                    </div>
                </div>
            </div>
            <br />
        </>
    )
}

export default CartTest
