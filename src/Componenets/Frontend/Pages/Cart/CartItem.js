import React from 'react';
import CartCounter from '../ProductDetailPage/CartCounter';
const CartItem = (props) => {
    return (
        <>
            <div className="row my-4">
                <div className="col-md-5 col-lg-3 col-xl-3">
                    <div className="h-100 mb-3 mb-md-0">
                        <img className="img-fluid rounded w-100 h-100"
                            src="https://www.taguagunleather.com/wp-content/uploads/2019/03/p_4_4_3_443-TWHS-H4-PINK-THE-PINK-4-IN-1-Open-Top-Holster.jpg" alt="Sample" />
                    </div>
                </div>
                <div className="col-md-7 col-lg-9 col-xl-9">
                    <div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5>Product Name</h5>
                                <p className="mb-2 text-muted text-uppercase small">Shirt - blue</p>
                                <p className="mb-2 text-muted text-uppercase small">Color: blue</p>
                                <p className="mb-2 text-muted text-uppercase small">Size: M</p>
                            </div>
                            <div>
                                <CartCounter />
                                <small className="form-text text-muted text-center">
                                    (Note, 1 piece)
                                </small>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <span type="button" className="card-link-secondary small text-uppercase text-danger"><i class="bi bi-trash"></i> Remove item </span>
                                <span type="button" className="card-link-secondary small text-uppercase mx-md-2 text-yellow"><i class="bi bi-heart-fill"></i> Move to wish list </span>
                            </div>
                            <p className="mb-0"><span><strong id="summary">$17.99</strong></span></p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mb-4" />
        </>
    );
}

export default CartItem;