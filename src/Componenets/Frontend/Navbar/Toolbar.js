import React from 'react'
import './Navbar.css';
import ToggleButton from './ToggleButton/ToggleButton';

const Toolbar = (props) => {
    return (
        <>
            <header className='toolbar'>
                <nav className='toolbar_nav py-1'>
                    <div className='toolbar_toggler'>
                        <ToggleButton click={props.drawerClickHandler} />
                    </div>
                    <div className='toolbar_logo'>
                        <img src='assets/images/app-logo.png' alt='brand logo'></img>
                    </div>
                    <div className='toolbar_search_wrapper'>
                        <input type="email" className="form-control rounded-pill border-0 px-2" aria-describedby="emailHelp" placeholder=" Search the store" />
                    </div>
                    <div className='d-flex flex-row align-items-center'>
                        <span className='toolbar_yellow_btn'>
                            <button className='btn bg-yellow'>Access Dealer Area</button>
                        </span>
                        <span className='toolbar_nav_icon_span mx-3'><i className='bi bi-person'></i></span>
                        <span className='toolbar_nav_icon_group'>
                            <i className='bi bi-bag'></i>
                            <p className='mx-2'>5 items - $39.95</p>
                        </span>
                    </div> 
                </nav>
            </header>
        </>
    );
}

export default Toolbar;