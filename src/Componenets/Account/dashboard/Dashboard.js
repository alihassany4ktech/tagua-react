import React from "react";
import { Link, NavLink } from "react-router-dom";

const Dashboard = () => {

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


                                                      <NavLink exact to="/wish-list" className="nav-link" activeClassName="active1">
                                                            <span className="nav-link-text">Wishlist</span>
                                                      </NavLink>
                                                </li>
                                                <li className="nav-item">


                                                      <NavLink exact to='/logout' className="nav-link" activeClassName="active1">
                                                            <span className="nav-link-text">Logout</span>

                                                      </NavLink>
                                                </li>
                                          </ul>

                                    </nav>


                              </div>

                              <div className="col-12 col-md-9 p-4">

                                    <p>Hello peter (not peter? Log out)</p>

                                    <p>From your account dashboard you can view your recent orders, manage your shipping and billing
                                          addresses, and <Link exact to="#"> edit your password and account details</Link>.</p>
                                    <div className="account-responsive-grid mt-4">
                                          <Link exact to="/orders">
                                                <div className="text-center shadow border-0 account-div" style={{ border: "1px solid #dbdddc", height: "130px" }}>
                                                      <i class="bi bi-list-check mt-4 " style={{ fontSize: '50px' }}></i>
                                                      <p className="mb-5">ORDERS</p>
                                                </div>
                                          </Link>
                                          <Link exact to="/download">
                                                <div className="text-center shadow border-0 account-div" style={{ border: "1px solid #dbdddc", height: "130px" }}>
                                                      <i class="bi bi-download mt-4 " style={{ fontSize: '50px' }}></i>
                                                      <p className="mb-5">DOWNLOADS</p>

                                                </div>
                                          </Link>
                                          <Link exact to="/addresses">
                                                <div className="text-center shadow border-0 account-div" style={{ border: "1px solid #dbdddc", height: "130px" }}>
                                                      <i class="bi bi-geo-alt mt-4" style={{ fontSize: '50px' }}></i>
                                                      <p className="mb-5">ADDRESSES</p>
                                                </div>
                                          </Link>
                                          <Link exact to="/payment-method">
                                                <div className="text-center shadow border-0 account-div" style={{ border: "1px solid #dbdddc", height: "130px" }}>
                                                      <i class="bi bi-credit-card-2-front mt-4" style={{ fontSize: '50px' }}></i>
                                                      <p className="mb-5">PAYMENT METHODS</p>
                                                </div>
                                          </Link>
                                          <Link exact to="/account-details">
                                                <div className="text-center shadow border-0 account-div" style={{ border: "1px solid #dbdddc", height: "130px" }}>
                                                      <i class="bi bi-person-circle mt-4" style={{ fontSize: '50px' }}></i>
                                                      <p className="mb-5">ACCOUNT DETAILS</p>
                                                </div>
                                          </Link>
                                          <Link exact to="/wish-list">
                                                <div className="text-center shadow border-0 account-div" style={{ border: "1px solid #dbdddc", height: "130px" }}>
                                                      <i class="bi bi-suit-heart mt-4" style={{ fontSize: '50px' }}></i>
                                                      <p className="mb-5">WISHLIST</p>
                                                </div>

                                          </Link>
                                          <Link exact to="/logout">
                                                <div className="text-center shadow border-0  account-div" style={{ border: "1px solid #dbdddc", height: "130px" }}>
                                                      <i class="bi bi-box-arrow-right mt-4" style={{ fontSize: '50px' }}></i>
                                                      <p className="mb-5">LOGOUT</p>
                                                </div>
                                          </Link>
                                    </div>
                              </div>
                        </div>

                  </div>

            </>
      );
}


export default Dashboard;