import React from "react";
import { NavLink } from "react-router-dom";
import userimg from "../users/userimages/user-1.jpg";
import userimg1 from "../users/userimages/user-2.jpg";
import userimg3 from "../users/userimages/user-4.jpg";
import userimg4 from "../users/userimages/user-5.jpg";
import userimg5 from "../users/userimages/user-6.jpg";
import userimg6 from "../users/userimages/user-7.jpg";
import userimg7 from "../users/userimages/user-8.jpg";
import userimg8 from "../users/userimages/user-9.jpg";
import ReactPaginate from 'react-paginate';



const User = ({ match }) => { 
      return (
            <>
                  <div className="app-wrapper" >
                        <br />
                        <br />
                        <div className="app-content pt-3 p-md-3 p-lg-4" style={{ backgroundColor: "#f8f9fa" }}>
                              <div className="container-xl">

                                    <div className="row g-3 mb-4 align-items-center justify-content-between mt-3">
                                          <div className="col-auto">
                                                <h1 className="mb-0" style={{ fontSize: "30px" }}>Users List</h1>
                                          </div>
                                          <div className="col-auto">
                                                <div className="page-utilities">
                                                      <div className="row g-2 justify-content-start justify-content-md-end align-items-center">


                                                            <div className="col-auto">
                                                                  <NavLink exact to={`/dashboard/create-user`} type="button" className="btn  app-btn-secondary "> <i className="fa fa-plus"></i> &nbsp; Create new</NavLink>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>





                                    <div className="tab-content">
                                          <div className="tab-pane fade show active" id="orders-all" role="tabpanel" aria-labelledby="orders-all-tab">
                                                <div className="app-card app-card-orders-table shadow mb-5">
                                                      <div className="app-card-body">
                                                            <nav id="orders-table-tab" className="orders-table-tab app-nav-tabs nav  flex-column flex-sm-row mb-4 p-4 justify-content-between align-content-center">
                                                                  <div className="col-12 col-sm-4 col-md-4 mx-a d-flex flex-grow mt-1">
                                                                        <input type="text" className="form-control" placeholder="Search..." />

                                                                  </div>
                                                                  <div className='d-flex flex-row mt-1'>
                                                                        <div className="">

                                                                              <select className="form-select w-auto" >
                                                                                    <option selected value="option-1">Status</option>
                                                                                    <option value="option-2">Active</option>
                                                                                    <option value="option-3">Disabled</option>
                                                                                    <option value="option-4">Show all</option>

                                                                              </select>
                                                                        </div>
                                                                  </div>
                                                            </nav>
                                                            <hr style={{ marginTop: "-25px" }} />
                                                            <div class="table-responsive p-3">
                                                                  <table class="table app-table-hover mb-0 text-left">
                                                                        <thead>
                                                                              <tr style={{ borderBottom: "2px solid black" }}>
                                                                                    <th className="cell text-muted">#ID</th>
                                                                                    <th className="cell text-muted">User</th>
                                                                                    <th className="cell text-muted">Email</th>
                                                                                    <th className="cell text-muted">Status</th>
                                                                                    <th className="cell text-muted">Registered</th>
                                                                                    <th className="cell text-muted">Action</th>
                                                                              </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                              <tr>
                                                                                    <td className="cell">#45</td>
                                                                                    <td className="cell"><span className="truncate"> <img className="rounded-pill" src={userimg} style={{ height: "60px", width: "60px" }} alt="pic" /> &nbsp; <strong>Mary Monasa</strong></span></td>
                                                                                    <td className="cell">marvin@example.com</td>
                                                                                    <td className="cell"><button className="btn btn-sm  rounded-pill p-1" style={{ backgroundColor: "#ccf0d1", color: "green", fontSize: "12px", width: "75px" }}>Active</button></td>
                                                                                    <td className="cell">03.12.2020</td>
                                                                                    <td className="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>

                                                                                                <ul class="dropdown-menu">
                                                                                                      <li><NavLink class="dropdown-item" exact to={`/dashboard/user/profile`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                                                                                            <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                                      </svg>View</NavLink></li>
                                                                                                      <li><NavLink class="dropdown-item" exact to={`/dashboard/user/profile/edit`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                                      </svg>Edit</NavLink></li>

                                                                                                      <li><hr class="dropdown-divider" /></li>
                                                                                                      <li><NavLink exact to={``} class="dropdown-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                                                      </svg>Delete</NavLink></li>
                                                                                                </ul>
                                                                                          </div>
                                                                                    </td>
                                                                              </tr>
                                                                              <tr>
                                                                                    <td className="cell">#56</td>
                                                                                    <td className="cell"><span className="truncate"> <img className="rounded-pill" src={userimg1} style={{ height: "60px", width: "60px" }} alt="pic" /> &nbsp; <strong>Eleanor Pena</strong></span></td>
                                                                                    <td className="cell">marvin@example.com</td>
                                                                                    <td className="cell"><button className="btn btn-sm text-danger  rounded-pill p-1" style={{ backgroundColor: "#fdcccc", fontSize: "12px", width: "75px" }}>inactive</button></td>
                                                                                    <td className="cell">03.12.2020</td>
                                                                                    <td className="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>

                                                                                                <ul class="dropdown-menu">
                                                                                                      <li><NavLink class="dropdown-item" exact to={`/dashboard/user/profile`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                                                                                            <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                                      </svg>View</NavLink></li>
                                                                                                      <li><NavLink class="dropdown-item" exact to={`/dashboard/user/profile/edit`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                                      </svg>Edit</NavLink></li>

                                                                                                      <li><hr class="dropdown-divider" /></li>
                                                                                                      <li><NavLink exact to={``} class="dropdown-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                                                      </svg>Delete</NavLink></li>
                                                                                                </ul>
                                                                                          </div>
                                                                                    </td>
                                                                              </tr>
                                                                              <tr>
                                                                                    <td className="cell">#45</td>
                                                                                    <td className="cell"><span className="truncate"> <img className="rounded-pill" src={userimg3} style={{ height: "60px", width: "60px" }} alt="pic" /> &nbsp; <strong>Mary Monasa</strong></span></td>
                                                                                    <td className="cell">marvin@example.com</td>
                                                                                    <td className="cell"><button className="btn btn-sm text-danger  rounded-pill p-1" style={{ backgroundColor: "#fdcccc", fontSize: "12px", width: "75px" }}>inactive</button></td>
                                                                                    <td className="cell">03.12.2020</td>
                                                                                    <td className="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>

                                                                                                <ul class="dropdown-menu">
                                                                                                      <li><NavLink class="dropdown-item" exact to={`/dashboard/user/profile`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                                                                                            <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                                      </svg>View</NavLink></li>
                                                                                                      <li><NavLink class="dropdown-item" exact to={`/dashboard/user/profile/edit`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                                      </svg>Edit</NavLink></li>

                                                                                                      <li><hr class="dropdown-divider" /></li>
                                                                                                      <li><NavLink exact to={``} class="dropdown-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                                                      </svg>Delete</NavLink></li>
                                                                                                </ul>
                                                                                          </div>
                                                                                    </td>
                                                                              </tr>
                                                                              <tr>
                                                                                    <td className="cell">#77</td>
                                                                                    <td className="cell"><span className="truncate"> <img className="rounded-pill" src={userimg4} style={{ height: "60px", width: "60px" }} alt="pic" /> &nbsp; <strong>Mary Monasa</strong></span></td>
                                                                                    <td className="cell">marvin@example.com</td>
                                                                                    <td className="cell"><button className="btn btn-sm  rounded-pill p-1" style={{ backgroundColor: "#ccf0d1", color: "green", fontSize: "12px", width: "75px" }}>Active</button></td>
                                                                                    <td className="cell">03.12.2020</td>
                                                                                    <td class="cell">
                                                                                          <div className="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>

                                                                                                <ul class="dropdown-menu">
                                                                                                      <li><NavLink class="dropdown-item" exact to={`/dashboard/user/profile`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                                                                                            <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                                      </svg>View</NavLink></li>
                                                                                                      <li><NavLink class="dropdown-item" exact to={`/dashboard/user/profile/edit`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                                      </svg>Edit</NavLink></li>

                                                                                                      <li><hr class="dropdown-divider" /></li>
                                                                                                      <li><NavLink exact to={``} class="dropdown-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                                                      </svg>Delete</NavLink></li>
                                                                                                </ul>
                                                                                          </div>
                                                                                    </td>
                                                                              </tr>
                                                                              <tr>
                                                                                    <td className="cell">#45</td>
                                                                                    <td className="cell"><span className="truncate"> <img className="rounded-pill" src={userimg5} style={{ height: "60px", width: "60px" }} alt="pic" /> &nbsp; <strong>Mary Monasa</strong></span></td>
                                                                                    <td className="cell">marvin@example.com</td>
                                                                                    <td className="cell"><button className="btn btn-sm  rounded-pill p-1" style={{ backgroundColor: "#ccf0d1", color: "green", fontSize: "12px", width: "75px" }}>Active</button></td>
                                                                                    <td className="cell">03.12.2020</td>
                                                                                    <td className="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>

                                                                                                <ul class="dropdown-menu">
                                                                                                      <li><NavLink class="dropdown-item" exact to={`/dashboard/user/profile`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                                                                                            <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                                      </svg>View</NavLink></li>
                                                                                                      <li><NavLink class="dropdown-item" exact to={`/dashboard/user/profile/edit`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                                      </svg>Edit</NavLink></li>

                                                                                                      <li><hr class="dropdown-divider" /></li>
                                                                                                      <li><NavLink exact to={``} class="dropdown-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                                                      </svg>Delete</NavLink></li>
                                                                                                </ul>
                                                                                          </div>
                                                                                    </td>
                                                                              </tr>
                                                                              <tr>
                                                                                    <td className="cell">#45</td>
                                                                                    <td className="cell"><span className="truncate"> <img className="rounded-pill" src={userimg6} style={{ height: "60px", width: "60px" }} alt="pic" /> &nbsp; <strong>Mary Monasa</strong></span></td>
                                                                                    <td className="cell">marvin@example.com</td>
                                                                                    <td className="cell"><button className="btn btn-sm  rounded-pill p-1" style={{ backgroundColor: "#ccf0d1", color: "green", fontSize: "12px", width: "75px" }}>Active</button></td>
                                                                                    <td className="cell">03.12.2020</td>
                                                                                    <td className="cell">
                                                                                          <div className="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>

                                                                                                <ul class="dropdown-menu">
                                                                                                      <li><NavLink class="dropdown-item" exact to={`/dashboard/user/profile`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                                                                                            <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                                      </svg>View</NavLink></li>
                                                                                                      <li><NavLink class="dropdown-item" exact to={`/dashboard/user/profile/edit`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                                      </svg>Edit</NavLink></li>

                                                                                                      <li><hr class="dropdown-divider" /></li>
                                                                                                      <li><NavLink exact to={``} class="dropdown-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                                                      </svg>Delete</NavLink></li>
                                                                                                </ul>
                                                                                          </div>
                                                                                    </td>
                                                                              </tr>
                                                                              <tr>
                                                                                    <td className="cell">#45</td>
                                                                                    <td className="cell"><span className="truncate"> <img className="rounded-pill" src={userimg7} style={{ height: "60px", width: "60px" }} alt="pic" /> &nbsp; <strong>Mary Monasa</strong></span></td>
                                                                                    <td className="cell">marvin@example.com</td>
                                                                                    <td className="cell"><button className="btn btn-sm text-danger  rounded-pill p-1" style={{ backgroundColor: "#fdcccc", fontSize: "12px", width: "75px" }}>inactive</button></td>
                                                                                    <td className="cell">03.12.2020</td>
                                                                                    <td className="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>

                                                                                                <ul class="dropdown-menu">
                                                                                                      <li><NavLink class="dropdown-item" exact to={`/dashboard/user/profile`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                                                                                            <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                                      </svg>View</NavLink></li>
                                                                                                      <li><NavLink class="dropdown-item" exact to={`/dashboard/user/profile/edit`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                                      </svg>Edit</NavLink></li>

                                                                                                      <li><hr class="dropdown-divider" /></li>
                                                                                                      <li><NavLink exact to={``} class="dropdown-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                                                      </svg>Delete</NavLink></li>
                                                                                                </ul>
                                                                                          </div>
                                                                                    </td>
                                                                              </tr>
                                                                              <tr>
                                                                                    <td className="cell">#45</td>
                                                                                    <td className="cell"><span className="truncate"> <img className="rounded-pill" src={userimg8} style={{ height: "60px", width: "60px" }} alt="pic" /> &nbsp; <strong>Mary Monasa</strong></span></td>
                                                                                    <td className="cell">marvin@example.com</td>
                                                                                    <td className="cell"><button className="btn btn-sm  rounded-pill p-1" style={{ backgroundColor: "#ccf0d1", color: "green", fontSize: "12px", width: "75px" }}>Active</button></td>
                                                                                    <td className="cell">03.12.2020</td>
                                                                                    <td className="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>

                                                                                                <ul class="dropdown-menu">
                                                                                                      <li><NavLink class="dropdown-item" exact to={`/dashboard/user/profile`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                                                                                            <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                                      </svg>View</NavLink></li>
                                                                                                      <li><NavLink class="dropdown-item" exact to={`/dashboard/user/profile/edit`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                                      </svg>Edit</NavLink></li>

                                                                                                      <li><hr class="dropdown-divider" /></li>
                                                                                                      <li><NavLink exact to={``} class="dropdown-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                                                      </svg>Delete</NavLink></li>
                                                                                                </ul>
                                                                                          </div>
                                                                                    </td>
                                                                              </tr>


                                                                        </tbody>
                                                                  </table>
                                                            </div>

                                                      </div>
                                                </div>
                                                <div className="overflow-auto">
                                                      <ReactPaginate
                                                            previousLabel={"Prev"}
                                                            nextLabel={"Next"}
                                                            // pageCount={pageCount}
                                                            // onPageChange={changePage}
                                                            containerClassName={"paginationBttnsLight1"}
                                                            previousLinkClassName={"previousBttnLight1"}
                                                            nextLinkClassName={"nextBttnLight1"}
                                                            disabledClassName={"paginationDisabledLight1"}
                                                            activeClassName={"paginationActiveLight1"}
                                                      />

                                                </div>

                                          </div>
                                    </div>

                              </div>
                        </div>

                  </div>
            </>
      );
}

export default User;