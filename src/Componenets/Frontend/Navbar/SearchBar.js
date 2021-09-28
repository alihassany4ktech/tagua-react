import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MenuDrop from './MenuDrop/MenuDrop';
const SearchBar = () => {
    const items = [
        {
            id: 1,
            value: 'item 1 has name',
        },
        {
            id: 2,
            value: 'item 2 ',
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
                <div className='row bg-yellow searchBar py-2'>
                    {/* <div className='col-xl-4'>
                        <div className='d-flex flex-row align-items-center justify-content-center'>

                            <div className='menu-item-wrapper'>
                                <Link className='btn' to="/allproducts">ALL PRODUCTS</Link>
                            </div>
                            <div className='menu-item-wrapper'>
                                <Link className='btn' to="/allproducts">SALE</Link>
                            </div>
                            <div className='menu-item-wrapper'>
                                <Link className='btn' to="/allproducts">1836</Link>
                            </div>
                        </div>
                    </div> */}
                    <div className='col-lg-12'>
                        <div className='menubar-wrapper-row h-100'>
                            <div className='menu-item-wrapper'>
                                <Link className='btn' to="/allproducts">HOLSTERS</Link>
                            </div>
                            <div className='menu-item-wrapper'>
                                <Link className='btn' to="/allproducts">TAGUA GUN LEATHER</Link>
                            </div>
                            <div className='menu-item-wrapper'>
                                <Link className='btn' to="/allproducts">ALL PRODUCTS</Link>
                            </div>
                            <div className='menu-item-wrapper'>
                                <Link className='btn' to="/allproducts">SALE</Link>
                            </div>
                            <div className='menu-item-wrapper'>
                                <Link className='btn' to="/allproducts">1836</Link>
                            </div>
                            <div className='menu-item-wrapper search-item'>
                                <MenuDrop title='Select Your Holsters By Gun' items={items} width='258px' />
                            </div>
                            <div className='menu-item-wrapper search-item'>
                                <MenuDrop title='Guns' items={items} width='125px' />
                            </div>
                            <div className='menu-item-wrapper search-item'>
                                <MenuDrop title='Model' items={items} width='125px' />
                            </div>
                            <div className='searchBar_btn_wrapper'>
                                <button className='btn'>Search</button>
                            </div>

                        </div>
                    </div>

                    {/* 
                    <div className='col-lg-1 mx-auto'>
                    </div>
                    <div className='col-sm-6 col-md-6 col-lg-4 col-xl-3 my-2'>
                    </div>
                    <div className='col-6 col-sm-6 col-md-3 col-lg-2 my-2'>
                    </div>
                    <div className='col-6 col-sm-6 col-md-3 col-lg-2 my-2'>
                    </div>
                    <div className='col-12 col-sm-3 col-md-3 col-lg-2 my-2 searchBar_btn_wrapper'>
                    </div>
                    <div className='col-lg-1 mx-auto'></div> */}
                </div>
            </div>

        </>
    );
}

export default SearchBar;