import React from "react";
import { NavLink } from "react-router-dom";
import '../account.css';
import ReactPaginate from 'react-paginate';
const Order = ({ match }) => { 
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
                              <div className="col-12 col-md-9 p-3">

                                    <div class="table-responsive p-2">
                                          <table class="table app-table-hover mb-0 text-left">
                                                <thead>
                                                      <tr>
                                                            <th class="cell">ORDER</th>
                                                            <th class="cell">DATE</th>
                                                            <th class="cell">STATUS</th>
                                                            <th class="cell">TOTAL</th>
                                                            <th class="cell text-end">ACTIONS</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      <tr style={{ lineHeight: "60px" }}>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}> <b> #15346</b></td>
                                                            <td class="cell align-middle"><span class="truncate" style={{ fontSize: "12px" }}> February 24, 2021</span></td>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}>Processing </td>
                                                            <td class="cell align-middle"><span style={{ color: "#E8C21E", fontSize: "12px" }}> <b> $18.80 </b>  </span> for 1 item</td>
                                                            <td className="cell align-middle  text-end ">
                                                                  <NavLink exact to="/product-view" type="button" className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "60px" }}>VIEW</NavLink>
                                                                  <NavLink exact to="/invoice" type="button" className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "75px" }}>INVOICE</NavLink>
                                                            </td>

                                                      </tr>
                                                      <tr style={{ lineHeight: "60px" }}>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}> <b> #15346</b></td>
                                                            <td class="cell align-middle"><span class="truncate" style={{ fontSize: "12px" }}> February 24, 2021</span></td>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}>Processing </td>
                                                            <td class="cell align-middle"><span style={{ color: "#E8C21E", fontSize: "12px" }}> <b> $18.80 </b>  </span> for 1 item</td>
                                                            <td className="cell align-middle  text-end ">
                                                                  <NavLink exact to="/product-view" type="button" className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "60px" }}>VIEW</NavLink>
                                                                  <NavLink exact to="/invoice" type="button" className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "75px" }}>INVOICE</NavLink>
                                                            </td>

                                                      </tr>
                                                      <tr style={{ lineHeight: "60px" }}>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}> <b> #15346</b></td>
                                                            <td class="cell align-middle"><span class="truncate" style={{ fontSize: "12px" }}> February 24, 2021</span></td>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}>Processing </td>
                                                            <td class="cell align-middle"><span style={{ color: "#E8C21E", fontSize: "12px" }}> <b> $18.80 </b>  </span> for 1 item</td>

                                                            <td className="cell align-middle  text-end ">
                                                                  <NavLink exact to="/product-view" type="button" className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "60px" }}>VIEW</NavLink>
                                                                  <NavLink exact to="/invoice" type="button" className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "75px" }}>INVOICE</NavLink>
                                                            </td>

                                                      </tr>

                                                      <tr style={{ lineHeight: "60px" }}>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}> <b> #15346</b></td>
                                                            <td class="cell align-middle"><span class="truncate" style={{ fontSize: "12px" }}> February 24, 2021</span></td>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}>Processing </td>
                                                            <td class="cell align-middle"><span style={{ color: "#E8C21E", fontSize: "12px" }}> <b> $18.80 </b>  </span> for 1 item</td>

                                                            <td className="cell align-middle  text-end ">
                                                                  <NavLink exact to="/product-view" type="button" className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "60px" }}>VIEW</NavLink>
                                                                  <NavLink exact to="/invoice" type="button" className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "75px" }}>INVOICE</NavLink>
                                                            </td>

                                                      </tr>

                                                      <tr style={{ lineHeight: "60px" }}>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}> <b> #15346</b></td>
                                                            <td class="cell align-middle"><span class="truncate" style={{ fontSize: "12px" }}> February 24, 2021</span></td>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}>Processing </td>
                                                            <td class="cell align-middle"><span style={{ color: "#E8C21E", fontSize: "12px" }}> <b> $18.80 </b>  </span> for 1 item</td>

                                                            <td className="cell align-middle  text-end ">
                                                                  <NavLink exact to="/pay" type="button" className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "60px" }}>PAY</NavLink>
                                                                  <NavLink exact to="/product-view" type="button" className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "60px" }}>VIEW</NavLink>
                                                                  <button className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "75px" }}>CENCEL</button>

                                                            </td>

                                                      </tr>

                                                      <tr style={{ lineHeight: "60px" }}>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}> <b> #15346</b></td>
                                                            <td class="cell align-middle"><span class="truncate" style={{ fontSize: "12px" }}> February 24, 2021</span></td>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}>Processing </td>
                                                            <td class="cell align-middle"><span style={{ color: "#E8C21E", fontSize: "12px" }}> <b> $18.80 </b>  </span> for 1 item</td>

                                                            <td className="cell align-middle  text-end ">
                                                                  <NavLink exact to="/product-view" type="button" className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "60px" }}>VIEW</NavLink>
                                                                  <NavLink exact to="/invoice" type="button" className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "75px" }}>INVOICE</NavLink>
                                                            </td>

                                                      </tr>
                                                      <tr style={{ lineHeight: "60px" }}>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}> <b> #15346</b></td>
                                                            <td class="cell align-middle"><span class="truncate" style={{ fontSize: "12px" }}> February 24, 2021</span></td>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}>Processing </td>
                                                            <td class="cell align-middle"><span style={{ color: "#E8C21E", fontSize: "12px" }}> <b> $18.80 </b>  </span> for 1 item</td>

                                                            <td className="cell align-middle  text-end ">
                                                                  <NavLink exact to="/pay" type="button" className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "60px" }}>PAY</NavLink>
                                                                  <NavLink exact to="/product-view" type="button" className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "60px" }}>VIEW</NavLink>
                                                                  <button className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "75px" }}>CENCEL</button>

                                                            </td>

                                                      </tr>
                                                      <tr style={{ lineHeight: "60px" }}>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}> <b> #15346</b></td>
                                                            <td class="cell align-middle"><span class="truncate" style={{ fontSize: "12px" }}> February 24, 2021</span></td>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}>Processing </td>
                                                            <td class="cell align-middle"><span style={{ color: "#E8C21E", fontSize: "12px" }}> <b> $18.80 </b>  </span> for 1 item</td>

                                                            <td className="cell align-middle  text-end ">
                                                                  <NavLink exact to="/product-view" type="button" className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "60px" }}>VIEW</NavLink>
                                                                  <NavLink exact to="/invoice" type="button" className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "75px" }}>INVOICE</NavLink>
                                                            </td>

                                                      </tr>
                                                      <tr style={{ lineHeight: "60px" }}>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}> <b> #15346</b></td>
                                                            <td class="cell align-middle"><span class="truncate" style={{ fontSize: "12px" }}> February 24, 2021</span></td>
                                                            <td class="cell align-middle" style={{ fontSize: "12px" }}>Processing </td>
                                                            <td class="cell align-middle"><span style={{ color: "#E8C21E", fontSize: "12px" }}> <b> $18.80 </b>  </span> for 1 item</td>

                                                            <td className="cell align-middle  text-end ">
                                                                  <NavLink exact to="/product-view" type="button" className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "60px" }}>VIEW</NavLink>
                                                                  <NavLink exact to="/invoice" type="button" className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "75px" }}>INVOICE</NavLink>
                                                            </td>

                                                      </tr>


                                                </tbody>
                                          </table>
                                    </div>
                                    <div className="overflow-auto mt-4">
                                          <ReactPaginate
                                                previousLabel={"Prev"}
                                                nextLabel={"Next"}
                                                // pageCount={pageCount}
                                                // onPageChange={changePage}
                                                containerClassName={"paginationBttnsLight"}
                                                previousLinkClassName={"previousBttnLight"}
                                                nextLinkClassName={"nextBttnLight"}
                                                disabledClassName={"paginationDisabledLight"}
                                                activeClassName={"paginationActiveLight"}
                                          />

                                    </div>

                              </div>

                        </div>
                  </div>
            </>
      );
}

export default Order;