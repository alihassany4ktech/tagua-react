import React, { useState } from 'react'
import BackDrop from './BackDrop/BackDrop';
import ContactBar from './ContactBar';
import Menubar from './Menubar';
import './Navbar.css';
import SearchBar from './SearchBar';
import SideDrawer from './SideDrawer/SideDrawer';
import Toolbar from './Toolbar';
const Navbar = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    const drawerToggleClickHandle = () => {
        setSideDrawerOpen(!sideDrawerOpen);
    }
    let backDrop
    if (sideDrawerOpen) {
        backDrop = <BackDrop click={drawerToggleClickHandle} />

    };

    return (
        <>
            {backDrop}
            <ContactBar />
            <Toolbar drawerClickHandler={drawerToggleClickHandle} />
            <SearchBar />
            <Menubar /> 
            <SideDrawer show={sideDrawerOpen} />
        </>
    );
}

export default Navbar;