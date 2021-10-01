import React from 'react';
import ProductCard from '../../Home/Components/PopularProducts/ProductCard';
import ReactPaginate from 'react-paginate';
const AllProduct = () => {
    const data = [
        {
            imgSource: "images/gun.jpg",
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
        {
            imgSource: "images/gun.jpg",
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
            
            <div className='col-md-10 mx-auto'>

            <div className='row'>
                {
                    data.map(item => {
                        return (
                            <div className='col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-3' >
                                <ProductCard
                                    imgSource={item.imgSource}
                                    decription={item.decription}
                                    prevPrice={item.prevPrice}
                                    newPrice={item.newPrice}
                                />
                            </div>
                        )
                    })
                }
            </div>
            </div>
            <div className="overflow-auto">
                <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    // pageCount={pageCount}
                    // onPageChange={changePage}
                    containerClassName={"paginationBttnsLight"}
                    previousLinkClassName={"previousBttnLight"}
                    nextLinkClassName={"nextBttnLight"}
                    disabledClassName={"paginationDisabledLight"}
                    activeClassName={"paginationActiveLight"}
                />

            </div>
        </>
    );
}

export default AllProduct;