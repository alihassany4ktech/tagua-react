import React from "react";
import { NavLink } from "react-router-dom";
import image from "../../../doc-thumb-2.jpg";
import mlogo from "../../../mlogo.jpg";
const OrderDetail = () => {
      return (
            <>
                  <div className="app-wrapper" >
                        <br />
                        <br />
                        <div className="app-content pt-3 p-md-3 p-lg-4">
                              <div className="container-xl">

                                    <div className="row g-3 mb-4 mt-3 align-items-center justify-content-between">
                                          <div className="col-auto">
                                                <h1 className="app-page-title mb-0 ">Orders Details</h1>
                                          </div>
                                    </div>
                                    <div className="tab-content">
                                          <div className="tab-pane fade show active" id="orders-all" role="tabpanel" aria-labelledby="orders-all-tab">
                                                <div className="app-card app-card-orders-table shadow mb-5">
                                                      <div className="app-card-body">

                                                            <nav id="orders-table-tab" className="orders-table-tab app-nav-tabs nav flex-column flex-sm-row mb-4 p-4 justify-content-between align-content-center">
                                                                  <div className="col-12 col-sm-4 col-md-4 mx-a ">
                                                                        <strong className="text-dark"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                                                              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                                                        </svg> &nbsp;
                                                                              Wed, Aug 13, 2020, 4:34PM</strong><br />
                                                                        <p>Order ID: 3453012</p>

                                                                  </div>
                                                                  <div className='d-flex flex-row'>

                                                                        <div>
                                                                              <select className="form-select w-auto" >
                                                                                    <option selected value="option-1">Change Status</option>
                                                                                    <option value="option-2">Awaiting Payment</option>
                                                                                    <option value="option-3">Confirmed</option>
                                                                                    <option value="option-4">Shipped</option>
                                                                                    <option value="option-4">Delivered</option>
                                                                              </select>
                                                                        </div>
                                                                        <div className="">
                                                                              <NavLink exact to="/product/create" type="submit" className="btn mx-1 app-btn-secondary ">Save</NavLink>
                                                                        </div>
                                                                        <div className="">
                                                                              <NavLink exact to="/product/create" type="submit" className="btn mx-3  app-btn-secondary ">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                                                                                          <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
                                                                                          <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                                                                                    </svg>
                                                                              </NavLink>
                                                                        </div>
                                                                  </div>
                                                            </nav>
                                                            <hr />

                                                            <div className="row">
                                                                  <div className="col-md-4 px-5">
                                                                        <div class="app-icon-holder">
                                                                              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                                                              </svg>
                                                                        </div>
                                                                        <strong>&nbsp;  Customer</strong>
                                                                        <p className="mx-5">John Alexander
                                                                              alex@example.com
                                                                              +998 99 22123456 <br /> <br />
                                                                              <a href="" style={{ color: "#E8C21E" }}>View profile</a></p>
                                                                  </div>
                                                                  <div className="col-md-4 px-5">
                                                                        <div class="app-icon-holder">
                                                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                                                                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                                              </svg>
                                                                        </div>
                                                                        <strong>&nbsp;  Order info</strong>
                                                                        <p className="mx-5">Shipping: Fargo express <br />
                                                                              Pay method: card <br />
                                                                              Status: new <br /><br />
                                                                              <a href="" style={{ color: "#E8C21E" }}>Download info</a></p>
                                                                  </div>
                                                                  <div className="col-md-4 px-5">
                                                                        <div class="app-icon-holder">
                                                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                                              </svg>
                                                                        </div>
                                                                        <strong>&nbsp; Deliver to</strong>
                                                                        <p className="mx-5">City: Tashkent, Uzbekistan

                                                                              Block A, House 123, Floor 2 <br />

                                                                              Po Box 10000 <br /><br />

                                                                              <a href="" style={{ color: "#E8C21E" }}>View profile</a></p>
                                                                  </div>
                                                            </div>



                                                            <div class="row">
                                                                  <div class="col-12 col-lg-8 mx-4 mt-5 mb-5 ">
                                                                        <div class="table-responsive">
                                                                              <table class="table table-bordered app-table-hover mb-0 text-left">
                                                                                    <thead>
                                                                                          <tr>
                                                                                                <th class="cell text-muted" style={{ borderRight: "none" }}>Product</th>
                                                                                                <th class="cell text-muted" style={{ borderLeft: "none", borderRight: "none" }} >Unit Price</th>
                                                                                                <th class="cell text-muted" style={{ borderRight: "none", borderLeft: "none" }}>Quantity</th>
                                                                                                <th class="cell text-muted text-end" style={{ borderLeft: "none" }}>Total</th>

                                                                                          </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                          <tr>
                                                                                                <td className="cell" style={{ borderRight: "none" }}><span className="truncate"> <img className="img-thumbnail" src={image} style={{ height: "60px", width: "60px" }} alt="pic" /> &nbsp; <strong>Lorem ipsum dolor sit amet eget volutpat erat</strong> </span></td>
                                                                                                <td class="cell text-dark" style={{ borderLeft: "none", borderRight: "none" }}><span>$44.35</span></td>
                                                                                                <td class="cell  text-dark" style={{ borderRight: "none", borderLeft: "none" }}>2</td>
                                                                                                <td class="cell text-end text-dark" style={{ borderLeft: "none" }}><span>$259.35</span></td>
                                                                                          </tr>
                                                                                          <tr>
                                                                                                <td className="cell" style={{ borderRight: "none" }}><span className="truncate"> <img className="img-thumbnail" src={image} style={{ height: "60px", width: "60px" }} alt="pic" /> &nbsp; <strong>Lorem ipsum dolor sit amet eget volutpat erat</strong> </span></td>
                                                                                                <td class="cell  text-dark" style={{ borderLeft: "none", borderRight: "none" }}><span>$7.5</span></td>
                                                                                                <td class="cell  text-dark" style={{ borderRight: "none", borderLeft: "none" }}>1</td>
                                                                                                <td class="cell text-end text-dark" style={{ borderLeft: "none" }}><span class="cell-data">$96.20</span></td>
                                                                                          </tr>
                                                                                          <tr>
                                                                                                <td className="cell" style={{ borderRight: "none" }}><span className="truncate"> <img className="img-thumbnail" src={image} style={{ height: "60px", width: "60px" }} alt="pic" /> &nbsp; <strong>Lorem ipsum dolor sit amet eget volutpat erat</strong> </span></td>
                                                                                                <td class="cell  text-dark" style={{ borderLeft: "none", borderRight: "none" }}><span>$7.5</span></td>
                                                                                                <td class="cell  text-dark" style={{ borderRight: "none", borderLeft: "none" }}>1</td>
                                                                                                <td class="cell text-end text-dark" style={{ borderLeft: "none" }}><span class="cell-data">$96.20</span></td>
                                                                                          </tr>
                                                                                          <tr>
                                                                                                <td className="cell" style={{ borderRight: "none" }}><span className="truncate"> <img className="img-thumbnail" src={image} style={{ height: "60px", width: "60px" }} alt="pic" /> &nbsp; <strong>Lorem ipsum dolor sit amet eget volutpat erat</strong> </span></td>
                                                                                                <td class="cell  text-dark" style={{ borderLeft: "none", borderRight: "none" }}><span>$7.5</span></td>
                                                                                                <td class="cell  text-dark" style={{ borderRight: "none", borderLeft: "none" }}>1</td>
                                                                                                <td class="cell text-end text-dark" style={{ borderLeft: "none" }}><span class="cell-data">$96.20</span></td>
                                                                                          </tr>
                                                                                          <tr>
                                                                                                <td style={{ borderRight: "none" }}></td>
                                                                                                <td style={{ borderLeft: "none", borderRight: "none" }}></td>
                                                                                                <td style={{ borderRight: "none", borderLeft: "none" }}>
                                                                                                      <p style={{ lineHeight: "28px" }} className="mt-2"> Subtotal: <br />
                                                                                                            Shipping cost: <br />
                                                                                                            Grand total: <br />
                                                                                                            <span className="text-muted">Status: </span> </p> <br />
                                                                                                </td>
                                                                                                <td className="text-end" style={{ borderLeft: "none" }}>
                                                                                                      <p className="mt-2" style={{ lineHeight: "25px" }}>
                                                                                                            $973.35 <br />
                                                                                                            $10.00 <br />
                                                                                                            <strong className="text-dark">$983.00</strong> <br />
                                                                                                            <button className="btn btn-sm  rounded-pill" style={{ backgroundColor: "rgba(255, 206, 86, 0.1)", color: "#E8C21E" }}>Payment code</button>
                                                                                                      </p>

                                                                                                </td>
                                                                                          </tr>
                                                                                    </tbody>
                                                                              </table>
                                                                        </div>
                                                                  </div>

                                                                  <div class="col-12 col-lg-3  p-3 mt-5" style={{ height: "450px" }}>
                                                                        <div className="row">
                                                                              <div className="col-md-12 bg-light" style={{ marginTop: "-16px" }}>
                                                                                    <strong className="text-dark">Payment info</strong>
                                                                                    <p> <img src={mlogo} style={{ width: "30px", height: "20px" }} alt="mlogo" /> Master Card **** **** 4768 <br />
                                                                                          Business name: Grand Market LLC <br />
                                                                                          Phone: +1 (800) 555-154-52</p>
                                                                              </div>
                                                                              <h7 className="text-dark mt-5" style={{ marginLeft: "-10px" }}>Notes</h7>
                                                                              <textarea className="form-control" name="note" id="" cols="30" rows="10" style={{ height: "70px" }} placeholder="Type some note..."></textarea>
                                                                              <button className="btn app-btn-primary mt-4 theme-btn" style={{ width: "100px" }} >Save note</button>
                                                                        </div>


                                                                  </div>



                                                            </div>

                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                              </div>
                        </div>

                  </div>
            </>
      );
}




export default OrderDetail;