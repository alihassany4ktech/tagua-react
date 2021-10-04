import React from "react";
import { Link } from "react-router-dom";
import "./account.css";
const Account = () => {

      return (
            <>
                  <div className="container-fluid p-0">
                        <div className="row mt-5 mb-5">
                              <div className="col-12 col-md-3" style={{ borderRight: "1px solid #ebebeb" }}>
                                    <h5 className="mx-5">My account </h5>
                                    <hr />

                                    <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
                                          <ul className="app-menu list-unstyled accordion" id="menu-accordion">
                                                <li className="nav-item">
                                                      <a href="#" className="nav-link active1">

                                                            <span className="nav-link-text">Dashboard</span>
                                                      </a>
                                                </li>

                                                <li className="nav-item">
                                                      <a href="#" className="nav-link">

                                                            <span className="nav-link-text">Orders</span>
                                                      </a>
                                                </li>
                                                <li className="nav-item">
                                                      <a href="#" className="nav-link">

                                                            <span className="nav-link-text">Downloads</span>
                                                      </a>
                                                </li>
                                                <li className="nav-item">
                                                      <a href="#" className="nav-link">

                                                            <span className="nav-link-text">Addresses</span>
                                                      </a>
                                                </li>
                                                <li className="nav-item">
                                                      <a href="#" className="nav-link">

                                                            <span className="nav-link-text">Payment methods</span>
                                                      </a>
                                                </li>
                                                <li className="nav-item">
                                                      <a href="#" className="nav-link">

                                                            <span className="nav-link-text">Account details</span>
                                                      </a>
                                                </li>
                                                <li className="nav-item">
                                                      <a href="#" className="nav-link">

                                                            <span className="nav-link-text">Wishlist</span>
                                                      </a>
                                                </li>
                                                <li className="nav-item">
                                                      <a href="#" className="nav-link">

                                                            <span className="nav-link-text">Logout</span>
                                                      </a>
                                                </li>
                                          </ul>

                                    </nav>


                              </div>
                              <div className="col-12 col-md-9 p-4">

                                    <p>Hello peter (not peter? Log out)</p>

                                    <p>From your account dashboard you can view your recent orders, manage your shipping and billing
                                          addresses, and <Link exact to="#"> edit your password and account details</Link>.</p>
                                    <div className="account-responsive-grid mt-4">
                                          <div className="text-center shadow border-0 account-div" style={{ border: "1px solid #dbdddc", height: "130px" }}>
                                                <i class="bi bi-list-check mt-4 " style={{ fontSize: '50px' }}></i>
                                                <p className="mb-5">ORDERS</p>
                                          </div>
                                          <div className="text-center shadow border-0 account-div" style={{ border: "1px solid #dbdddc", height: "130px" }}>
                                                <i class="bi bi-download mt-4 " style={{ fontSize: '50px' }}></i>
                                                <p className="mb-5">DOWNLOADS</p>

                                          </div>
                                          <div className="text-center shadow border-0 account-div" style={{ border: "1px solid #dbdddc", height: "130px" }}>
                                                <i class="bi bi-geo-alt mt-4" style={{ fontSize: '50px' }}></i>
                                                <p className="mb-5">ADDRESSES</p>
                                          </div>
                                          <div className="text-center shadow border-0 account-div" style={{ border: "1px solid #dbdddc", height: "130px" }}>
                                                <i class="bi bi-credit-card-2-front mt-4" style={{ fontSize: '50px' }}></i>
                                                <p className="mb-5">PAYMENT METHODS</p>
                                          </div>
                                          <div className="text-center shadow border-0 account-div" style={{ border: "1px solid #dbdddc", height: "130px" }}>
                                                <i class="bi bi-person-circle mt-4" style={{ fontSize: '50px' }}></i>
                                                <p className="mb-5">ACCOUNT DETAILS</p>
                                          </div>
                                          <div className="text-center shadow border-0 account-div" style={{ border: "1px solid #dbdddc", height: "130px" }}>
                                                <i class="bi bi-heart mt-4" style={{ fontSize: '50px' }}></i>
                                                <p className="mb-5">WISHLIST</p>
                                          </div>
                                          <div className="text-center shadow border-0  account-div" style={{ border: "1px solid #dbdddc", height: "130px" }}>
                                                <i class="bi bi-box-arrow-right mt-4" style={{ fontSize: '50px' }}></i>
                                                <p className="mb-5">LOGOUT</p>
                                          </div>
                                    </div>



                              </div>
                        </div>

                  </div>
            </>
      );
}

export default Account;