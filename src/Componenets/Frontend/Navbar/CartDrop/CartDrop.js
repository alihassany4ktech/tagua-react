import { Button } from '@mui/material';
import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom';
import './CartDrop.css';
import CartDropMenuItem from './CartDropMenuItem';
const CartDrop = (props) => {
    const [open, setOpen] = useState(false);
    const CartDropMenu = (props) => {
        return (
            <div className='cart-drop-wrapper'>
                <div className='card p-2 rounded-0'>
                    <h5 className="text-center py-2 mb-2">Cart (<span>n</span> items)</h5>
                    {
                        data.map(item => {
                            return (
                                <CartDropMenuItem
                                    title={item.title}
                                    imgSource={item.imgSource}
                                    unitPrice={item.unitPrice}
                                    quantity={item.quantity}
                                />
                            )
                        })
                    } 
                    <Button
                        onClick={() => setOpen(false)}
                        component={Link}
                        to="/cart"
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
                        Shop Now
                    </Button>
                </div>
            </div>
        )
    }
    const data = [
        {
            title: 'Title',
            imgSource: 'https://www.taguagunleather.com/wp-content/uploads/2019/03/p_4_4_3_443-TWHS-H4-PINK-THE-PINK-4-IN-1-Open-Top-Holster.jpg',
            unitPrice: 'Price',
            quantity: 'quantity',
        },
        {
            title: 'Title',
            imgSource: 'https://www.taguagunleather.com/wp-content/uploads/2019/04/p_5_0_3_503-TWHS-THE-WEIGHTLESS-with-Magazine-Holder.jpg',
            unitPrice: 'Price',
            quantity: 'quantity',
        },
    ]
    return (
        <>
            <OutsideClickHandler
                onOutsideClick={() =>
                    setOpen(false)
                }
            >
                <span type="button" onClick={() => setOpen(!open)} className='toolbar_nav_icon_group'>
                    <i className='bi bi-bag'></i>
                </span>
                {open && <CartDropMenu />}
            </OutsideClickHandler>
        </>
    );
}

export default CartDrop;