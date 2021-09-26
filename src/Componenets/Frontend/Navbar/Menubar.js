import React, {useState} from 'react';
import './Navbar.css';
const Menubar = () => {
    const [openSearchBar, setOpenSearchBar] = useState(false); 
    return (
        <>
            <div className='container-fluid'>
                <div className='row bg-yellow searchBar'>
                    <div className='col-4'>
                        <button onClick={() => {setOpenSearchBar(!openSearchBar)}}>Search Menu</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Menubar;