import React from "react";
import Dashboard from "./Dashbord";
import "./maindashboard.css";
import user from "../../user.png";
import { BrowserRouter, NavLink, Switch, Route, } from "react-router-dom";
import Nearby from "./nearby/Nearby";
import Application from "./application/Application";
import Message from "./message/Message";
import Statistic from "./statistic/Statistic";
import Calender from "./calender/Calender";
const MainDahsboard = () => {
      return (
            <>
                  <BrowserRouter>
                        <header className="app-header fixed-top">

                              <div className="app-header-inner">
                                    <div className="container-fluid py-2">
                                          <div className="app-header-content">
                                                <div className="row justify-content-between align-items-center">

                                                      <div className="col-auto">
                                                            <a id="sidepanel-toggler" style={{ color: "#E8C21E" }} className="sidepanel-toggler d-inline-block d-xl-none">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img"><title>Menu</title><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path></svg>
                                                            </a>
                                                      </div>
                                                      <div className="search-mobile-trigger d-sm-none col">
                                                            <i className="search-mobile-trigger-icon fas fa-search"></i>
                                                      </div>
                                                      <div className="app-search-box col">
                                                            <form className="app-search-form">
                                                                  <input type="text" placeholder="Search..." name="search" className="form-control search-input" />
                                                                  <button type="submit" className="btn search-btn btn-primary" value="Search"><i className="bt bi-search"></i></button>
                                                            </form>
                                                      </div>

                                                      <div className="app-utilities col-auto">
                                                            <div className="app-utility-item app-notifications-dropdown dropdown">
                                                                  <a className="dropdown-toggle no-toggle-arrow" id="notifications-dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" title="Notifications">

                                                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bell icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
                                                                              <path fill-rule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                                                        </svg>
                                                                        <span className="icon-badge">3</span>
                                                                  </a>

                                                                  <div className="dropdown-menu p-0 " aria-labelledby="notifications-dropdown-toggle">
                                                                        <div className="dropdown-menu-header p-3">
                                                                              <h5 className="dropdown-menu-title mb-0">Notifications</h5>
                                                                        </div>
                                                                        <div className="dropdown-menu-content">
                                                                              <div className="item p-3">
                                                                                    <div className="row gx-2 justify-content-between align-items-center">
                                                                                          <div className="col-auto">
                                                                                                <img className="profile-image" src="assets/images/profiles/profile-1.png" alt="" />
                                                                                          </div>
                                                                                          <div className="col">
                                                                                                <div className="info">
                                                                                                      <div className="desc">Amy shared a file with you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                                                                                                      <div className="meta"> 2 hrs ago</div>
                                                                                                </div>
                                                                                          </div>
                                                                                    </div>
                                                                                    <a className="link-mask" href="notifications.html"></a>
                                                                              </div>
                                                                              <div className="item p-3">
                                                                                    <div className="row gx-2 justify-content-between align-items-center">
                                                                                          <div className="col-auto">
                                                                                                <div className="app-icon-holder">
                                                                                                      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-receipt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                                                                                            <path fill-rule="evenodd" d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                                                                                                      </svg>
                                                                                                </div>
                                                                                          </div>
                                                                                          <div className="col">
                                                                                                <div className="info">
                                                                                                      <div className="desc">You have a new invoice. Proin venenatis interdum est.</div>
                                                                                                      <div className="meta"> 1 day ago</div>
                                                                                                </div>
                                                                                          </div>
                                                                                    </div>
                                                                                    <a className="link-mask" href="notifications.html"></a>
                                                                              </div>
                                                                              <div className="item p-3">
                                                                                    <div className="row gx-2 justify-content-between align-items-center">
                                                                                          <div className="col-auto">
                                                                                                <div className="app-icon-holder icon-holder-mono">
                                                                                                      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bar-chart-line" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
                                                                                                      </svg>
                                                                                                </div>
                                                                                          </div>
                                                                                          <div className="col">
                                                                                                <div className="info">
                                                                                                      <div className="desc">Your report is ready. Proin venenatis interdum est.</div>
                                                                                                      <div className="meta"> 3 days ago</div>
                                                                                                </div>
                                                                                          </div>
                                                                                    </div>
                                                                                    <a className="link-mask" href="notifications.html"></a>
                                                                              </div>
                                                                              <div className="item p-3">
                                                                                    <div className="row gx-2 justify-content-between align-items-center">
                                                                                          <div className="col-auto">
                                                                                                <img className="profile-image" src="assets/images/profiles/profile-2.png" alt="" />
                                                                                          </div>
                                                                                          <div className="col">
                                                                                                <div className="info">
                                                                                                      <div className="desc">James sent you a new message.</div>
                                                                                                      <div className="meta"> 7 days ago</div>
                                                                                                </div>
                                                                                          </div>
                                                                                    </div>
                                                                                    <a className="link-mask" href="notifications.html"></a>
                                                                              </div>
                                                                        </div>

                                                                        <div className="dropdown-menu-footer p-2 text-center">
                                                                              <a href="notifications.html">View all</a>
                                                                        </div>

                                                                  </div>
                                                            </div>
                                                            {/* <div className="app-utility-item">
                                                                  <a href="settings.html" title="Settings">

                                                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-gear icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                              <path fill-rule="evenodd" d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z" />
                                                                              <path fill-rule="evenodd" d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z" />
                                                                        </svg>
                                                                  </a>
                                                            </div> */}

                                                            <div className="app-utility-item app-user-dropdown dropdown">
                                                                  <a className="dropdown-toggle" id="user-dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><img className="rounded-pill" src={user} alt="user profile" /></a>
                                                                  <ul className="dropdown-menu" aria-labelledby="user-dropdown-toggle">
                                                                        <li><a className="dropdown-item" href="account.html">Account</a></li>
                                                                        {/* <li><a className="dropdown-item" href="settings.html">Settings</a></li> */}
                                                                        <li><hr className="dropdown-divider" /></li>
                                                                        <li><a className="dropdown-item" href="login.html">Log Out</a></li>
                                                                  </ul>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <div id="app-sidepanel" className="app-sidepanel">
                                    <div id="sidepanel-drop" className="sidepanel-drop"></div>
                                    <div className="sidepanel-inner d-flex flex-column">
                                          <a href="#" id="sidepanel-close" className="sidepanel-close d-xl-none">&times;</a>
                                          <div className="app-branding text-center">
                                                <a className="app-logo" href="index.html"><img className="logo-icon" src="assets/images/app-logo.png" alt="logo" /></a>

                                          </div>

                                          <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">

                                                <div className="p-4 hoverable"  >
                                                      <div className="d-flex flex-row align-items-center">
                                                            <img class="icon-img rounded-pill" src={user} height="50" width="50" alt="image" />

                                                            <div className="px-3 d-flex flex-column">
                                                                  <span className="nav-link-text text-dark">Airbnb</span>
                                                                  <small className="text-muted">Super admin</small>
                                                            </div>

                                                      </div>
                                                </div>
                                                <ul className="app-menu list-unstyled accordion" id="menu-accordion">
                                                      <li className="nav-item">
                                                            <NavLink exact to="/dashboard" className="nav-link" activeClassName="active">
                                                                  <span className="nav-icon">
                                                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                              <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z" />
                                                                              <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                                                        </svg>
                                                                  </span>
                                                                  <span className="nav-link-text">Dashboard</span>
                                                            </NavLink>
                                                      </li>

                                                      <li className="nav-item">


                                                            <NavLink exact to="/nearby" className="nav-link" activeClassName="active">
                                                                  <span className="nav-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                                        </svg>
                                                                  </span>
                                                                  <span className="nav-link-text">Near by</span>
                                                            </NavLink>

                                                      </li>

                                                      <li className="nav-item">


                                                            <NavLink exact to="/application" className="nav-link" activeClassName="active">
                                                                  <span className="nav-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-puzzle" viewBox="0 0 16 16">
                                                                              <path d="M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7a.5.5 0 0 1 .5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 0 0-.115.118.113.113 0 0 0-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 0 0 .27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 0 0 .271-.194.213.213 0 0 0 .039-.063v-.009a.112.112 0 0 0-.012-.025.459.459 0 0 0-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 0 1 9 2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9a.5.5 0 0 1-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 0 0 .115-.118.113.113 0 0 0 .012-.025L9.5 11.5v-.003a.214.214 0 0 0-.039-.064.859.859 0 0 0-.27-.193C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 0 0-.271.194.214.214 0 0 0-.039.063v.003l.001.006a.113.113 0 0 0 .012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 0 1-.5.5H4.605a1.5 1.5 0 0 1-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855zM4.605 3a.5.5 0 0 0-.498.55l.001.007.29 3.4A.5.5 0 0 1 3.9 7.5h-.782c-.696 0-1.182-.497-1.469-.872a.459.459 0 0 0-.118-.115.112.112 0 0 0-.025-.012L1.5 6.5h-.003a.213.213 0 0 0-.064.039.86.86 0 0 0-.193.27C1.1 7.09 1 7.51 1 8c0 .491.1.912.24 1.19.07.14.14.225.194.271a.213.213 0 0 0 .063.039H1.5l.006-.001a.112.112 0 0 0 .025-.012.459.459 0 0 0 .118-.115c.287-.375.773-.872 1.469-.872H3.9a.5.5 0 0 1 .498.542l-.29 3.408a.5.5 0 0 0 .497.55h1.878c-.048-.166-.195-.352-.463-.557-.274-.21-.52-.528-.52-.943 0-.568.447-.947.862-1.154C6.807 10.123 7.387 10 8 10s1.193.123 1.638.346c.415.207.862.586.862 1.154 0 .415-.246.733-.52.943-.268.205-.415.39-.463.557h1.878a.5.5 0 0 0 .498-.55l-.001-.007-.29-3.4A.5.5 0 0 1 12.1 8.5h.782c.696 0 1.182.497 1.469.872.05.065.091.099.118.115.013.008.021.01.025.012a.02.02 0 0 0 .006.001h.003a.214.214 0 0 0 .064-.039.86.86 0 0 0 .193-.27c.14-.28.24-.7.24-1.191 0-.492-.1-.912-.24-1.19a.86.86 0 0 0-.194-.271.215.215 0 0 0-.063-.039H14.5l-.006.001a.113.113 0 0 0-.025.012.459.459 0 0 0-.118.115c-.287.375-.773.872-1.469.872H12.1a.5.5 0 0 1-.498-.543l.29-3.407a.5.5 0 0 0-.497-.55H9.517c.048.166.195.352.463.557.274.21.52.528.52.943 0 .568-.447.947-.862 1.154C9.193 5.877 8.613 6 8 6s-1.193-.123-1.638-.346C5.947 5.447 5.5 5.068 5.5 4.5c0-.415.246-.733.52-.943.268-.205.415-.39.463-.557H4.605z" />
                                                                        </svg>
                                                                  </span>
                                                                  <span className="nav-link-text">Application</span>
                                                            </NavLink>

                                                      </li>

                                                      <li className="nav-item">


                                                            <NavLink exact to="/message" className="nav-link" activeClassName="active">
                                                                  <span className="nav-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                                                                              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                                                              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                                                                        </svg>
                                                                  </span>
                                                                  <span className="nav-link-text">Message</span>
                                                            </NavLink>

                                                      </li>

                                                      <li className="nav-item">


                                                            <NavLink exact to="/statistic" className="nav-link" activeClassName="active">
                                                                  <span className="nav-icon">
                                                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bar-chart-line" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                              <path fill-rule="evenodd" d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
                                                                        </svg>
                                                                  </span>
                                                                  <span className="nav-link-text">Statistics</span>
                                                            </NavLink>

                                                      </li>


                                                      <li className="nav-item">


                                                            <NavLink exact to="/calender" className="nav-link" activeClassName="active">
                                                                  <span className="nav-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                                                              <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                                                              <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                                                        </svg>
                                                                  </span>
                                                                  <span className="nav-link-text">Calendar</span>
                                                            </NavLink>

                                                      </li>

                                                </ul>

                                          </nav>

                                          <div className="app-sidepanel-footer">
                                                <nav className="app-nav app-nav-footer">
                                                      <ul className="app-menu footer-menu list-unstyled">

                                                            <li className="nav-item">


                                                                  <a type="button" className="nav-link">
                                                                        <span className="nav-icon">
                                                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                                                                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                                                                                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                                                              </svg>
                                                                        </span>
                                                                        <span className="nav-link-text">Signout</span>
                                                                  </a>

                                                            </li>

                                                      </ul>

                                                </nav>
                                          </div>


                                    </div>

                              </div>

                        </header>


                        <Switch>
                              <Route exact path="/dashboard" component={Dashboard} />
                              <Route exact path="/nearby" component={Nearby} />
                              <Route exact path="/application" component={Application} />
                              <Route exact path="/message" component={Message} />
                              <Route exact path="/statistic" component={Statistic} />
                              <Route exact path="/calender" component={Calender} />
                        </Switch>

                  </BrowserRouter>

            </>
      );

}

export default MainDahsboard;