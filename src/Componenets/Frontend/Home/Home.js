import React from 'react';
import { Outlet } from 'react-router-dom';
import './Home.css';
import Footer from './Components/Footer/Footer';
import Navbar from '../Navbar/Navbar';
const Home = () => {
    return (
        <>
            <Navbar />
            <div className='fab'><i className="bi bi-chat-dots" > </i></div>
            <div className='container-fluid' >
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Home;