import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MenuDrop from './MenuDrop/MenuDrop';
const SearchBar = () => {
    const items = [
        {
            id: 1,
            value: 'item 1',
        },
        {
            id: 2,
            value: 'item 2',
        },
        {
            id: 3,
            value: 'item 3',
        },
        {
            id: 4,
            value: 'item 4',
        },
        {
            id: 5,
            value: 'item 5',
        },
        {
            id: 6,
            value: 'item 6',
        },
    ];
    return (
        <>
            <div className='container-fluid'>
                <div className='row bg-yellow searchBar'> 
                    <div className='col-lg-1 mx-auto'>
                    <Link className='btn' to="/allproducts">All Product</Link> 
                    </div>
                    <div className='col-sm-6 col-md-6 col-lg-4 col-xl-3 my-2'>
                        <MenuDrop title='Select Your Holsters By Gun' items={items} />
                    </div>
                    <div className='col-6 col-sm-6 col-md-3 col-lg-2 my-2'>
                        <MenuDrop title='Guns' items={items} />
                    </div>
                    <div className='col-6 col-sm-6 col-md-3 col-lg-2 my-2'>
                        <MenuDrop title='Model' items={items} />
                    </div>
                    <div className='col-12 col-sm-3 col-md-3 col-lg-2 my-2 searchBar_btn_wrapper'>
                        <button className='btn'>Search</button>
                    </div>
                    <div className='col-lg-1 mx-auto'></div>
                </div>
            </div>

        </>
    );
}

export default SearchBar;