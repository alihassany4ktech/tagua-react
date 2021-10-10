import React from "react";
import { NavLink } from "react-router-dom";
import ReactPaginate from 'react-paginate';

const OrderList = ({ match }) => { 
      return (
            <>
                  <div className="app-wrapper" >
                        <br />
                        <br />
                        <div className="app-content pt-3 p-md-3 p-lg-4" style={{ backgroundColor: "#f8f9fa" }}>
                              <div className="container-xl">

                                    <div className="row g-3 mt-3 mb-4 align-items-center justify-content-between">
                                          <div className="col-auto">
                                                <h1 className="mb-0" style={{ fontSize: "30px" }}>Orders</h1>
                                          </div>
                                          <div className="col-auto">
                                                <div className="page-utilities">
                                                      <div className="row g-2 justify-content-start justify-content-md-end align-items-center">


                                                            <div className="col-auto">
                                                                  <NavLink  to={`/dashboard/create-order`} type="button" className="btn  app-btn-secondary "> <i className="fa fa-plus"></i> Create Order</NavLink>
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
                                                                              <tr>
                                                                                    <th class="cell">#ID</th>
                                                                                    <th class="cell">Name</th>
                                                                                    <th class="cell">Email</th>
                                                                                    <th class="cell">Total</th>
                                                                                    <th class="cell">Status</th>
                                                                                    <th class="cell">Date</th>
                                                                                    <th class="cell">Action</th>
                                                                              </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                              <tr>
                                                                                    <td class="cell">#15346</td>
                                                                                    <td class="cell"><span class="truncate"> <strong>Lorem ipsum dolor sit amet eget volutpat erat</strong> </span></td>
                                                                                    <td class="cell">marvin@example.com</td>
                                                                                    <td class="cell"><span>$259.35</span></td>
                                                                                    <td className="cell"><button className="btn btn-sm  rounded-pill p-1" style={{ backgroundColor: "#ccf0d1", color: "green", fontSize: "12px", width: "75px" }}>Active</button></td>                                                                                    <td class="cell">03.12.2020</td>
                                                                                    <td class="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>

                                                                                                <ul class="dropdown-menu">
                                                                                                      <li><NavLink class="dropdown-item" to={`/dashboard/order/details`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                                                                                            <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                                      </svg>View</NavLink></li>
                                                                                                      <li><NavLink to={`/dashboard/order/edit`} class="dropdown-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                                                                                    <td class="cell">#15345</td>
                                                                                    <td class="cell"><span class="truncate"><strong>Consectetur adipiscing elit</strong> </span></td>
                                                                                    <td class="cell">leslie@example.com</td>
                                                                                    <td class="cell"><span class="cell-data">$96.20</span></td>

                                                                                    <td className="cell"><button className="btn btn-sm text-warning  rounded-pill p-1" style={{ backgroundColor: "rgba(255, 206, 86, 0.1)", fontSize: "12px", width: "75px" }}>Pending</button></td>

                                                                                    <td class="cell">21.02.2020</td>
                                                                                    <td class="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>
                                                                                                <ul class="dropdown-menu">
                                                                                                      <li><NavLink class="dropdown-item" to={`/dashboard/order/details`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                                                                                            <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                                      </svg>View</NavLink></li>
                                                                                                      <li><NavLink to={`/dashboard/order/edit`} class="dropdown-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                                                                                    <td class="cell">#15344</td>
                                                                                    <td class="cell"><span class="truncate"> <strong>Pellentesque diam imperdiet</strong> </span></td>
                                                                                    <td class="cell"> esther@example.com</td>
                                                                                    <td class="cell"><span class="cell-data">$123.00</span></td>
                                                                                    <td className="cell"><button className="btn btn-sm  rounded-pill p-1" style={{ backgroundColor: "#ccf0d1", color: "green", fontSize: "12px", width: "75px" }}>Active</button></td>                                                                                    <td class="cell">03.07.2020</td>
                                                                                    <td class="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>
                                                                                                <ul class="dropdown-menu">
                                                                                                      <li><NavLink class="dropdown-item" to={`/dashboard/order/details`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                                                                                            <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                                      </svg>View</NavLink></li>
                                                                                                      <li><NavLink to={`/dashboard/order/edit`} class="dropdown-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                                                                                    <td class="cell">#15343</td>
                                                                                    <td class="cell"><span class="truncate"><strong>Vestibulum a accumsan lectus sed mollis ipsum</strong> </span></td>
                                                                                    <td class="cell">esther@example.com</td>
                                                                                    <td class="cell"><span class="cell-data">$199.00</span></td>
                                                                                    <td className="cell"><button className="btn btn-sm  rounded-pill p-1" style={{ backgroundColor: "#ccf0d1", color: "green", fontSize: "12px", width: "75px" }}>Active</button></td>                                                                                    <td class="cell">03.07.2020</td>
                                                                                    <td class="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>
                                                                                                <ul class="dropdown-menu">
                                                                                                      <li><NavLink class="dropdown-item" to={`/dashboard/order/details`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                                                                                            <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                                      </svg>View</NavLink></li>
                                                                                                      <li><NavLink to={`/dashboard/order/edit`} class="dropdown-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                                                                                    <td class="cell">#15342</td>
                                                                                    <td class="cell"><span class="truncate"><strong>Justo feugiat neque</strong> </span></td>
                                                                                    <td class="cell">jenny@example.com</td>
                                                                                    <td class="cell"><span class="cell-data">$59.00</span></td>
                                                                                    <td className="cell"><button className="btn btn-sm text-danger  rounded-pill p-1" style={{ backgroundColor: "#fdcccc", fontSize: "12px", width: "75px" }}>Canceled</button></td>

                                                                                    <td class="cell">22.05.2020</td>
                                                                                    <td class="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>
                                                                                                <ul class="dropdown-menu">
                                                                                                      <li><NavLink class="dropdown-item" to={`/dashboard/order/details`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                                                                                            <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                                      </svg>View</NavLink></li>
                                                                                                      <li><NavLink to={`/dashboard/order/edit`} class="dropdown-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                                                                                    <td class="cell">#15341</td>
                                                                                    <td class="cell"><span class="truncate"> <strong>Morbi vulputate lacinia neque et sollicitudin</strong> </span></td>
                                                                                    <td class="cell">marvin@example.com</td>
                                                                                    <td class="cell"><span class="cell-data">$678.26</span></td>
                                                                                    <td className="cell"><button className="btn btn-sm  rounded-pill p-1" style={{ backgroundColor: "#ccf0d1", color: "green", fontSize: "12px", width: "75px" }}>Active</button></td>
                                                                                    <td class="cell">23.04.2020</td>
                                                                                    <td class="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>
                                                                                                <ul class="dropdown-menu">
                                                                                                      <li><NavLink class="dropdown-item" to={`/dashboard/order/details`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                                                                                            <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                                      </svg>View</NavLink></li>
                                                                                                      <li><NavLink to={`/dashboard/order/edit`} class="dropdown-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                                                                                    <td class="cell">#15341</td>
                                                                                    <td class="cell"><span class="truncate"> <strong>Morbi vulputate lacinia neque et sollicitudin</strong> </span></td>
                                                                                    <td class="cell">albert@example.com</td>
                                                                                    <td class="cell"><span class="cell-data">$678.26</span></td>
                                                                                    <td className="cell"><button className="btn btn-sm  rounded-pill p-1" style={{ backgroundColor: "#ccf0d1", color: "green", fontSize: "12px", width: "75px" }}>Active</button></td>
                                                                                    <td class="cell">13.03.2020</td>
                                                                                    <td class="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>
                                                                                                <ul class="dropdown-menu">
                                                                                                      <li><NavLink class="dropdown-item" to={`/dashboard/order/details`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                                                                                            <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                                      </svg>View</NavLink></li>
                                                                                                      <li><NavLink to={`/dashboard/order/edit`} class="dropdown-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                                                                                    <td class="cell">#15341</td>
                                                                                    <td class="cell"><span class="truncate"> <strong>Morbi vulputate lacinia neque et sollicitudin</strong> </span></td>
                                                                                    <td class="cell">albert@example.com</td>
                                                                                    <td class="cell"><span class="cell-data">$678.26</span></td>
                                                                                    <td className="cell"><button className="btn btn-sm  rounded-pill p-1" style={{ backgroundColor: "#ccf0d1", color: "green", fontSize: "12px", width: "75px" }}>Active</button></td>
                                                                                    <td class="cell">23.09.2019</td>
                                                                                    <td class="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>
                                                                                                <ul class="dropdown-menu">
                                                                                                      <li><NavLink class="dropdown-item" to={`/dashboard/order/details`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                                                                                            <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                                      </svg>View</NavLink></li>
                                                                                                      <li><NavLink to={`/dashboard/order/edit`} class="dropdown-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                                                                                    <td class="cell">#15341</td>
                                                                                    <td class="cell"><span class="truncate"> <strong>Morbi vulputate lacinia neque et sollicitudin</strong> </span></td>
                                                                                    <td class="cell">albert@example.com</td>
                                                                                    <td class="cell"><span class="cell-data">$678.26</span></td>
                                                                                    <td className="cell"><button className="btn btn-sm  rounded-pill p-1" style={{ backgroundColor: "#ccf0d1", color: "green", fontSize: "12px", width: "75px" }}>Active</button></td>
                                                                                    <td class="cell">28.04.2020</td>
                                                                                    <td class="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>
                                                                                                <ul class="dropdown-menu">
                                                                                                      <li><NavLink class="dropdown-item" to={`/dashboard/order/details`}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                                                                                            <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                                                      </svg>View</NavLink></li>
                                                                                                      <li><NavLink to={`/dashboard/order/edit`} class="dropdown-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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



export default OrderList;