import React from "react";

const EmptyCart = () => {
      return (
            <>
                  <div className="container mt-5 mb-5">
                        <div className="row">
                              <div className="col-md-12 text-center">
                                    <i className="bi bi-cart-x" style={{ fontSize: "200px", color: "#E8C21E" }}></i>
                                    <h1 className="text-dark">Your cart is currently empty</h1>
                                    <p className="text-dark mt-3">
                                          Before proceed to checkout you must add some products to your shopping cart. <br /> You will find a
                                          lot of interesting products on our "Shop" page.
                                    </p>
                                    <button className="btn bg-yellow rounded-0 text-white mt-3 px-5 py-3" >Start Shopping</button>
                              </div>
                        </div>
                  </div>
            </>
      );
};
export default EmptyCart;