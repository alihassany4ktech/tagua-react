import React from 'react'
import './Home.css';
import MainHeader from './Components/MainHeader/MainHeader';
import PopularProducts from './Components/PopularProducts/PopularProducts';
import Categories from './Components/Categories/Categories';
import FeaturedProducts from './Components/FeaturedProducts/FeatureProducts';
import SpecialOffer from './Components/SpecialOffer/SpecialOffer';

const Home = () => {
    return (
        <>
            <div className='container-fluid'>
                <MainHeader />  
                <PopularProducts />
                <Categories />
                <SpecialOffer />
                <FeaturedProducts />
            </div>

        </>
    );
}

export default Home;