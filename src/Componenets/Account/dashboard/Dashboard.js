import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {

      return (
            <>
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
            </>
      );
}


export default Dashboard;