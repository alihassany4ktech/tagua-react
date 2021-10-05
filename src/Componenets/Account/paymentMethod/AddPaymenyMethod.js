import React from "react";
import { NavLink } from "react-router-dom";
import cardsimg from "../orders/cards2.png";
const AddPaymentMethod = () => {
      return (
            <>
                  <div className="container-fluid p-0">
                        <div className="row mt-5 mb-4">
                              <div className="col-12 col-md-3" style={{ borderRight: "1px solid #ebebeb" }}>
                                    <h5 className="mx-5">My account </h5>
                                    <hr />

                                    <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
                                          <ul className="app-menu list-unstyled accordion" id="menu-accordion">
                                                <li className="nav-item">
                                                      <NavLink exact to="/account" className="nav-link" activeClassName="active1">

                                                            <span className="nav-link-text">Dashboard</span>
                                                      </NavLink>
                                                </li>

                                                <li className="nav-item">
                                                      <NavLink exact to="/orders" className="nav-link" activeClassName="active1">

                                                            <span className="nav-link-text">Orders</span>
                                                      </NavLink>
                                                </li>
                                                <li className="nav-item">

                                                      <NavLink exact to="/download" className="nav-link" activeClassName="active1">

                                                            <span className="nav-link-text">Downloads</span>
                                                      </NavLink>
                                                </li>
                                                <li className="nav-item">

                                                      <NavLink exact to="/addresses" className="nav-link" activeClassName="active1">

                                                            <span className="nav-link-text">Addresses</span>
                                                      </NavLink>
                                                </li>
                                                <li className="nav-item">

                                                      <NavLink exact to="/payment-method" className="nav-link" activeClassName="active1">

                                                            <span className="nav-link-text">Payment methods</span>
                                                      </NavLink>
                                                </li>
                                                <li className="nav-item">


                                                      <NavLink exact to="/account-details" className="nav-link" activeClassName="active1">

                                                            <span className="nav-link-text">Account details</span>
                                                      </NavLink>
                                                </li>
                                                <li className="nav-item">


                                                      <NavLink exact to="/wish-list" className="nav-link" activeClassName="active1">
                                                            <span className="nav-link-text">Wishlist</span>
                                                      </NavLink>
                                                </li>
                                                <li className="nav-item">


                                                      <NavLink exact to="#" className="nav-link" activeClassName="" >

                                                            <span className="nav-link-text">Logout</span>
                                                      </NavLink>
                                                </li>
                                          </ul>

                                    </nav>


                              </div>
                              <div className="col-12 col-md-9 p-3">


                                    <div className="row">
                                          <div className="col-md-12">
                                                <form action="">
                                                      <input className="form-check-input rounded-pill" type="radio" name="pay" value="" id="settings-checkbox-1" checked />  &nbsp; <small>Credit Card (Stripe) </small> <img src={cardsimg} width="200px" height="30px" alt="pic" style={{ float: "right" }} />

                                                      <p className="mb-3" style={{ fontSize: "12px" }}>Pay with your credit card via Stripe.</p>
                                                      <div className="row">

                                                            <div className="col-md-4">
                                                                  <label htmlFor="" style={{ fontSize: "12px" }} className="mb-1">Card Number <span className="text-danger"> *</span></label>
                                                                  <input type="text" className="form-control" style={{ fontSize: "12px" }} placeholder="1234 1234 1234" />

                                                            </div>
                                                      </div>
                                                      <div className="row">
                                                            <div className="col-md-4 mt-2">
                                                                  <label htmlFor="" style={{ fontSize: "12px" }} className="mb-1">Expiry Date <span className="text-danger"> *</span></label>
                                                                  <input type="text" className="form-control" style={{ fontSize: "12px" }} placeholder="MM/YY" />

                                                            </div>
                                                      </div>
                                                      <div className="row">
                                                            <div className="col-md-4 mt-2">
                                                                  <label htmlFor="" style={{ fontSize: "12px" }} className="mb-1">Card Code (CVC) <span className="text-danger"> *</span></label>
                                                                  <input type="text" className="form-control" style={{ fontSize: "12px" }} placeholder="CVC" />

                                                            </div>


                                                      </div>
                                                      <NavLink exact to="/add-payment-method" type="button" className="btn btn-sm p-3 mt-4" style={{ backgroundColor: "#E8C21E", fontSize: "12px", color: "white", width: "180px", height: "47px" }}>ADD PAYMENT METHOD</NavLink>

                                                </form>
                                          </div>

                                    </div>


                              </div>
                        </div>
                  </div>
            </>
      );
}

export default AddPaymentMethod;