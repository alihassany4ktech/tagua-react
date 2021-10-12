import React from 'react';
import ProductCard from '../../Home/Components/PopularProducts/ProductCard';
import ReactPaginate from 'react-paginate';
import Filter from './Filter/Filter';
import './AllProduct.css';
const AllProduct = () => {
    const data = [
        {
            imgSource: "https://www.taguagunleather.com/wp-content/uploads/2019/03/p_4_4_3_443-TWHS-H4-PINK-THE-PINK-4-IN-1-Open-Top-Holster.jpg",
            decription: "Lorem ipsum dolor sit consectetur",
            prevPrice: "$200",
            newPrice: "$150",
        },
        {
            imgSource: "images/gun2.jpg",
            decription: "Lorem ipsum dolor sit consectetur",
            prevPrice: "$200",
            newPrice: "$150",
        },
        {
            imgSource: "images/gun3.jpg",
            decription: "Lorem ipsum dolor sit consectetur",
            prevPrice: "$200",
            newPrice: "$150",
        },
        {
            imgSource: "images/gun2.jpg",
            decription: "Lorem ipsum dolor sit consectetur",
            prevPrice: "$200",
            newPrice: "$150",
        },
        {
            imgSource: "images/gun3.jpg",
            decription: "Lorem ipsum dolor sit consectetur",
            prevPrice: "$200",
            newPrice: "$150",
        },
    ]
    return (
        <>
            <div className='text-center mt-3'>
                <h2>All Products</h2>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-lg-3 col-xl-3">
                        <h2>Filter</h2>
                        <Filter />
                    </div>
                    <div class="col-md-9">
                        <div className='responsive-grid'>
                            {
                                data.map(item => {
                                    return (
                                        <ProductCard
                                            imgSource={item.imgSource}
                                            decription={item.decription}
                                            prevPrice={item.prevPrice}
                                            newPrice={item.newPrice}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="overflow-auto">
                    <ReactPaginate
                        previousLabel={"Prev"}
                        nextLabel={"Next"}
                        containerClassName={"paginationBttnsLight"}
                        previousLinkClassName={"previousBttnLight"}
                        nextLinkClassName={"nextBttnLight"}
                        disabledClassName={"paginationDisabledLight"}
                        activeClassName={"paginationActiveLight"}
                    />

                </div>
            </div>


        </>
    );
}

export default AllProduct;