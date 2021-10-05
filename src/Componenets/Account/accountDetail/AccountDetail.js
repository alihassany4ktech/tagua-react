import React from "react";
import "./accountdetail.css";
import { NavLink } from "react-router-dom"
const AccountDetail = () => {

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
                              <div className="col-12 col-md-9 p-4">
                                    <form action="">
                                          <div className="row">

                                                <div className="col-md-6 p-3 mb-2">
                                                      <label htmlFor="" className="mb-1">First name <span className="text-danger"> *</span></label>
                                                      <input type="text" className="form-control" placeholder="pedro" />

                                                </div>
                                                <div className="col-md-6 p-3 mb-2">
                                                      <label htmlFor="" className="mb-1">Last name <span className="text-danger"> *</span></label>
                                                      <input type="text" className="form-control" placeholder="kellemen" />
                                                </div>

                                          </div>
                                          <div className="row mb-4">
                                                <div className="col-md-12">
                                                      <label htmlFor="" className="mb-1">Display name <span className="text-danger"> *</span></label>
                                                      <input type="text" className="form-control" placeholder="peter" />
                                                      <small className="mt-1"> This will be how your name will be displayed in the account section and in reviews</small>
                                                </div>
                                          </div>
                                          <div className="row">
                                                <div className="col-md-12">
                                                      <label htmlFor="" className="mb-1">Email address<span className="text-danger"> *</span></label>
                                                      <input type="text" className="form-control" placeholder="peter@taguagunleather.com" />

                                                </div>
                                          </div>
                                          <div className="row mt-5">
                                                <div className="col-md-12">
                                                      <h4>PASSWORD CHANGE</h4>

                                                      <div className="row mt-4 mb-4">
                                                            <div className="col-md-10 mx-5">
                                                                  <label htmlFor="" className="mb-1">Current password (leave blank to leave unchanged)</label>
                                                                  <input type="text" className="form-control" />

                                                            </div>
                                                      </div>
                                                      <div className="row mb-4">
                                                            <div className="col-md-10 mx-5">
                                                                  <label htmlFor="" className="mb-1">New password (leave blank to leave unchanged)</label>
                                                                  <input type="text" className="form-control" />

                                                            </div>
                                                      </div>
                                                      <div className="row">
                                                            <div className="col-md-10 mx-5">
                                                                  <label htmlFor="" className="mb-1">Confirm new password</label>
                                                                  <input type="text" className="form-control" />

                                                            </div>
                                                      </div>


                                                </div>
                                                <button className="btn btn-sm p-2 mx-2 mt-4" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "120px", height: "40px" }}>SAVE SHANGES</button>

                                          </div>
                                    </form>
                              </div>
                        </div>

                  </div>
            </>
      );
}

export default AccountDetail;