import React, { useState } from "react";
import ReactPaginate from 'react-paginate';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NavLink } from "react-router-dom";

const Tage = () => {
      const [text, setText] = useState("")
      return (
            <>
                  <div className="app-wrapper" >
                        <br />
                        <br />
                        <div className="app-content pt-3 p-md-3 p-lg-4" style={{ backgroundColor: "#f8f9fa" }}>
                              <div className="container-xl">

                                    <div className="row g-3 mb-1 align-items-center justify-content-between mt-3">
                                          <div className="col-auto">
                                                <h1 className="mb-3" style={{ fontSize: "30px" }}>Tages</h1>
                                          </div>
                                    </div>
                                    <div className="row">
                                          <div className="col-md-12 app-card app-card-orders-table shadow mb-5 p-4">
                                                <div className="row ">
                                                      <div className="col-md-4">
                                                            <form>
                                                                  <div className="form-group mb-3">
                                                                        <label className="mb-1 text-dark" for="exampleInputEmail1">Name</label>
                                                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type here" />
                                                                  </div>
                                                                  <div className="form-group mb-3">
                                                                        <label className="mb-1 text-dark" for="exampleInputEmail1">Slug</label>
                                                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type here" />
                                                                  </div>

                                                                  <div class="form-group mb-3">
                                                                        <label className="mb-1 text-dark" for="exampleFormControlTextarea1">Description</label>
                                                                        <CKEditor
                                                                              editor={ClassicEditor}
                                                                              data={text}
                                                                              onChange={(event, editor) => {
                                                                                    const data = editor.getData()
                                                                                    setText(data)
                                                                              }}
                                                                        />
                                                                  </div>

                                                                  <button type="submit" className="btn mt-4 text-white mb-3 w-100" style={{ backgroundColor: "#E8C21E" }}>Create Tage</button>
                                                            </form>

                                                      </div>
                                                      <div className="col-md-8">
                                                            <div class="table-responsive">
                                                                  <table class="table app-table-hover mb-0 text-left">
                                                                        <thead>
                                                                              <tr className="border-bottom-2">
                                                                                    <th className="cell"><input className="form-check-input" type="checkbox" value="" id="RememberPassword" /></th>
                                                                                    <th class="cell text-muted">ID</th>
                                                                                    <th class="cell  text-muted">Name</th>
                                                                                    <th class="cell  text-muted">Description</th>
                                                                                    <th class="cell  text-muted">Slug</th>
                                                                                    <th class="cell  text-muted">Action</th>
                                                                              </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                              <tr>
                                                                                    <td><input className="form-check-input" type="checkbox" value="" id="RememberPassword" /></td>
                                                                                    <td class="cell">1</td>
                                                                                    <td class="cell"><span class="truncate"> <strong>Men clothes</strong> </span></td>
                                                                                    <td class="cell">Men clothes</td>
                                                                                    <td class="cell"><span>/men</span></td>

                                                                                    <td class="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>

                                                                                                <ul class="dropdown-menu">

                                                                                                      <li><NavLink exact to="/tags" class="dropdown-item" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                                      </svg>Edit</NavLink></li>

                                                                                                      <li><hr class="dropdown-divider" /></li>
                                                                                                      <li><NavLink exact to="/tags" class="dropdown-item" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                                                      </svg>Delete</NavLink></li>
                                                                                                </ul>
                                                                                          </div>
                                                                                    </td>
                                                                              </tr>
                                                                              <tr>
                                                                                    <td><input className="form-check-input" type="checkbox" value="" id="RememberPassword" /></td>
                                                                                    <td class="cell">1</td>
                                                                                    <td class="cell"><span class="truncate"> <strong>Men clothes</strong> </span></td>
                                                                                    <td class="cell">Men clothes</td>
                                                                                    <td class="cell"><span>/men</span></td>

                                                                                    <td class="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>

                                                                                                <ul class="dropdown-menu">

                                                                                                      <li><NavLink exact to="/tags" class="dropdown-item" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                                      </svg>Edit</NavLink></li>

                                                                                                      <li><hr class="dropdown-divider" /></li>
                                                                                                      <li><NavLink exact to="/tags" class="dropdown-item" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                                                      </svg>Delete</NavLink></li>
                                                                                                </ul>
                                                                                          </div>
                                                                                    </td>
                                                                              </tr>
                                                                              <tr>

                                                                                    <td><input className="form-check-input" type="checkbox" value="" id="RememberPassword" /></td>
                                                                                    <td class="cell">1</td>
                                                                                    <td class="cell"><span class="truncate"> <strong>Men clothes</strong> </span></td>
                                                                                    <td class="cell">Men clothes</td>
                                                                                    <td class="cell"><span>/men</span></td>

                                                                                    <td class="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>

                                                                                                <ul class="dropdown-menu">

                                                                                                      <li><NavLink exact to="/tags" class="dropdown-item" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                                      </svg>Edit</NavLink></li>

                                                                                                      <li><hr class="dropdown-divider" /></li>
                                                                                                      <li><NavLink exact to="/tags" class="dropdown-item" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                                                      </svg>Delete</NavLink></li>
                                                                                                </ul>
                                                                                          </div>
                                                                                    </td>
                                                                              </tr>
                                                                              <tr>
                                                                                    <td><input className="form-check-input" type="checkbox" value="" id="RememberPassword" /></td>
                                                                                    <td class="cell">1</td>
                                                                                    <td class="cell"><span class="truncate"> <strong>Men clothes</strong> </span></td>
                                                                                    <td class="cell">Men clothes</td>
                                                                                    <td class="cell"><span>/men</span></td>

                                                                                    <td class="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>

                                                                                                <ul class="dropdown-menu">

                                                                                                      <li><NavLink exact to="/tags" class="dropdown-item" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                                      </svg>Edit</NavLink></li>

                                                                                                      <li><hr class="dropdown-divider" /></li>
                                                                                                      <li><NavLink exact to="/tags" class="dropdown-item" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                                                      </svg>Delete</NavLink></li>
                                                                                                </ul>
                                                                                          </div>
                                                                                    </td>
                                                                              </tr>

                                                                              <tr>
                                                                                    <td><input className="form-check-input" type="checkbox" value="" id="RememberPassword" /></td>
                                                                                    <td class="cell">1</td>
                                                                                    <td class="cell"><span class="truncate"> <strong>Men clothes</strong> </span></td>
                                                                                    <td class="cell">Men clothes</td>
                                                                                    <td class="cell"><span>/men</span></td>

                                                                                    <td class="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>

                                                                                                <ul class="dropdown-menu">

                                                                                                      <li><NavLink exact to="/tags" class="dropdown-item" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                                      </svg>Edit</NavLink></li>

                                                                                                      <li><hr class="dropdown-divider" /></li>
                                                                                                      <li><NavLink exact to="/tags" class="dropdown-item" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                                                      </svg>Delete</NavLink></li>
                                                                                                </ul>
                                                                                          </div>
                                                                                    </td>
                                                                              </tr>

                                                                              <tr>
                                                                                    <td><input className="form-check-input" type="checkbox" value="" id="RememberPassword" /></td>
                                                                                    <td class="cell">1</td>
                                                                                    <td class="cell"><span class="truncate"> <strong>Men clothes</strong> </span></td>
                                                                                    <td class="cell">Men clothes</td>
                                                                                    <td class="cell"><span>/men</span></td>

                                                                                    <td class="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>

                                                                                                <ul class="dropdown-menu">

                                                                                                      <li><NavLink exact to="/tags" class="dropdown-item" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                                      </svg>Edit</NavLink></li>

                                                                                                      <li><hr class="dropdown-divider" /></li>
                                                                                                      <li><NavLink exact to="/tags" class="dropdown-item" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                                                      </svg>Delete</NavLink></li>
                                                                                                </ul>
                                                                                          </div>
                                                                                    </td>
                                                                              </tr>

                                                                              <tr>
                                                                                    <td><input className="form-check-input" type="checkbox" value="" id="RememberPassword" /></td>
                                                                                    <td class="cell">1</td>
                                                                                    <td class="cell"><span class="truncate"> <strong>Men clothes</strong> </span></td>
                                                                                    <td class="cell">Men clothes</td>
                                                                                    <td class="cell"><span>/men</span></td>

                                                                                    <td class="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>

                                                                                                <ul class="dropdown-menu">

                                                                                                      <li><NavLink exact to="/tags" class="dropdown-item" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                                      </svg>Edit</NavLink></li>

                                                                                                      <li><hr class="dropdown-divider" /></li>
                                                                                                      <li><NavLink exact to="/tags" class="dropdown-item" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                                                      </svg>Delete</NavLink></li>
                                                                                                </ul>
                                                                                          </div>
                                                                                    </td>
                                                                              </tr>
                                                                              <tr>
                                                                                    <td><input className="form-check-input" type="checkbox" value="" id="RememberPassword" /></td>
                                                                                    <td class="cell">1</td>
                                                                                    <td class="cell"><span class="truncate"> <strong>Men clothes</strong> </span></td>
                                                                                    <td class="cell">Men clothes</td>
                                                                                    <td class="cell"><span>/men</span></td>

                                                                                    <td class="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>

                                                                                                <ul class="dropdown-menu">

                                                                                                      <li><NavLink exact to="/tags" class="dropdown-item" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                                      </svg>Edit</NavLink></li>

                                                                                                      <li><hr class="dropdown-divider" /></li>
                                                                                                      <li><NavLink exact to="/tags" class="dropdown-item" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                                                      </svg>Delete</NavLink></li>
                                                                                                </ul>
                                                                                          </div>
                                                                                    </td>
                                                                              </tr>

                                                                              <tr>
                                                                                    <td><input className="form-check-input" type="checkbox" value="" id="RememberPassword" /></td>
                                                                                    <td class="cell">1</td>
                                                                                    <td class="cell"><span class="truncate"> <strong>Men clothes</strong> </span></td>
                                                                                    <td class="cell">Men clothes</td>
                                                                                    <td class="cell"><span>/men</span></td>

                                                                                    <td class="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>

                                                                                                <ul class="dropdown-menu">

                                                                                                      <li><NavLink exact to="/tags" class="dropdown-item" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                                      </svg>Edit</NavLink></li>

                                                                                                      <li><hr class="dropdown-divider" /></li>
                                                                                                      <li><NavLink exact to="/tags" class="dropdown-item" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                                                      </svg>Delete</NavLink></li>
                                                                                                </ul>
                                                                                          </div>
                                                                                    </td>
                                                                              </tr>

                                                                              <tr>
                                                                                    <td><input className="form-check-input" type="checkbox" value="" id="RememberPassword" /></td>
                                                                                    <td class="cell">1</td>
                                                                                    <td class="cell"><span class="truncate"> <strong>Men clothes</strong> </span></td>
                                                                                    <td class="cell">Men clothes</td>
                                                                                    <td class="cell"><span>/men</span></td>

                                                                                    <td class="cell">
                                                                                          <div class="dropdown">
                                                                                                <button className="dropdown-toggle no-toggle-arrow btn btn-light" style={{ color: "gray" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                                                      </svg>
                                                                                                </button>

                                                                                                <ul class="dropdown-menu">

                                                                                                      <li><NavLink exact to="/tags" class="dropdown-item" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                                                      </svg>Edit</NavLink></li>

                                                                                                      <li><hr class="dropdown-divider" /></li>
                                                                                                      <li><NavLink exact to="/tags" class="dropdown-item" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                                                            <div className="overflow-auto mt-3">
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
                        </div>

                  </div>
            </>
      );
}


export default Tage;