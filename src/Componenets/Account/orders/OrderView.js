import React from "react";
import { NavLink } from "react-router-dom"

const OrderView = () => {

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
                                    <p style={{ fontSize: "13px" }}>Order # <b>24154</b>  was placed on  <b>February 24, 2021</b>  and is currently <b>Processing</b> .</p> <br />
                                    <h4>ORDER DETAILS</h4>
                                    <div class="table-responsive p-2">
                                          <table class="table app-table-hover mb-0 text-left">
                                                <thead>
                                                      <tr style={{ lineHeight: "30px" }}>
                                                            <th class="cell">PRODUCT</th>

                                                            <th class="cell text-end">TOTAL</th>
                                                      </tr>
                                                </thead>
                                                <tbody>

                                                      <tr style={{ lineHeight: "60px" }}>
                                                            <td class="cell align-middle" style={{ fontSize: "12px", lineHeight: "23px" }}>TAGUA NYLON-CAMO IWB/OWB HOLSTER × 1 <br /> <br />
                                                                  <b> Color: </b>Camouflage <br />
                                                                  <b> Hand Options: </b>Ambidextrous <br />
                                                                  <b> Gun Models: </b>COLT - .380 Mustang - (2.75")(.380)
                                                            </td>
                                                            <td class="cell align-middle text-end" style={{ fontSize: "12px" }}>$18.80 </td>
                                                      </tr>

                                                      <tr style={{ lineHeight: "40px" }}>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}> <b>Subtotal:</b> </td>
                                                            <td class="cell align-middle text-end" style={{ fontSize: "12px" }}> <span style={{ color: "#E8C21E" }}> <b>$18.80</b> </span>  </td>
                                                      </tr>

                                                      <tr style={{ lineHeight: "40px" }}>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}> <b>Shipping:</b> </td>
                                                            <td class="cell align-middle text-end" style={{ fontSize: "12px" }}> Flat rate  </td>
                                                      </tr>
                                                      <tr style={{ lineHeight: "40px" }}>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}> <b>Payment method:</b> </td>
                                                            <td class="cell align-middle text-end" style={{ fontSize: "12px" }}> Credit Card (Stripe)  </td>
                                                      </tr>

                                                      <tr style={{ lineHeight: "40px" }}>
                                                            <td class="cell align-middle" style={{ fontSize: "24px" }}> <b>Total:</b> </td>
                                                            <td class="cell align-middle text-end" style={{ fontSize: "24px" }}><span style={{ color: "#E8C21E" }}> $18.80 </span> </td>
                                                      </tr>

                                                </tbody>
                                          </table>
                                    </div>
                                    <div className="row mt-3">

                                          <div className="col-md-6 p-3">
                                                <h4 className="section-title">BILLING ADDRESS </h4> <br />
                                                <p style={{ lineHeight: "30px", fontSize: "13px" }} >PEDRO KELLEMEN
                                                      <br />1800 SW 1st Avenue Suite # 305
                                                      <br />FPY132965
                                                      <br />Miami, FL, FL 33129
                                                      <br />3057183595
                                                      <br />pepeq68@gmail.com
                                                </p>
                                          </div>
                                          <div className="col-md-6 p-3">
                                                <h4 className="section-title">SHIPPING ADDRESS</h4> <br />
                                                <p style={{ lineHeight: "30px", fontSize: "13px" }}>PEDRO KELLEMEN
                                                      <br />1800 SW 1st Avenue Suite # 305
                                                      <br />FPY132965
                                                      <br />Miami, FL, FL 33129

                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

            </>
      );
}

export default OrderView;