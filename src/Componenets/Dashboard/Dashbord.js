import React from "react"
import Barchart from "./Barchart";
import Linechart from "./Linechart";
import Order from "./Order";


const Dashboard = () => {

      return (
            <>
                  <div className="app-wrapper"  >
                        {/* style={{ backgroundColor: "#f5f6fe" }} */}
                        <div className="app-content pt-3 p-md-3 p-lg-4" style={{ backgroundColor: "#f5f6fe" }}>
                              <div className="container-xl">

                                    <h1 className="app-page-title mt-5">Overview</h1>
                                    <div className="row g-4 mb-4">
                                          <div className="col-6 col-lg-3">
                                                <div className="app-card app-card-stat shadow-sm h-100">
                                                      <div className="app-card-body p-3 p-lg-4">
                                                            <h4 className="stats-type mb-1">Total Sales</h4>
                                                            <div className="stats-figure">$12,628</div>
                                                            <div className="stats-meta text-success">
                                                                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                                                                  </svg> 20%</div>
                                                      </div>

                                                      <a className="app-card-link-mask" href="#"></a>
                                                </div>

                                          </div>


                                          <div className="col-6 col-lg-3">
                                                <div className="app-card app-card-stat shadow-sm h-100">
                                                      <div className="app-card-body p-3 p-lg-4">
                                                            <h4 className="stats-type mb-1">Expenses</h4>
                                                            <div className="stats-figure">$2,250</div>
                                                            <div className="stats-meta text-success">
                                                                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                                                                  </svg> 5% </div>
                                                      </div>

                                                      <a className="app-card-link-mask" href="#"></a>
                                                </div>

                                          </div>

                                          <div className="col-6 col-lg-3">
                                                <div className="app-card app-card-stat shadow-sm h-100">
                                                      <div className="app-card-body p-3 p-lg-4">
                                                            <h4 className="stats-type mb-1">Projects</h4>
                                                            <div className="stats-figure">23</div>
                                                            <div className="stats-meta">
                                                                  Open</div>
                                                      </div>

                                                      <a className="app-card-link-mask" href="#"></a>
                                                </div>

                                          </div>

                                          <div className="col-6 col-lg-3">
                                                <div className="app-card app-card-stat shadow-sm h-100">
                                                      <div className="app-card-body p-3 p-lg-4">
                                                            <h4 className="stats-type mb-1">Invoices</h4>
                                                            <div className="stats-figure">6</div>
                                                            <div className="stats-meta">New</div>
                                                      </div>

                                                      <a className="app-card-link-mask" href="#"></a>
                                                </div>

                                          </div>

                                    </div>

                                    <div className="row g-4 mb-4">
                                          <div className="col-12 col-lg-6">
                                                <div className="app-card app-card-chart h-100 shadow-sm">
                                                      <div className="app-card-header p-3">
                                                            <div className="row justify-content-between align-items-center">
                                                                  <div className="col-auto">
                                                                        <h4 className="app-card-title">Chart 1</h4>
                                                                  </div>


                                                            </div>

                                                      </div>

                                                      <div className="app-card-body p-3 p-lg-4">
                                                            <Barchart />
                                                      </div>

                                                </div>

                                          </div>

                                          <div className="col-12 col-lg-6">
                                                <div className="app-card app-card-chart h-100 shadow-sm">
                                                      <div className="app-card-header p-3">
                                                            <div className="row justify-content-between align-items-center">
                                                                  <div className="col-auto">
                                                                        <h4 className="app-card-title">Chart 2 </h4>
                                                                  </div>



                                                            </div>

                                                      </div>

                                                      <div className="app-card-body p-3 p-lg-4">
                                                            <Linechart />
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