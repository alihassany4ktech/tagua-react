import React from 'react';

const CartDropMenuItem = (props) => {
    return (
        <>
            <div>
                <div className='cart-menu-item-wrapper'>
                    <img className="img-fluid rounded" src={props.imgSource} alt="product image" />
                    <div>
                        <h6 className='text-uppercase'>{props.title}</h6>
                        <h6 className='text-yellow text-uppercase mb-1'>{props.unitPrice}</h6>
                        <p className="mb-1 text-muted text-uppercase small">{props.quantity}</p>
                        <span type="button" className="card-link-secondary small text-uppercase text-danger"><i class="bi bi-trash"></i> Remove item </span>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}
export default CartDropMenuItem;
