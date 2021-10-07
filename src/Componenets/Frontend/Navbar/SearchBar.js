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
                            {/* <div className='menu-item-wrapper'>
                                <MenuBarDropDown
                                    title='Holsters'
                                    items={[
                                        { id: 1, value: '4 in 1 holsters' },
                                        { id: 2, value: 'cross draw holsters' },
                                        { id: 3, value: 'iwb/owh' },
                                        { id: 4, value: 'owb/iwh' },
                                        { id: 5, value: 'owb' },
                                        { id: 6, value: 'sholder holsters' },
                                    ]}
                                />
                            </div>
                            <div className='menu-item-wrapper'>
                                <MenuBarDropDown
                                    title='Tagua gun leather'
                                    items={[
                                        { id: 1, value: '4 in 1 holsters' },
                                        { id: 2, value: 'cross draw holsters' },
                                        { id: 3, value: 'iwb/owh' },
                                        { id: 4, value: 'owb/iwh' },
                                        { id: 5, value: 'owb' },
                                        { id: 6, value: 'sholder holsters' },
                                    ]}
                                />
                            </div>
                            <div className='menu-item-wrapper h-100'>
                                <Button
                                    component={Link}
                                    to="/allproducts"
                                    style={{
                                        borderRadius: 0,
                                        backgroundColor: "#E8C21E",
                                        color: '#000000',
                                        fontSize: "16px",
                                        fontFamily: 'inherit',
                                        fontWeight: '600',
                                        height: '100%'
                                    }}
                                >
                                    All Products
                                </Button>
                            </div>
                            <div className='menu-item-wrapper h-100'>
                                <Button
                                    component={Link}
                                    to="/allproducts"
                                    style={{
                                        borderRadius: 0,
                                        backgroundColor: "#E8C21E",
                                        color: '#000000',
                                        fontSize: "16px",
                                        fontFamily: 'inherit',
                                        fontWeight: '600',
                                        height: '100%'
                                    }}
                                >
                                    Sale
                                </Button>
                            </div> */}
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