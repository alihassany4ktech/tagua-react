import React from "react";
import { NavLink } from "react-router-dom";
const Setting = () => {

      return (
            <>
                  <div className="app-wrapper" >
                        <br />
                        <br />
                        <div className="app-content pt-3 p-md-3 p-lg-4" style={{ backgroundColor: "#f8f9fa" }} >
                              <h1 className="mt-4 mb-4" style={{ fontSize: "30px" }}>Settings</h1>
                              <div className="container-xl shadow p-4" style={{ backgroundColor: "white" }}>
                                    <div className="row g-4 settings-section">
                                          <div className="col-12 col-md-3" style={{ borderRight: "1px solid #efeff1" }}>
                                                <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
                                                      <ul className="app-menu list-unstyled accordion" id="menu-accordion">
                                                            <li className="nav-item">
                                                                  <a href="#" className="nav-link active1">

                                                                        <span className="nav-link-text">Genral</span>
                                                                  </a>
                                                            </li>

                                                            <li className="nav-item">
                                                                  <a href="#" className="nav-link">

                                                                        <span className="nav-link-text">Moderators</span>
                                                                  </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                  <a href="#" className="nav-link">

                                                                        <span className="nav-link-text">Admin Account</span>
                                                                  </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                  <a href="#" className="nav-link">

                                                                        <span className="nav-link-text">SEO Setting</span>
                                                                  </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                  <a href="#" className="nav-link">

                                                                        <span className="nav-link-text">Mail Setting</span>
                                                                  </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                  <a href="#" className="nav-link">

                                                                        <span className="nav-link-text">Newsletter</span>
                                                                  </a>
                                                            </li>
                                                      </ul>

                                                </nav>
                                          </div>
                                          <div className="col-12 col-md-9">
                                                <div className="row ">
                                                      <div className="col-md-4 p-4">
                                                            <h3 className="section-title">Website name</h3>
                                                            <div className="section-intro">Supported languages of all pages <br /> including each product lorem ipsum <br /> dolor sit amet, consectetur adipisicing</div>
                                                      </div>
                                                      <div className="col-md-8">
                                                            <div className="p-4">

                                                                  <div className="app-card-body">
                                                                        <form className="settings-form">
                                                                              <div className="mb-3">
                                                                                    <label for="setting-input-1" className="form-label text-dark">Home page title
                                                                                    </label>
                                                                                    <input type="text" className="form-control " id="setting-input-1" required placeholder="Type here" />
                                                                              </div>
                                                                              <div className="mb-3">
                                                                                    <label for="setting-input-2" className="form-label text-dark">Description</label>
                                                                                    <textarea className="form-control" name="" style={{ height: "90px" }} id="" cols="30" rows="10" placeholder="Type here..."></textarea>
                                                                              </div>

                                                                              <button type="submit" className="btn app-btn-primary" >Save Changes</button>
                                                                        </form>
                                                                  </div>

                                                            </div>
                                                      </div>
                                                </div>
                                                <hr className="my-4" />
                                          </div>
                                    </div>

                                    <div className="row g-4 settings-section">
                                          <div className="col-12 col-md-3" style={{ borderRight: "1px solid #efeff1" }}>

                                          </div>
                                          <div className="col-12 col-md-9">
                                                <div className="row">
                                                      <div className="col-md-4 p-4">
                                                            <h3 className="section-title">Access</h3>
                                                            <div className="section-intro">Give access of all pages including each <br /> product lorem ipsum dolor sit amet, <br /> consectetur adipisicing</div>
                                                      </div>
                                                      <div className="col-md-8">
                                                            <div className="p-4">

                                                                  <div className="app-card-body">
                                                                        <form className="settings-form">
                                                                              <div className="form-check mb-3">
                                                                                    <input className="form-check-input rounded-pill" type="checkbox" value="" id="settings-checkbox-1" checked />
                                                                                    <label className="form-check-label text-dark" for="settings-checkbox-1">
                                                                                          All registration is enabled
                                                                                    </label>
                                                                              </div>
                                                                              <div className="form-check mb-3">
                                                                                    <input className="form-check-input rounded-pill" type="checkbox" value="" id="settings-checkbox-2" />
                                                                                    <label className="form-check-label text-dark" for="settings-checkbox-2">
                                                                                          Only buyers is enabled
                                                                                    </label>
                                                                              </div>
                                                                              <div className="form-check mb-3">
                                                                                    <input className="form-check-input rounded-pill" type="checkbox" value="" id="settings-checkbox-3" />
                                                                                    <label className="form-check-label text-dark" for="settings-checkbox-3">
                                                                                          Only buyers is enabled
                                                                                    </label>
                                                                              </div>
                                                                              <div className="form-check mb-3">
                                                                                    <input className="form-check-input rounded-pill" type="checkbox" value="" id="settings-checkbox-4" />
                                                                                    <label className="form-check-label text-dark" for="settings-checkbox-4">
                                                                                          Stop new shop registration
                                                                                    </label>
                                                                              </div>
                                                                              <div className="mt-3">
                                                                                    <button type="submit" className="btn app-btn-primary" >Save Changes</button>
                                                                              </div>

                                                                        </form>

                                                                  </div>

                                                            </div>
                                                            <hr className="my-4" />
                                                      </div>
                                                </div>

                                          </div>
                                    </div>

                                    <div className="row g-4 settings-section">
                                          <div className="col-12 col-md-3" style={{ borderRight: "1px solid #efeff1" }}>

                                          </div>
                                          <div className="col-12 col-md-9">
                                                <div className="row">
                                                      <div className="col-md-4 p-4">
                                                            <h3 className="section-title">Notification</h3>
                                                            <div className="section-intro">Lorem ipsum dolor sit amet, consectetur <br /> adipisicing something about this</div>
                                                      </div>
                                                      <div className="col-md-8">
                                                            <div className="p-4">
                                                                  <div className="app-card-body">
                                                                        <form className="settings-form">

                                                                              <div className="form-check mb-3">
                                                                                    <input className="form-check-input" type="checkbox" value="" id="settings-checkbox-5" checked />
                                                                                    <label className="form-check-label text-dark" for="settings-checkbox-5">
                                                                                          Send notification on each user registration
                                                                                    </label>
                                                                              </div>
                                                                              <div className="mb-3">
                                                                                    <input type="text" className="form-control" placeholder="Text" />
                                                                              </div>
                                                                              <div className="mt-3">
                                                                                    <button type="submit" className="btn app-btn-primary" >Save Changes</button>
                                                                              </div>
                                                                        </form>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                                <hr className="my-4" />
                                          </div>
                                    </div>

                                    <div className="row g-4 settings-section">
                                          <div className="col-12 col-md-3" style={{ borderRight: "1px solid #efeff1" }}>

                                          </div>
                                          <div className="col-12 col-md-9">
                                                <div className="row">
                                                      <div className="col-md-4 p-4">
                                                            <h3 className="section-title">Currency</h3>
                                                            <div className="section-intro">Lorem ipsum dolor sit amet, consectetur adipisicing <br /> something about this</div>
                                                      </div>
                                                      <div className="col-md-8">
                                                            <div className="p-4">
                                                                  <div className="app-card-body">
                                                                        <form className="settings-form">
                                                                              <div className="form-check form-switch mb-3">

                                                                                    <label className="form-check-label mb-1 text-dark" for="settings-switch-1">Main currency</label>
                                                                                    <select name="" className="form-select" id="" style={{ width: "200px" }}>
                                                                                          <option value="" checked>US Doller</option>
                                                                                          <option value="">EU Euro</option>
                                                                                          <option value="">RU Rubel</option>
                                                                                          <option value="">UZ Som</option>
                                                                                    </select>
                                                                              </div>
                                                                              <div className="form-check form-switch mb-3">

                                                                                    <label className="form-check-label mb-1 text-dark" for="settings-switch-1">Supported curencies</label>
                                                                                    <select name="" className="form-select" id="" style={{ width: "200px" }}>
                                                                                          <option value="" checked>US doller</option>
                                                                                          <option value="">RUBG russia</option>
                                                                                          <option value="">INR india</option>
                                                                                          <option value="">RS pakistan</option>
                                                                                    </select>
                                                                              </div>


                                                                              <div className="mt-3">
                                                                                    <button type="submit" className="btn app-btn-primary" >Save Changes</button>
                                                                              </div>
                                                                        </form>
                                                                  </div>
                                                            </div>

                                                      </div>

                                                </div>
                                                <hr className="my-4" />
                                          </div>
                                    </div>

                              </div>
                        </div>


                  </div>
            </>
      );
}

export default Setting;