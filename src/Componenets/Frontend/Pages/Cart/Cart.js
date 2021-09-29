import React from 'react';
import CartItem from './CartItem';
import './Cart.css';
const Cart = (props) => {
  return (
    <>
      <div className='col-lg-12 p-md-5'>
        <section>
          <div className="row">
            <div className="col-lg-8">
              <div className="mb-3">
                <div className="card border-0 rounded-0 shadow p-4">
                  <h5 className="mb-4">Cart (<span>2</span> items)</h5>
                  {/* render cart items */}
                  <CartItem />
                  <CartItem />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {/* cart summary */}
              <div className="cart-summary shadow">
              <h5 className="text-white mb-3">Check Out Summary</h5>
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

        </section>
      </div>

    </>
  );
}

export default Cart;