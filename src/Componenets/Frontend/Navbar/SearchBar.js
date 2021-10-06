import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MenuDrop from './MenuDrop/MenuDrop';
import MenuBarDropDown from './MenuBarDropDown/MenuBarDropDown'; 
const SearchBar = () => {
    const items = [
        {
            id: 1,
            value: 'item 1 has name item 1 has name',
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
                            <div className='menu-item-wrapper'>
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
                            <div className='menu-item-wrapper'>
                                <Link className='btn text-black' to="/allproducts">ALL PRODUCTS</Link>
                            </div>
                            <div className='menu-item-wrapper'>
                                <Link className='btn text-black' to="/allproducts">SALE</Link>
                            </div>
                            <div className='search-item'>
                                {/* <SearchSelect /> */}
                                <input type="email" className="form-control border-0 rounded-0 my-auto px-3" aria-describedby="emailHelp" placeholder="Search the Holster by Gun" />
                                {/* <MenuDrop title='Select Your Holsters By Gun' items={items} width='258px' /> */}
                            </div>
                            {/* <Select options={options}/> */}
                            <div className='search-item'>
                                <MenuDrop title='Guns' items={items} width='125px' />
                            </div>
                            <div className='search-item'>
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