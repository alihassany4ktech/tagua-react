import React from 'react';
import Categories from '../../Home/Components/Categories/Categories';
import FeaturedProducts from '../../Home/Components/FeaturedProducts/FeatureProducts';
import MainHeader from '../../Home/Components/MainHeader/MainHeader';
import PopularProducts from '../../Home/Components/PopularProducts/PopularProducts';
import SpecialOffer from '../../Home/Components/SpecialOffer/SpecialOffer';

const HomePage = () => {
    return (
        <> 
            <MainHeader />
            <PopularProducts />
            <Categories />
            <SpecialOffer />
            <FeaturedProducts /> 
        </>
    );
}

export default HomePage;