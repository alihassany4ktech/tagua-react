import React from "react";
import { NavLink } from "react-router-dom";
const PaymentMethod = () => {
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

                                    <div class="table-responsive p-2">
                                          <table class="table app-table-hover mb-0 text-left">
                                                <thead>
                                                      <tr style={{ lineHeight: "30px" }}>
                                                            <th class="cell">METHOD</th>
                                                            <th class="cell">EXPIRE</th>
                                                            <th class="cell text-end"></th>
                                                      </tr>
                                                </thead>
                                                <tbody>

                                                      <tr style={{ lineHeight: "60px" }}>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}>MasterCard ending in 3577 </td>

                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}>08/22  </td>


                                                            <td className="cell align-middle  text-end ">
                                                                  <button className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "80px", height: "40px" }}>DELETE</button>
                                                            </td>

                                                      </tr>

                                                      <tr style={{ lineHeight: "60px" }}>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}>Visa ending in 9397 </td>

                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}>08/22  </td>


                                                            <td className="cell align-middle  text-end ">
                                                                  <button className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "80px", height: "40px" }}>DELETE</button>
                                                                  <button className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "135px", height: "40px" }}>MAKE DEFAULT</button>
                                                            </td>

                                                      </tr>

                                                      <tr style={{ lineHeight: "60px" }}>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}>Visa ending in 9397 </td>

                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}>08/22  </td>


                                                            <td className="cell align-middle  text-end ">
                                                                  <button className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "80px", height: "40px" }}>DELETE</button>
                                                                  <button className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "135px", height: "40px" }}>MAKE DEFAULT</button>

                                                            </td>

                                                      </tr>

                                                </tbody>
                                          </table>
                                    </div>
                                    <NavLink exact to="/add-payment-method" type="button" className="btn btn-sm p-3 mt-4" style={{ backgroundColor: "#E8C21E", fontSize: "12px", color: "white", width: "180px", height: "47px" }}>ADD PAYMENT METHOD</NavLink>



                              </div>
                        </div>
                  </div>
            </>
      );
}

export default PaymentMethod;