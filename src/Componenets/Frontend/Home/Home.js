import React from 'react';
import './Home.css';
import Footer from './Components/Footer/Footer';
import Navbar from '../Navbar/Navbar';
import MainHeader from './Components/MainHeader/MainHeader';
import PopularProducts from './Components/PopularProducts/PopularProducts';
import Categories from './Components/Categories/Categories';
import SpecialOffer from './Components/SpecialOffer/SpecialOffer';
import FeaturedProducts from './Components/FeaturedProducts/FeatureProducts';
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import HomePage from '../Pages/HomePage/HomePage';
import ProductDetailPage from '../Pages/ProductDetailPage/ProductDetailPage';
import AllProduct from '../Pages/AllProduct/AllProduct';
import Cart from '../Pages/Cart/Cart';
const Home = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <div className='fab'><i className="bi bi-chat-dots" > </i></div>
                <div className='container-fluid' >
                    <Switch >
                        <Route exact path="/home" component={HomePage} />
                        <Route exact path="/productdetail" component={ProductDetailPage} />
                        <Route exact path="/allproducts" component={AllProduct} /> 
                        <Route exact path="/cart" component={Cart} />  
                    </Switch>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default Home;