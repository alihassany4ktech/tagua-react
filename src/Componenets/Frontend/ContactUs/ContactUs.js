import React from "react";
import Map from "./Map";
const ContactUs = () => {
      return (
            <>


                  <Map /> <br /><br />
                  <div className="container" style={{ marginTop: "80px" }}>
                        <div className="row justify-content-center">
                              <div className="col-lg-6 col-md-8 d-flex align-items-center justify-content-center">
                                    <form className="bg-black p-5">
                                          <strong className="text-white">CONTACT US FOR ANY QUESTIONS</strong>
                                          <div className="row mt-3">
                                                <div class="form-group col-md-6 mb-3">
                                                      <label className="text-white mb-1" htmlFor="Your name">Your Name</label>
                                                      <input type="emtextil" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type here" />

                                                </div>
                                                <div class="form-group col-md-6 mb-3">
                                                      <label className="text-white mb-1" htmlFor="Your name">Your Email</label>
                                                      <input type="emtextil" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type here" />

                                                </div>
                                          </div>
                                          <div className="row">
                                                <div class="form-group col-md-6 mb-3">
                                                      <label className="text-white mb-1" htmlFor="Your name">Phone Number</label>
                                                      <input type="emtextil" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type here" />

                                                </div>
                                                <div class="form-group col-md-6 mb-3">
                                                      <label className="text-white mb-1" htmlFor="Your name">Company</label>
                                                      <input type="emtextil" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type here" />

                                                </div>
                                          </div>
                                          <label className="text-white mb-1" htmlFor="Your name">Yor Message</label>
                                          <textarea className="form-control" style={{ height: "120px" }} name="" id="" cols="30" rows="10" placeholder="Type here" ></textarea>



                                          <button type="submit" className="btn mt-4 text-dark mb-3 bg-yellow rounded-0" >ASK A QUESTION</button> <br />

                                    </form>
                              </div>
                              <div className="col-lg-3 col-md-6 mb-3">

                                    <p className="text-dark mt-2"><b>Tagua Gun Leather </b> <br /> 2047 NW 24TH AVE
                                          Miami, Florida 33142
                                          United States</p>
                                    <div className="col-md-12 mb-4 mt-2 text-center" style={{ border: "1px solid #dbdddc" }}>
                                          <i class="fa fa-envelope mt-4" style={{ fontSize: '50px' }}></i>
                                          <p className="mb-5">info@taguagunleather.com</p>
                                    </div>
                                    <div className="col-md-12 mt-2 mb-4 text-center" style={{ border: "1px solid #dbdddc" }}>
                                          <i class="fa fa-phone mt-4" style={{ fontSize: '50px' }}></i>
                                          <p className="mb-5">+1-866-678-2482 </p>
                                    </div>
                                    <div className="col-md-12 mt-2 text-center" style={{ border: "1px solid #dbdddc" }}>
                                          <i class="fa fa-fax mt-4" style={{ fontSize: '50px' }}></i>
                                          <p className="mb-5">+1-866-678-2482 </p>
                                    </div>

                              </div>

                        </div>
                  </div>

            </>
      );
}
export default ContactUs;