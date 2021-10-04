import React from "react";
import { BrowserRouter, NavLink, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import "./account.css";
import Order from "./orders/Order";
import Address from "./Addresses/Address";
const Account = () => {

      return (
            <>
                  <BrowserRouter>
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
                                                            <a href="#" className="nav-link">

                                                                  <span className="nav-link-text">Downloads</span>
                                                            </a>
                                                      </li>
                                                      <li className="nav-item">

                                                            <NavLink exact to="/addresses" className="nav-link" activeClassName="active1">

                                                                  <span className="nav-link-text">Addresses</span>
                                                            </NavLink>
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

                                    {/* componenet  */}

                                    <Switch>
                                          <Route exact path="/account" component={Dashboard} />
                                          <Route exact path="/orders" component={Order} />
                                          <Route exact path="/addresses" component={Address} />

                                    </Switch>



                              </div>

                        </div>
                  </BrowserRouter>
            </>
      );
}

export default Account;