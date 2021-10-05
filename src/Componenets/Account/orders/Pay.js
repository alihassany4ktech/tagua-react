import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import cardsimg from "./cards2.png"
const Pay = () => {
      const [hideShow, sethideShow] = useState(true)
      const [hideShow1, sethideShow1] = useState(false)
      const showHideHandler = () => {
            sethideShow(true);
            sethideShow1(false);
      }
      const showHideHandler1 = () => {
            sethideShow1(true);
            sethideShow(false);
      }
      return (
            <>
                  <div className="container mt-5 mb-5">
                        <div className="row justify-content-center">
                              <div className="col-md-12 col-lg-6 bg-light">
                                    <div class="table-responsive p-5">
                                          <table class="table app-table-hover mb-0 text-left">
                                                <thead>
                                                      <tr style={{ lineHeight: "30px" }}>
                                                            <th class="cell">PRODUCT</th>
                                                            <th class="cell">QTY</th>
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
                                                            <td class="cell align-middle text-end" style={{ fontSize: "12px" }}>× 1</td>
                                                            <td class="cell align-middle text-end" style={{ fontSize: "12px" }}>$18.80 </td>
                                                      </tr>
                                                      <tr style={{ lineHeight: "40px" }}>
                                                            <td class="cell align-middle" colspan="2" style={{ fontSize: "12px" }}> <b>Subtotal:</b> </td>

                                                            <td class="cell align-middle text-end" style={{ fontSize: "12px" }}> <span style={{ color: "#E8C21E" }}> <b>$18.80</b> </span>  </td>
                                                      </tr>

                                                      <tr style={{ lineHeight: "40px" }}>
                                                            <td class="cell align-middle" colspan="2" style={{ fontSize: "12px" }}> <b>Shipping:</b> </td>

                                                            <td class="cell align-middle text-end" style={{ fontSize: "12px" }}> Flat rate  </td>
                                                      </tr>
                                                      <tr style={{ lineHeight: "40px" }}>
                                                            <td class="cell align-middle" colspan="2" style={{ fontSize: "12px" }}> <b>Payment method:</b> </td>

                                                            <td class="cell align-middle text-end" style={{ fontSize: "12px" }}> Credit Card (Stripe)  </td>
                                                      </tr>

                                                      <tr style={{ lineHeight: "40px" }}>
                                                            <td class="cell align-middle" colspan="2" style={{ fontSize: "24px" }}> <b>Total:</b> </td>

                                                            <td class="cell align-middle text-end" style={{ fontSize: "24px" }}><span style={{ color: "#E8C21E" }}> $18.80 </span> </td>
                                                      </tr>
                                                      <tr style={{ lineHeight: "23px" }}>
                                                            <td class="cell align-middle" colspan="3" >
                                                                  {
                                                                        hideShow ? <div>
                                                                              <input className="form-check-input rounded-pill" style={{ marginTop: "13px" }} type="radio" onChange={showHideHandler} name="pay" value="" id="settings-checkbox-1" checked /> &nbsp; <small>payPal <img src={cardsimg} width="200px" height="35px" alt="pic" /> <NavLink exact to="#" className="paypal-link"> <u>What is PayPal?</u></NavLink> </small>  <br />

                                                                        </div> : <div>
                                                                              <input className="form-check-input rounded-pill" style={{ marginTop: "13px" }} type="radio" onChange={showHideHandler} name="pay" value="" id="settings-checkbox-1" /> &nbsp; <small>payPal <img src={cardsimg} width="200px" height="35px" alt="pic" /> <NavLink exact to="#" className="paypal-link"> <u>What is PayPal?</u></NavLink> </small>  <br />

                                                                        </div>
                                                                  }

                                                                  {hideShow ? <div className="mb-2 mt-4" style={{ backgroundColor: "white" }}>
                                                                        <p style={{ fontSize: "12px" }} className="px-3 py-3 text-muted">Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                                                  </div> : ''}
                                                                  <div className="mt-2">
                                                                        <input className="form-check-input rounded-pill" type="radio" name="pay" onChange={showHideHandler1} value="" id="settings-checkbox-1" />  &nbsp; <small>Credit Card (Stripe) </small> <img src={cardsimg} width="200px" height="30px" alt="pic" style={{ float: "right" }} />

                                                                  </div>
                                                                  {hideShow1 ? <div className="mb-2 mt-4" style={{ backgroundColor: "white" }}>
                                                                        <p style={{ fontSize: "12px" }} className="px-3  py-2 text-muted">Pay with your credit card via Stripe.</p>

                                                                        <div className="form-check mb-0 mx-3">
                                                                              <input className="form-check-input rounded-pill" name="paystripe" type="radio" value="" id="settings-checkbox-1" />
                                                                              <small className="form-check-label" style={{ fontSize: "12px" }} for="settings-checkbox-1">
                                                                                    MasterCard ending in 3577 (expires 08/22)
                                                                              </small>
                                                                        </div>
                                                                        <div className="form-check mb-0 mx-3">
                                                                              <input className="form-check-input rounded-pill" name="paystripe" type="radio" value="" id="settings-checkbox-1" />
                                                                              <small className="form-check-label" style={{ fontSize: "12px" }} for="settings-checkbox-1">
                                                                                    Visa ending in 9397 (expires 08/22)
                                                                              </small>
                                                                        </div>
                                                                        <div className="form-check mb-0 mx-3">
                                                                              <input className="form-check-input rounded-pill" name="paystripe" type="radio" value="" id="settings-checkbox-1" />
                                                                              <small className="form-check-label" style={{ fontSize: "12px" }} for="settings-checkbox-1">
                                                                                    Visa ending in 9397 (expires 08/22)
                                                                              </small>
                                                                        </div>
                                                                        <div className="form-check mb-0 mx-3">
                                                                              <input className="form-check-input rounded-pill" name="paystripe" type="radio" value="" id="settings-checkbox-1" />
                                                                              <small className="form-check-label" style={{ fontSize: "12px" }} for="settings-checkbox-1">
                                                                                    Use a new payment method
                                                                              </small>
                                                                        </div>



                                                                  </div> : ''}
                                                            </td>

                                                      </tr>
                                                      <tr>
                                                            <td className="cell" colspan="3">
                                                                  <p style={{ fontSize: "12px", marginTop: "15px" }}>Your personal data will be used to process your order, support your experience <br /> throughout this website, and for other purposes
                                                                        described in our <b> privacy policy </b></p>
                                                            </td>
                                                      </tr>
                                                      <tr>
                                                            <td className="cell" colspan="3">
                                                                  <input className="form-check-input" type="checkbox" />&nbsp;  <small style={{ fontSize: "12px" }}> I have read and agree to the website <b> terms and conditions </b> <span className="text-danger">*</span>  </small>
                                                            </td>

                                                      </tr>


                                                      <button className="btn bg-yellow rounded-0 text-white mt-3  px-5 py-3" style={{ width: "160%" }} >PROCEED TO PAYPAL</button>


                                                </tbody>
                                          </table>
                                    </div>


                              </div>
                        </div>
                  </div>
            </>
      );
};
export default Pay;