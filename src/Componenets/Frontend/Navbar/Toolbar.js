import React from 'react'
import './Navbar.css';
import ToggleButton from './ToggleButton/ToggleButton';
import { Link } from 'react-router-dom';
import CartDrop from './CartDrop/CartDrop';
import LoginDrop from './LoginDrop/LoginDrop';
import Drop from './LoginDrop/Drop';
import SearchSelect from './SearchSelect/SearchSelect';
import { Button } from '@mui/material';

const Toolbar = (props) => {
    return (
        <>
            <header className='toolbar'>
                <nav className='toolbar_nav'>
                    <div className='toolbar_toggler'>
                        <ToggleButton click={props.drawerClickHandler} />
                    </div>
                    <div className='toolbar_logo'>
                        <Link to="/">
                            <img src='assets/images/app-logo.png' alt='brand logo'></img>
                        </Link>
                    </div>
                    <div className='toolbar_search_wrapper'>
                        <SearchSelect />
                    </div>
                    <div className='d-flex flex-row align-items-center'>
                        <span className='toolbar_yellow_btn'>
                            <Button 
                                to='/login'
                                component={Link}
                                style={{
                                    width: '205px',
                                    height: '47px',
                                    borderRadius: 0,
                                    backgroundColor: "#E8C21E",
                                    color: '#000000',
                                    fontSize: "16px",
                                    fontFamily: 'inherit',
                                    fontWeight: '600',
                                    textTransform: 'none'
                                }}
                                variant="contained"
                            >
                                Access Dealer Area
                            </Button>
                        </span>
                        <LoginDrop />
                        <CartDrop /> 
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Toolbar;