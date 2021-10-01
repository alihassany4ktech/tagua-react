import React from 'react';

const CartDropMenuItem = (props) => {
    return (
        <>
            <div>
                <div className='cart-menu-item-wrapper'>
                    <img className="img-fluid rounded" src={props.imgSource} alt="product image" />
                    <div>
                        <h6 className='mb-0 text-uppercase'>{props.title}</h6>
                        <p className="my-0 text-muted text-uppercase small">{props.quantity}</p>
                        <h6 className='text-yellow text-uppercase'>{props.unitPrice}</h6>

                    </div>
                    <div className='mx-2'>
                        {/* <h6 className='text-yellow text-uppercase'>{props.unitPrice}</h6> */}
                        <span type="button" className="card-link-secondary small text-uppercase text-danger"><i class="bi bi-trash"></i></span>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}
export default CartDropMenuItem;
