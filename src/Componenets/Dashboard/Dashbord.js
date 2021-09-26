import React from "react"
import Barchart from "./Barchart";
import Order from "./Order";
import { NavLink } from "react-router-dom";

const Dashboard = () => {

      return (
            <>
                  <div className="app-wrapper"  >
                        {/* style={{ backgroundColor: "#f5f6fe" }} */}
                        <div className="app-content pt-3 p-md-3 p-lg-4" >
                              <div className="container-xl">



                                    <div className="row g-3 mb-4 align-items-center justify-content-between">
                                          <div className="col-auto">
                                                <h1 className="app-page-title" style={{ fontSize: "28px", marginTop: "80px" }}>Dashboard</h1>
                                          </div>
                                          <div className="col-auto" style={{ marginTop: "80px" }}>
                                                <div className="page-utilities">
                                                      <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
                                                            <div className="col-auto">
                                                                  <button className="btn app-btn-primary p-2  mt-4 theme-btn" style={{ width: "130px", fontSize: "15px" }} >Create report</button>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="row g-4 mb-4">
                                          <div class="col-6 col-lg-4">
                                                <div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
                                                      <div class="app-card-header p-3 border-bottom-0">
                                                            <div class="row align-items-center gx-3">
                                                                  <div class="col-auto">
                                                                        <div class="app-icon-holder">
                                                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                                                                                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                                                                              </svg>
                                                                        </div>

                                                                  </div>
                                                                  <div class="col-auto">
                                                                        <h4 class="app-card-title mt-4">Total Sales</h4>
                                                                        <p> $19,626,058.20 </p>
                                                                  </div>
                                                            </div>
                                                      </div>


                                                </div>
                                          </div>


                                          <div class="col-6 col-lg-4">
                                                <div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
                                                      <div class="app-card-header p-3 border-bottom-0">
                                                            <div class="row align-items-center gx-3">
                                                                  <div class="col-auto">
                                                                        <div class="app-icon-holder">
                                                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                                                                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                                              </svg>
                                                                        </div>

                                                                  </div>
                                                                  <div class="col-auto">
                                                                        <h4 class="app-card-title mt-4">Total Orders</h4>
                                                                        <p> 87790 </p>
                                                                  </div>
                                                            </div>
                                                      </div>


                                                </div>
                                          </div>

                                          <div class="col-6 col-lg-4">
                                                <div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
                                                      <div class="app-card-header p-3 border-bottom-0">
                                                            <div class="row align-items-center gx-3">
                                                                  <div class="col-auto">
                                                                        <div class="app-icon-holder">
                                                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
                                                                                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
                                                                              </svg>
                                                                        </div>

                                                                  </div>
                                                                  <div class="col-auto">
                                                                        <h4 class="app-card-title mt-4">Total Products</h4>
                                                                        <p> 5678 </p>
                                                                  </div>
                                                            </div>
                                                      </div>


                                                </div>
                                          </div>



                                    </div>

                                    <div className="row g-4 mb-4">
                                          <div className="col-12 col-lg-8">
                                                <div className="app-card app-card-chart h-100 shadow">
                                                      <div className="app-card-header p-3">
                                                            <div className="row justify-content-between align-items-center">
                                                                  <div className="col-auto">
                                                                        <h4 className="app-card-title">Sale statistics</h4>
                                                                  </div>


                                                            </div>

                                                      </div>

                                                      <div className="app-card-body p-3 p-lg-4">
                                                            <Barchart />
                                                      </div>

                                                </div>

                                          </div>

                                          <div className="col-12 col-lg-4">
                                                <div className="app-card app-card-chart h-100 shadow">
                                                      <div className="app-card-header p-3">
                                                            <div className="row justify-content-between align-items-center">
                                                                  <div className="col-auto">
                                                                        <h4 className="app-card-title">Marketing</h4>
                                                                  </div>



                                                            </div>

                                                      </div>

                                                      <div className="app-card-body p-3 p-lg-4">
                                                            <div class="item">
                                                                  <div class="row align-items-center">
                                                                        <div class="col">
                                                                              <div class="title mb-1 ">Facebook page</div>
                                                                              <div class="progress">
                                                                                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                                                              </div>
                                                                        </div>

                                                                  </div>

                                                            </div>
                                                            <div class="item mt-4">
                                                                  <div class="row align-items-center">
                                                                        <div class="col">
                                                                              <div class="title mb-1 ">Instagram page</div>
                                                                              <div class="progress">
                                                                                    <div class="progress-bar bg-success  progress-bar-striped" role="progressbar" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
                                                                              </div>
                                                                        </div>

                                                                  </div>

                                                            </div>
                                                            <div class="item mt-4">
                                                                  <div class="row align-items-center">
                                                                        <div class="col">
                                                                              <div class="title mb-1 "> Google search </div>
                                                                              <div class="progress">
                                                                                    <div class="progress-bar bg-danger  progress-bar-striped" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                                                                              </div>
                                                                        </div>

                                                                  </div>

                                                            </div>
                                                            <div class="item mt-4">
                                                                  <div class="row align-items-center">
                                                                        <div class="col">
                                                                              <div class="title mb-1 "> Other links </div>
                                                                              <div class="progress">
                                                                                    <div class="progress-bar bg-dark  progress-bar-striped" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                                                                              </div>
                                                                        </div>

                                                                  </div>

                                                            </div>
                                                            <div className="col-auto mt-5">
                                                                  <NavLink exact to="/product/create" type="submit" className="btn  app-btn-secondary ">Open analytics
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square mx-2" viewBox="0 0 16 16">
                                                                              <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" />
                                                                        </svg>
                                                                  </NavLink>
                                                            </div>
                                                      </div>


                                                </div>

                                          </div>


                                    </div>

                                    {/* order componenet */}

                                    <Order />

                              </div>

                        </div>



                  </div>

            </>
      );
}
export default Dashboard;