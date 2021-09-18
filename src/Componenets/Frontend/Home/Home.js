import React from 'react'
import './Home.css';
import MainHeader from './Components/MainHeader/MainHeader';
import PopularProducts from './Components/PopularProducts/PopularProducts';
import Categories from './Components/Categories/Categories';
import FeaturedProducts from './Components/FeaturedProducts/FeatureProducts';
import SpecialOffer from './Components/SpecialOffer/SpecialOffer';
import Footer from './Components/Footer/Footer';

const Home = () => {
    return (
        <>
            <div className='container-fluid' >
                <div className='fab'><i className="bi bi-chat-dots" > </i></div>
                <MainHeader />
                <PopularProducts />
                <Categories />
                <SpecialOffer />
                <FeaturedProducts />
                <Footer />
            </div>

        </>
    );
}

export default Home;