import React from 'react'; 
import './Cart.css';
import EmptyCart from './EmptyCart/EmptyCart';
import CartTest from './CartTest/CartTest';
const Cart = (props) => {
  return (
    <> 

      <EmptyCart /> 

      <CartTest /> 
    </>
  );
}

export default Cart;