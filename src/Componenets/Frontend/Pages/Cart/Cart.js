import React from 'react';
import './Cart.css';
import CartCounter from '../ProductDetailPage/CartCounter';
const Cart = (props) => {
    return (
        <> 

            <div className='col-12 col-sm-12 col-md-10 px-lg-5 my-3 mx-auto'>
                <div className='row'>
                    <h2 className='text-center'>Your Cart Item</h2>
                    <div className='col-12 col-sm-12 col-md-8 col-lg-8 mx-auto py-3'>
                       <div className='d-flex flex-row align-items-start cart-left-wrapper'>
                            <img src='images/web-image.jpg' alt="item image" />
                            <div className='mx-3 mx-lg-4'>
                                <h3>Product Title</h3>
                                <h3 className='text-muted'>$150</h3>
                                <p>Color</p>
                                <p>Size</p>
                                <p>Change</p>
                                <p>Reamove</p>
                                <div className='d-flex flex-row align-items-center'>
                                    <p className='my-0'>Quantity:&ensp;</p>
                                    <CartCounter />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-4 col-lg-4 py-3 px-0 mx-auto'>
                        <div className="cart-summary">
                            <div className='d-flex flex-row justify-content-between align-items-center'>
                                <p>Subtotal:</p>
                                <p>Value</p>
                            </div>
                            <div className='d-flex flex-row justify-content-between align-items-center'>
                                <p>Shipping:</p>
                                <p>Value</p>
                            </div>
                            <div className='d-flex flex-row justify-content-between align-items-center'>
                                <p>Coupin Code:</p>
                                <p>Value</p>
                            </div>
                            <div className='d-flex flex-row justify-content-between align-items-center'>
                                <p>Grand total:</p>
                                <h3>200$</h3>
                            </div>
                            <div>
                                <button className='checkout-btn'>Check Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 


        </>
    );
}

export default Cart;