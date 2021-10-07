import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MenuBarDropDown from './MenuBarDropDown/MenuBarDropDown';
import SearchMenus from './SearchMenus';
import Menubar from './Menubar';
import { Button } from '@mui/material';
import ProductMenus from './ProductMenus';
const SearchBar = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];
    return (
        <>
            <div className='container-fluid'>
                <div className='row bg-yellow searchBar'>
                    <div className='col-lg-12'>
                        <div className='menubar-wrapper-row p-0 h-100'> 
                            <ProductMenus />
                            <div className='d-flex flex-row flex-wrap justify-content-center align-items-center search-menu-wrapper'>
                                <SearchMenus />
                            </div>
                            <div className='d-flex flex-row flex-wrap justify-content-center align-items-center search-toggler'>
                                <Menubar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default SearchBar;