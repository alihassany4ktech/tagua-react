import React from "react";
import { NavLink } from "react-router-dom"


const Address = () => {
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


                                                      <NavLink exact to="/logout" className="nav-link" activeClassName="" >

                                                            <span className="nav-link-text">Logout</span>
                                                      </NavLink>
                                                </li>
                                          </ul>

                                    </nav>


                              </div>
                              <div className="col-12 col-md-9 p-4">
                                    <p>The following addresses will be used on the checkout page by default. </p>
                                    <div className="row">

                                          <div className="col-md-6 p-3">
                                                <h3 className="section-title">Billing address <small className="edit-address" style={{ fontSize: "12px" }}>Edit</small> </h3> <br />
                                                <p style={{ lineHeight: "30px" }}>PEDRO KELLEMEN
                                                      <br />1800 SW 1st Avenue Suite # 305
                                                      <br />FPY132965
                                                      <br />Miami, FL, FL 33129 </p>
                                          </div>
                                          <div className="col-md-6 p-3">
                                                <h3 className="section-title">Shipping address <small className="edit-address" style={{ fontSize: "12px" }}>Edit</small></h3> <br />
                                                <p style={{ lineHeight: "30px" }}>PEDRO KELLEMEN
                                                      <br />1800 SW 1st Avenue Suite # 305
                                                      <br />FPY132965
                                                      <br />Miami, FL, FL 33129 </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default Address;