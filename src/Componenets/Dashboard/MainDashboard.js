import React from "react";
import Dashboard from "./Dashbord";
import "./maindashboard.css";
import user from "../../user.png";
import { BrowserRouter, NavLink, Switch, Route, } from "react-router-dom";
import User from "./users/User";
import Calender from "./calender/Calender";
import ProductList from "./poducts/ProductList";
import OrderList from "./orderlist/OrderList";
import CreateProduct from "./poducts/CreateProdct";
import EditProduct from "./poducts/EditProduct";
import Category from "./category/Category";
import OrderDetail from "./orderlist/OrderDetail";
import CreateOrder from "./orderlist/CreateOrder";
import CreateUser from "./users/CreateUser";
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
                                                            <i className="search-mobile-trigger-icon fa fa-search"></i>
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
                                                            <NavLink exact to="/users" className="nav-link" activeClassName="active">
                                                                  <span className="nav-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                                                                              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                                                                        </svg>
                                                                  </span>
                                                                  <span className="nav-link-text">Users</span>
                                                            </NavLink>
                                                      </li>
                                                      <li class="nav-item has-submenu">

                                                            <a class="nav-link submenu-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#submenu-1" aria-expanded="false" aria-controls="submenu-1">
                                                                  <span class="nav-icon">

                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                                                              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                                                        </svg>
                                                                  </span>
                                                                  <span class="nav-link-text">Products</span>
                                                                  <span class="submenu-arrow">
                                                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                                        </svg>
                                                                  </span>
                                                            </a>
                                                            <div id="submenu-1" class="collapse submenu submenu-1" data-bs-parent="#menu-accordion">
                                                                  <ul class="submenu-list list-unstyled">
                                                                        <li class="submenu-item"><NavLink exact to="/product/list" className="submenu-link" activeClassName="submenu-link active"  >Product list</NavLink></li>
                                                                        <li class="submenu-item"><NavLink exact to="/product/create" className="submenu-link" ctiveClassName="submenu-link active" >Add Product</NavLink></li>
                                                                        {/* <li class="submenu-item"><a class="submenu-link" href="settings.html">Settings</a></li> */}
                                                                  </ul>
                                                            </div>
                                                      </li>

                                                      <li className="nav-item has-submenu">

                                                            <a className="nav-link submenu-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#submenu-2" aria-expanded="false" aria-controls="submenu-2">
                                                                  <span className="nav-icon">

                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                                                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                                        </svg>
                                                                  </span>
                                                                  <span className="nav-link-text">Orders</span>
                                                                  <span className="submenu-arrow">
                                                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                                        </svg>
                                                                  </span>
                                                            </a>
                                                            <div id="submenu-2" className="collapse submenu submenu-2" data-bs-parent="#menu-accordion">
                                                                  <ul className="submenu-list list-unstyled">
                                                                        <li className="submenu-item"><NavLink exact to="/order/list" activeClassName="submenu-link active" className="submenu-link" href="login.html">Oerder list</NavLink></li>
                                                                        {/* <li className="submenu-item"><a className="submenu-link" href="signup.html">Signup</a></li>
                                                                        <li className="submenu-item"><a className="submenu-link" href="reset-password.html">Reset password</a></li>
                                                                        <li className="submenu-item"><a className="submenu-link" href="404.html">404 page</a></li> */}
                                                                  </ul>
                                                            </div>
                                                      </li>



                                                      <li className="nav-item">


                                                            <NavLink exact to="/category" className="nav-link" activeClassName="active">
                                                                  <span className="nav-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-plus" viewBox="0 0 16 16">
                                                                              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                                                              <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
                                                                        </svg>
                                                                  </span>
                                                                  <span className="nav-link-text">Categories</span>
                                                            </NavLink>

                                                      </li>



                                                      <li className="nav-item">
                                                            <NavLink exact to="/blogs" className="nav-link" activeClassName="active">
                                                                  <span className="nav-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tablet" viewBox="0 0 16 16">
                                                                              <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1 -1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                                                                              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                                                        </svg>
                                                                  </span>
                                                                  <span className="nav-link-text">Blog</span>
                                                            </NavLink>
                                                      </li>


                                                      <li className="nav-item">
                                                            <NavLink exact to="/tags" className="nav-link" activeClassName="active">
                                                                  <span className="nav-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
                                                                              <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" />
                                                                              <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z" />
                                                                        </svg>
                                                                  </span>
                                                                  <span className="nav-link-text">Tags</span>
                                                            </NavLink>
                                                      </li>

                                                      <li className="nav-item">
                                                            <NavLink exact to="/statistic" className="nav-link" activeClassName="active">
                                                                  <span className="nav-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                                                              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246  0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                                                              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.41 5-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                                                        </svg>
                                                                  </span>
                                                                  <span className="nav-link-text">Setting</span>
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
                              <Route exact path="/product/list" component={ProductList} />
                              <Route exact path="/product/create" component={CreateProduct} />
                              <Route exact path="/product/edit" component={EditProduct} />
                              <Route exact path="/order/list" component={OrderList} />
                              <Route exact path="/order/details" component={OrderDetail} />
                              <Route exact path="/order/create" component={CreateOrder} />
                              <Route exact path="/category" component={Category} />
                              <Route exact path="/users" component={User} />
                              <Route exact path="/user/create" component={CreateUser} />
                              <Route exact path="/calender" component={Calender} />
                        </Switch>

                  </BrowserRouter>

            </>
      );

}

export default MainDahsboard;