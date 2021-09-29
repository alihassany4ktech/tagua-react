import React from 'react'
import './Navbar.css';
import ToggleButton from './ToggleButton/ToggleButton';
import { Link } from 'react-router-dom';
import CartDrop from './CartDrop/CartDrop';

const Toolbar = (props) => {
    return (
        <>
            <header className='toolbar'>
                <nav className='toolbar_nav py-2'>
                    <div className='toolbar_toggler'>
                        <ToggleButton click={props.drawerClickHandler} />
                    </div>
                    <div className='toolbar_logo'>
                        <Link to="/home">
                            <img src='assets/images/app-logo.png' alt='brand logo'></img>
                        </Link>
                    </div>
                    <div className='toolbar_search_wrapper'>
                        <input type="email" className="form-control rounded-pill border-0 my-auto px-2" aria-describedby="emailHelp" placeholder="Search the store" />
                    </div>
                    <div className='d-flex flex-row align-items-center'>
                        <span className='toolbar_yellow_btn'>
                            <button className='btn bg-yellow'>Access Dealer Area</button>
                        </span>
                        <span className='toolbar_nav_icon_span mx-3'><i className='bi bi-person'></i></span>
                        <CartDrop />
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Toolbar;