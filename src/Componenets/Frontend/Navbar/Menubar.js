import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './Navbar.css';
import { Link } from 'react-router-dom';
import SearchMenus from './SearchMenus';
import { Button } from '@mui/material';
const Menubar = () => {
    const [openSearchBar, setOpenSearchBar] = useState(false);
    return (
        <>
            <div className='container-fluid'>
                <div className='row bg-yellow searchBar'>
                    <div className='col-lg-12'>

                        <div className='menubar-wrapper-row p-0 h-100'>
                            <Button
                                onClick={() => { setOpenSearchBar(!openSearchBar) }}
                                style={{
                                    borderRadius: 0,
                                    backgroundColor: "#E8C21E",
                                    color: '#000000',
                                    fontSize: "16px",
                                    fontFamily: 'inherit',
                                    fontWeight: '600',
                                    textTransform: 'none',
                                    width: '100%',
                                }}
                            >
                                Search&nbsp;<i className={openSearchBar ? 'bi bi-x' : "bi bi-search"}></i>
                            </Button>
                            {openSearchBar && <SearchMenus />}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Menubar;