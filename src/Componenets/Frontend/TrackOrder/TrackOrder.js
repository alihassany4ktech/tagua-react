import React from "react";
import "./trackordr.css";
const TrackOrder = () => {

      return (
            <>
                  <div className="row background-pic mb-5">
                        <div className="col-md-12">
                              <div className="container h-100">
                                    <div className="row align-items-center h-100 ">
                                          <div className="d-flex flex-column">
                                                <div className="col-10 col-md-6 col-lg-4 mx-auto">
                                                      <div className="jumbotron  ">
                                                            <h1 className="text-white">ORDER TRACKING</h1>
                                                      </div>
                                                </div>
                                                <div className="col-10 mx-auto">
                                                      <div className="jumbotron ">
                                                            <p className="text-white text-center">
                                                                  To track your order please enter your Order ID in the box below and press the
                                                                  "Track" button. This was given to you on your receipt and in the <br />
                                                                  confirmation email you should have received.
                                                            </p>
                                                            <div className="row d-flex flex-row mt-5 mx-2">
                                                                  <div className="col-md-6 col-lg-5">
                                                                        <label htmlFor="" className="text-white mb-1">Order ID</label>
                                                                        <input type="text" className="form-control rounded-0" placeholder="Your order id" />
                                                                  </div>
                                                                  <div className="col-md-6 col-lg-5">
                                                                        <label htmlFor="" className="text-white mb-1">Billing email</label>
                                                                        <input type="text" className="form-control rounded-0" placeholder="Found in you order confirmation email" />
                                                                  </div>
                                                                  <div className="col-md-2 col-lg-2">
                                                                        <div className="row">
                                                                              <div className="col-md-12 col-lg-12">
                                                                                    <button className="btn bg-yellow rounded-0 text-white" style={{ width: "154px", height: "40px", marginTop: "27px" }}>Track</button>

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
                  </div>
                  <hr style={{ marginTop: "100px" }} />
                  <div className="container mt-5 mb-5">
                        <div className="row">
                              <div className="col-md-12 text-center">
                                    <h1 className="text-dark">Get answers to all your questions you might <br /> have.</h1>
                                    <p className="text-dark mt-3">
                                          We will answer any questions you may have about our online sales right here. <br />

                                          Monday to Friday from <b>09:00 to 21:00 UTC +2</b>
                                    </p>
                                    <button className="btn bg-yellow rounded-0 text-white mt-3 px-5 py-3" >CONTACT OUT COMPANY</button>
                                    <ul class="social mb-0 list-inline mt-3">
                                          <i class="fa fa-facebook social-link" style={{ fontSize: "16px" }}></i>
                                          <i class="fa fa-twitter social-link" style={{ fontSize: "16px" }}></i>
                                          <i class="fa fa-pinterest social-link " style={{ fontSize: "16px" }}></i>
                                          <i class="fa fa-linkedin social-link " style={{ fontSize: "16px" }}></i>
                                          <i class="fa fa-telegram social-link " style={{ fontSize: "16px" }}></i>
                                    </ul>
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default TrackOrder;