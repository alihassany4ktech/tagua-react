import { React } from 'react';
import './ProductDetailPage.css';
import MenuDrop from '../../Navbar/MenuDrop/MenuDrop';
import CartCounter from './CartCounter';
import ReactStars from "react-rating-stars-component";
import ProductGallery from './ProductGallery';
import ProductTabs from './ProductTabs/ProductTabs';
import { Button } from '@mui/material';
import Select from 'react-select';
import { Link } from 'react-router-dom';

const ProductDetailPage = (props) => {
    const options = [
        { value: "Small", label: "Small", },
        { value: "Extra Small", label: "Extra Small", },
        { value: "Medium", label: "Medium", },
        { value: "Large", label: "Large", }
    ];
    const colorOptions = [
        { value: "Red", label: "Red", },
        { value: "Blue", label: "Blue", },
        { value: "Black", label: "Black", },
        { value: "Green", label: "Green", }
    ];
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: "black",
            backgroundColor: state.isSelected ? "#E8C21E" : "normal",
            cursor: 'pointer',
            "&:hover": { 
                backgroundColor: state.isFocused ? "#E8C21E" : "#ccc"
            }
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: '#000000',
        }),
        control: (base, state) => ({
            ...base,
            background: "none", 
            borderColor: state.isFocused ? "#E8C21E" : "#ccc", 
            boxShadow: state.isFocused ? null : null,
            "&:hover": { 
                borderColor: state.isFocused ? "#E8C21E" : "#E8C21E"
            }
        })
    };
    const images = [
        {
            original: 'https://www.taguagunleather.com/wp-content/uploads/2019/03/p_4_4_3_443-TWHS-H4-PINK-THE-PINK-4-IN-1-Open-Top-Holster.jpg',
            thumbnail: 'images/web-image.jpg',
        },
        {
            original: 'images/special-offer.jpg',
            thumbnail: 'images/special-offer.jpg',
        },
        {
            original: 'images/web-image.jpg',
            thumbnail: 'images/web-image.jpg',
        },
        {
            original: 'images/web-image.jpg',
            thumbnail: 'images/web-image.jpg',
        },
        {
            original: 'images/special-offer.jpg',
            thumbnail: 'images/special-offer.jpg',
        },
        {
            original: 'images/web-image.jpg',
            thumbnail: 'images/web-image.jpg',
        },
        {
            original: 'images/web-image.jpg',
            thumbnail: 'images/web-image.jpg',
        },
        {
            original: 'images/special-offer.jpg',
            thumbnail: 'images/special-offer.jpg',
        },
        {
            original: 'images/web-image.jpg',
            thumbnail: 'images/web-image.jpg',
        },

    ];


    return (
        <>
            <div className='container'>
                <div className='col-md-10 mx-auto'>

                    <div className='row mt-3 p-3 p-md-3 p-lg-4'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 p-0'>
                            <ProductGallery images={images} />
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 product-detail-wrapper p-0 mt-2 mt-md-0 px-md-3 px-lg-4'>
                            <h3>TAGUA ECOLEATHER-PINK WEIGHTLESS 4 IN 1 OPEN TOP HOLSTER</h3> 
                            <ReactStars
                                count={5}
                                value={3.5}
                                size={18}
                                activeColor="#E8C21E"
                                edit={false}
                                isHalf={true}
                            />
                            <p className='mt-2'>Lightweight, low profile, tough and comfortable. These, among others are some of the best words to describe the Foundation Series Gunbelt. </p>
                            <div className='row'>
                                <div className='col-md-6'>
                                    Size:
                                    <Select options={options} styles={customStyles} placeholder='Size' />
                                </div>
                                <div className='col-md-6'>
                                    Color:
                                    <Select options={colorOptions} styles={customStyles} placeholder='Color' />
                                </div>

                            </div>
                            <h5 className='mt-3'>Price:&ensp;$145</h5>  
                            <div className='d-flex flex-row justify-content-between align-items-center mt-3'>
                                <Button
                                    to='/cart'
                                    component={Link}
                                    style={{
                                        width: '150px',
                                        height: '35px',
                                        borderRadius: 0,
                                        backgroundColor: "#E8C21E",
                                        color: '#FFFFFF',
                                        fontSize: "15px",
                                        fontFamily: 'inherit',
                                        boxShadow: 'none',
                                        fontWeight: '600',
                                        textTransform: 'none'
                                    }}
                                    variant="contained"
                                >
                                    Add to Cart
                                </Button>
                                <CartCounter />

                            </div>

                        </div>
                    </div>
                    <div className='col mx-auto border-0 mt-3 rounded shadow'>
                        <ProductTabs />

                    </div>
                </div>

            </div>


        </>
    );
}

export default ProductDetailPage;