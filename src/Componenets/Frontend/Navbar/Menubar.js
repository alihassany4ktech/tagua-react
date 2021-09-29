import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Menubar = () => {
    const [openSearchBar, setOpenSearchBar] = useState(false);
    return (
        <>
            <div className='container-fluid'>
                <div className='row bg-yellow searchBar'>
                    <div className='col-lg-8 mx-auto'>

                        <div className='menubar-wrapper-row py-2'>
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
                                <button className='btn' onClick={() => { setOpenSearchBar(!openSearchBar) }}>Search <i className={openSearchBar ? 'bi bi-caret-up-fill' : "bi bi-caret-down-fill"}></i></button>
                            </div>
                            {/* <div className='search-btn-toggler-menubar'>
                                <button className='search-icon-btn' onClick={() => { setOpenSearchBar(!openSearchBar) }}><i className={openSearchBar ? 'bi bi-x' : "bi bi-search"}></i></button>
                            </div> */}
                        </div>
                    </div>
                        {openSearchBar && <SearchBar />}
                </div>
            </div>

        </>
    );
}

export default Menubar;