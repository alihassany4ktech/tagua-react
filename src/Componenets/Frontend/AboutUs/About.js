import React from "react";
import "./about.css"
import img1 from "./user-1.jpg";
import img2 from "./user-8.jpg";
import img3 from "./user-9.jpg";
import img4 from "./user-7.jpg";
const About = () => {
      return (
            <>
                  <div className="container-fluid">

                        <div class="bg-white py-5 mt-5">
                              <div class="container py-5">
                                    <div class="row  align-items-center mb-5">
                                          <div class="col-lg-6 shadow order-2 order-lg-1 p-5"><i class="fa fa-bar-chart fa-2x mb-3" style={{ color: "#E8C21E" }}></i>
                                                <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
                                                <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                <button type="button" className="btn mt-4  px-5 text-dark mb-3 bg-yellow rounded-0" >Learn More</button>

                                          </div>
                                          <div class="col-lg-5  mx-auto order-1 order-lg-2"><img src="assets/images/background/background-3.jpg" alt="pic" class="img-fluid mb-4 mb-lg-0" style={{ height: "330px", width: "550px" }} /></div>
                                    </div>
                                    <div class="row align-items-center">
                                          <div class="col-lg-5  mx-auto"><img src="assets/images/background/background-2.jpg" alt="pic" class="img-fluid mb-4 mb-lg-0" style={{ height: "330px", width: "550px" }} /></div>
                                          <div class="col-lg-6 shadow p-5"><i class="fa fa-leaf fa-2x mb-3" style={{ color: "#E8C21E" }}></i>
                                                <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
                                                <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                <button type="button" className="btn mt-4  px-5 text-dark mb-3 bg-yellow rounded-0" >Learn More</button>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div class="py-5">
                              <div class="container py-5">
                                    <div class="row mb-4">
                                          <div class="col-lg-5">
                                                <h2 class="display-4 font-weight-light">Our team</h2>
                                                <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                          </div>
                                    </div>

                                    <div class="row text-center">

                                          <div class="col-xl-3 col-sm-6 mb-5">
                                                <div class="bg-white rounded shadow py-5 px-4">
                                                      <img src={img1} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow" />
                                                      <h5 class="mb-0">Manuella Nevoresky</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                                                      <ul class="social mb-0 list-inline mt-3">
                                                            <i class="fa fa-facebook social-link" style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-instagram social-link " style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-twitter social-link" style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-youtube-play social-link " style={{ fontSize: "16px" }}></i>
                                                      </ul>

                                                </div>
                                          </div>

                                          <div class="col-xl-3 col-sm-6 mb-5">
                                                <div class="bg-white rounded shadow py-5 px-4">
                                                      <img src={img2} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow" />
                                                      <h5 class="mb-0">Samuel Hardy</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                                                      <ul class="social mb-0 list-inline mt-3">
                                                            <i class="fa fa-facebook social-link" style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-instagram social-link " style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-twitter social-link" style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-youtube-play social-link " style={{ fontSize: "16px" }}></i>
                                                      </ul>
                                                </div>
                                          </div>

                                          <div class="col-xl-3 col-sm-6 mb-5">
                                                <div class="bg-white rounded shadow py-5 px-4">
                                                      <img src={img3} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow" />
                                                      <h5 class="mb-0">Tom Sunderland</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                                                      <ul class="social mb-0 list-inline mt-3">
                                                            <i class="fa fa-facebook social-link" style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-instagram social-link " style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-twitter social-link" style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-youtube-play social-link " style={{ fontSize: "16px" }}></i>
                                                      </ul>
                                                </div>
                                          </div>



                                          <div class="col-xl-3 col-sm-6 mb-5">
                                                <div class="bg-white rounded shadow py-5 px-4">
                                                      <img src={img4} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow" />
                                                      <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                                                      <ul class="social mb-0 list-inline mt-3">
                                                            <i class="fa fa-facebook social-link" style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-instagram social-link " style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-twitter social-link" style={{ fontSize: "16px" }}></i>
                                                            <i class="fa fa-youtube-play social-link " style={{ fontSize: "16px" }}></i>
                                                      </ul>
                                                </div>
                                          </div>


                                    </div>
                              </div>
                        </div>



                  </div>
            </>
      );
}
export default About;