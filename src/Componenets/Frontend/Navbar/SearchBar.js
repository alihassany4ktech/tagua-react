import React from 'react'; 
import './Navbar.css'; 
import SearchMenus from './SearchMenus';
import Menubar from './Menubar'; 
import ProductMenus from './ProductMenus';
const SearchBar = () => {
 
    return (
        <>
            <div className='container-fluid'>
                <div className='row bg-yellow searchBar'>
                    <div className='col-lg-12'>
                        <div className='menubar-wrapper-row p-0'> 
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