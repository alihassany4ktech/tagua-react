import React from "react";
import { NavLink } from "react-router-dom";
import ReactPaginate from 'react-paginate';
const Order = ({ match }) => {
      const url = match.url.split('/')[1];
      return (
            <>
                  <div className="col-12 col-md-9 p-3">

                        <div class="table-responsive p-2">
                              <table class="table app-table-hover mb-0 text-left">
                                    <thead>
                                          <tr>
                                                <th class="cell">ORDER</th>
                                                <th class="cell">DATE</th>
                                                <th class="cell">STATUS</th>
                                                <th class="cell">TOTAL</th>
                                                <th class="cell text-end">ACTIONS</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          <tr>
                                                <td class="cell align-middle">#15346</td>
                                                <td class="cell align-middle"><span class="truncate" style={{ fontSize: "12px" }}> February 24, 2021</span></td>
                                                <td class="cell align-middle" style={{ fontSize: "12px" }}>Processing </td>
                                                <td class="cell align-middle"><span style={{ color: "#E8C21E", fontSize: "12px" }}> <b> $18.80 </b>  </span> for 1 item</td>
                                                <td className="cell align-middle  text-end ">
                                                      <button className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "60px" }}>VIEW</button>
                                                      <button className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "75px" }}>INVOICE</button>
                                                </td>

                                          </tr>
                                          <tr>
                                                <td class="cell align-middle">#15346</td>
                                                <td class="cell align-middle"><span class="truncate" style={{ fontSize: "12px" }}> February 24, 2021</span></td>
                                                <td class="cell align-middle" style={{ fontSize: "12px" }}>Processing </td>
                                                <td class="cell align-middle"><span style={{ color: "#E8C21E", fontSize: "12px" }}> <b> $18.80 </b>  </span> for 1 item</td>
                                                <td className="cell align-middle  text-end ">
                                                      <button className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "60px" }}>VIEW</button>
                                                      <button className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "75px" }}>INVOICE</button>
                                                </td>

                                          </tr>
                                          <tr>
                                                <td class="cell align-middle">#15346</td>
                                                <td class="cell align-middle"><span class="truncate" style={{ fontSize: "12px" }}> February 24, 2021</span></td>
                                                <td class="cell align-middle" style={{ fontSize: "12px" }}>Processing </td>
                                                <td class="cell align-middle"><span style={{ color: "#E8C21E", fontSize: "12px" }}> <b> $18.80 </b>  </span> for 1 item</td>

                                                <td className="cell align-middle  text-end ">
                                                      <button className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "60px" }}>VIEW</button>
                                                      <button className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "75px" }}>INVOICE</button>
                                                </td>

                                          </tr>

                                          <tr>
                                                <td class="cell align-middle">#15346</td>
                                                <td class="cell align-middle"><span class="truncate" style={{ fontSize: "12px" }}> February 24, 2021</span></td>
                                                <td class="cell align-middle" style={{ fontSize: "12px" }}>Processing </td>
                                                <td class="cell align-middle"><span style={{ color: "#E8C21E", fontSize: "12px" }}> <b> $18.80 </b>  </span> for 1 item</td>

                                                <td className="cell align-middle  text-end ">
                                                      <button className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "60px" }}>VIEW</button>
                                                      <button className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "75px" }}>INVOICE</button>
                                                </td>

                                          </tr>

                                          <tr>
                                                <td class="cell align-middle">#15346</td>
                                                <td class="cell align-middle"><span class="truncate" style={{ fontSize: "12px" }}> February 24, 2021</span></td>
                                                <td class="cell align-middle" style={{ fontSize: "12px" }}>Processing </td>
                                                <td class="cell align-middle"><span style={{ color: "#E8C21E", fontSize: "12px" }}> <b> $18.80 </b>  </span> for 1 item</td>

                                                <td className="cell align-middle  text-end ">
                                                      <button className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "60px" }}>PAY</button>
                                                      <button className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "75px" }}>VIEW</button>
                                                      <button className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "75px" }}>CENCEL</button>

                                                </td>

                                          </tr>

                                          <tr>
                                                <td class="cell align-middle">#15346</td>
                                                <td class="cell align-middle"><span class="truncate" style={{ fontSize: "12px" }}> February 24, 2021</span></td>
                                                <td class="cell align-middle" style={{ fontSize: "12px" }}>Processing </td>
                                                <td class="cell align-middle"><span style={{ color: "#E8C21E", fontSize: "12px" }}> <b> $18.80 </b>  </span> for 1 item</td>

                                                <td className="cell align-middle  text-end ">
                                                      <button className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "60px" }}>VIEW</button>
                                                      <button className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "75px" }}>INVOICE</button>
                                                </td>

                                          </tr>
                                          <tr>
                                                <td class="cell align-middle">#15346</td>
                                                <td class="cell align-middle"><span class="truncate" style={{ fontSize: "12px" }}> February 24, 2021</span></td>
                                                <td class="cell align-middle" style={{ fontSize: "12px" }}>Processing </td>
                                                <td class="cell align-middle"><span style={{ color: "#E8C21E", fontSize: "12px" }}> <b> $18.80 </b>  </span> for 1 item</td>

                                                <td className="cell align-middle  text-end ">
                                                      <button className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "60px" }}>PAY</button>
                                                      <button className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "75px" }}>VIEW</button>
                                                      <button className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "75px" }}>CENCEL</button>

                                                </td>

                                          </tr>
                                          <tr>
                                                <td class="cell align-middle">#15346</td>
                                                <td class="cell align-middle"><span class="truncate" style={{ fontSize: "12px" }}> February 24, 2021</span></td>
                                                <td class="cell align-middle" style={{ fontSize: "12px" }}>Processing </td>
                                                <td class="cell align-middle"><span style={{ color: "#E8C21E", fontSize: "12px" }}> <b> $18.80 </b>  </span> for 1 item</td>

                                                <td className="cell align-middle  text-end ">
                                                      <button className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "60px" }}>VIEW</button>
                                                      <button className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "75px" }}>INVOICE</button>
                                                </td>

                                          </tr>
                                          <tr>
                                                <td class="cell align-middle">#15346</td>
                                                <td class="cell align-middle"><span class="truncate" style={{ fontSize: "12px" }}> February 24, 2021</span></td>
                                                <td class="cell align-middle" style={{ fontSize: "12px" }}>Processing </td>
                                                <td class="cell align-middle"><span style={{ color: "#E8C21E", fontSize: "12px" }}> <b> $18.80 </b>  </span> for 1 item</td>

                                                <td className="cell align-middle  text-end ">
                                                      <button className="btn btn-sm p-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "60px" }}>VIEW</button>
                                                      <button className="btn btn-sm p-2 mx-2" style={{ backgroundColor: "#E8C21E", color: "white", fontSize: "12px", width: "75px" }}>INVOICE</button>
                                                </td>

                                          </tr>


                                    </tbody>
                              </table>
                        </div>
                        <div className="overflow-auto mt-4">
                              <ReactPaginate
                                    previousLabel={"Prev"}
                                    nextLabel={"Next"}
                                    // pageCount={pageCount}
                                    // onPageChange={changePage}
                                    containerClassName={"paginationBttnsLight"}
                                    previousLinkClassName={"previousBttnLight"}
                                    nextLinkClassName={"nextBttnLight"}
                                    disabledClassName={"paginationDisabledLight"}
                                    activeClassName={"paginationActiveLight"}
                              />

                        </div>

                  </div>
            </>
      );
}

export default Order;