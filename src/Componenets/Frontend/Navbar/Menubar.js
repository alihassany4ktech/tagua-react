import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './Navbar.css';
import { Link } from 'react-router-dom';
import SearchMenus from './SearchMenus';
const Menubar = () => {
    const [openSearchBar, setOpenSearchBar] = useState(false);
    return (
        <>
            <div className='container-fluid'>
                <div className='row bg-yellow searchBar'>
                    <div className='col-lg-12'>

                        <div className='menubar-wrapper-row p-0 h-100'>
                            <button className='btn my-2' onClick={() => { setOpenSearchBar(!openSearchBar) }}>Search <i className={openSearchBar ? 'bi bi-caret-up-fill' : "bi bi-caret-down-fill"}></i></button>
                            {openSearchBar && <SearchMenus />}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Menubar;