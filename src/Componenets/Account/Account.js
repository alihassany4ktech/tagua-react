import React from "react";
import { Link } from "react-router-dom";

const Account = () => {

      return (
            <>
                  <div className="container-fluid p-0">
                        <div className="row mt-5 mb-5">
                              <div className="col-12 col-md-3" style={{ borderRight: "1px solid #ebebeb" }}>
                                    <h3>My account </h3>
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

                                                            <span className="nav-link-text">Payment method</span>
                                                      </a>
                                                </li>
                                                <li className="nav-item">
                                                      <a href="#" className="nav-link">

                                                            <span className="nav-link-text">Account detail</span>
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
                              <div className="col-12 col-md-9">

                                    <p>Hello peter (not peter? Log out)</p>

                                    <p>From your account dashboard you can view your recent orders, manage your shipping and billing
                                          addresses, and <Link exact to="#"> edit your password and account details</Link>.</p>
                                    <div className="d-flex flex-row">
                                          <div className="col-md-4 mb-4 mt-2 text-center" style={{ border: "1px solid #dbdddc" }}>
                                                <i class="fa fa-envelope mt-4" style={{ fontSize: '50px' }}></i>
                                                <p className="mb-5">info@taguagunleather.com</p>
                                          </div>
                                          <div className="col-md-4 mb-4 mt-2 m-2 text-center" style={{ border: "1px solid #dbdddc" }}>
                                                <i class="fa fa-envelope mt-4" style={{ fontSize: '50px' }}></i>
                                                <p className="mb-5">info@taguagunleather.com</p>
                                          </div>
                                          <div className="col-md-4 mb-4 mt-2 text-center" style={{ border: "1px solid #dbdddc" }}>
                                                <i class="fa fa-envelope mt-4" style={{ fontSize: '50px' }}></i>
                                                <p className="mb-5">info@taguagunleather.com</p>
                                          </div>
                                    </div>



                              </div>
                        </div>

                  </div>
            </>
      );
}

export default Account;