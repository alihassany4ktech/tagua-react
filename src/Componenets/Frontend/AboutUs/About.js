import React from "react";
import "./about.css"

const About = () => {
      return (
            <>
                  <div className="row background-pic1 mb-5">
                        <div className="col-md-12">
                              <div className="container h-100">
                                    <div className="row align-items-center h-100 ">
                                          <div className="d-flex flex-column">
                                                <div className="col-10 col-md-6 col-lg-4 mx-auto">
                                                      <div className="jumbotron">
                                                            <h1 className="text-white text-center">WHO WE ARE </h1>
                                                      </div>

                                                </div>
                                                <div className="col-10 mx-auto">
                                                      <div className="jumbotron ">
                                                            <p className="text-white text-center">
                                                                  Tagua Gunleather was founded in 2005 and has since experienced a
                                                                  strong and sustained growth rate, one of the highest in the market
                                                                  . Over time, we have achieved profound quality and dependability in
                                                                  our products.
                                                            </p>

                                                      </div>
                                                </div>

                                          </div>
                                    </div>
                              </div>

                        </div>
                  </div>
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





                  </div>
            </>
      );
}
export default About;