import React from "react";
import { NavLink } from "react-router-dom"
import "./invoice.css";
const Invoice = () => {

      return (
            <>

                  <div className="container-fluid" style={{ background: "#f5f5f5" }}>
                        <div className="row justify-content-center">
                              <div className="col-md-7 shadow-lg mt-2 bg-white mb-2 px-5 py-4">
                                    <div className="row">
                                          <div className="col-md-6 px-5 py-3">
                                                <img className="align-items-center" src="assets/images/app-logo.png" width="300" height="80" alt="logo" />
                                          </div>
                                          <div className="col-md-6 px-5 py-3">
                                                <h6>Taguagunleathe</h6>
                                          </div>
                                    </div>
                                    <div className="row mt-5">
                                          <h2 style={{ marginLeft: "34px" }}>INVOICE</h2>
                                          <div className="col-md-6 px-5 py-3">

                                                <p className="text-dark">
                                                      pedro kellemen <br />
                                                      1800 SW 1st Avenue<br />
                                                      Suite # 305<br />
                                                      miami, FL 33129<br />
                                                      peter@taguagunleather.com<br />
                                                      305 678 32 78
                                                </p>
                                          </div>
                                          <div className="col-md-6 px-5 py-3">
                                                <p className="text-dark">
                                                      Invoice Number: &nbsp; 22346 <br />
                                                      Invoice Date:&nbsp; June 15, 2020<br />
                                                      Order Number:&nbsp; 22346<br />
                                                      Order Date: &nbsp; June 15, 2020<br />
                                                      Payment Method
                                                </p>
                                          </div>
                                    </div>

                                    <div className="row justify-content-center px-0">
                                          <div className="col-md-11">
                                                <div class="table-responsive">
                                                      <table class="table app-table-hover mb-0 text-left">
                                                            <thead className="bg-dark text-white">
                                                                  <tr>
                                                                        <th class="cell">Product</th>
                                                                        <th class="cell">Quantity</th>
                                                                        <th class="cell">Price</th>

                                                                  </tr>
                                                            </thead>
                                                            <tbody>
                                                                  <tr style={{ lineHeight: "50px" }}>
                                                                        <td class="cell align-middle" style={{ fontSize: "12px", lineHeight: "16px" }}>
                                                                              <p className="mt-1">TAGUA LEATHER-CLIP ON MAG CARRIER</p>
                                                                              <b> Color: </b>Camouflage <br />
                                                                              <b> Hand Options: </b>Ambidextrous <br />
                                                                              <b> Magazine Holder Options: <br /> <br /> </b>SKU: TWHS-IWH-003 <br />

                                                                        </td>
                                                                        <td class="cell"><span class="truncate" style={{ fontSize: "12px" }}>1</span></td>
                                                                        <td class="cell" style={{ fontSize: "12px" }}>$16.90 </td>


                                                                  </tr>
                                                            </tbody>
                                                      </table>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="row justify-content-end mt-3 text-dark" >

                                          <div className="col-md-6 px-5" >
                                                <hr />
                                                <div className="row px-3">
                                                      <div className="col-md-6" >
                                                            <h6>Subtotal</h6>
                                                      </div>
                                                      <div className="col-md-6">
                                                            <p>$16.90</p>
                                                      </div>
                                                      <hr />
                                                </div>
                                                <div className="row px-3">
                                                      <div className="col-md-6">
                                                            <h6>Discount</h6>
                                                      </div>
                                                      <div className="col-md-6">
                                                            <p>-$16.90</p>
                                                      </div>
                                                      <hr />
                                                </div>
                                                <div className="row px-3">
                                                      <div className="col-md-6">
                                                            <h6>Shipping</h6>
                                                      </div>
                                                      <div className="col-md-6">
                                                            <p>Flat rate</p>
                                                      </div>
                                                      <hr className="row4" />
                                                </div>
                                                <div className="row px-3">
                                                      <div className="col-md-6">
                                                            <h6>Total</h6>
                                                      </div>
                                                      <div className="col-md-6">
                                                            <p><b> $0.00</b></p>
                                                      </div>
                                                      <hr className="row5" />
                                                </div>


                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>


            </>
      );
}

export default Invoice;