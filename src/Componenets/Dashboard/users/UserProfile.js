import React from "react";
import userimg4 from "../users/userimages/user-5.jpg";
import mlogo from "../../../mlogo.jpg";
const UserProfile = () => {

      return (
            <>
                  <div className="app-wrapper px-3" >
                        <br />
                        <br />
                        <div className="app-content pt-3 p-md-3 p-lg-4" >
                              <div className="container-xl">

                                    <div className="row g-3 mb-4 text-center mt-2">

                                          <h1 className="app-page-title mb-0">User Profile</h1>

                                    </div>
                              </div>

                        </div>
                        <div className="col-md-12 col-lg-7 mx-auto shadow-lg p-5 mb-4 ">
                              <form>
                                    <div className="row">
                                          <div className="col-md-8">
                                                <div className="form-group mb-3">
                                                      <label className="mb-1 text-dark" for="exampleInputEmail1">Name</label>
                                                      <input type="email" className="form-control" value="Mary Monasa" id="exampleInputEmail1" aria-describedby="emailHelp" disabled />
                                                </div>
                                                <div className="form-group mb-3">
                                                      <label className="mb-1 text-dark" for="exampleInputEmail1">Email</label>
                                                      <input type="email" className="form-control" value="marvin@example.com" id="exampleInputEmail1" aria-describedby="emailHelp" disabled />
                                                </div>
                                                <div className="form-group col-md-6 mb-3">
                                                      <label className="mb-1 text-dark" for="inputState">Status</label>
                                                      <select id="inputState" class="form-control" disabled>
                                                            <option selected>Active</option>
                                                            <option>Inactive</option>

                                                      </select>
                                                </div>
                                          </div>
                                          <div className="col-md-4">

                                                <div className="top-response d-flex flex-column">
                                                      <img className="rounded-pill" src={userimg4} alt="profilepic" style={{ height: "200px", width: "200px" }} />
                                                </div>
                                          </div>
                                    </div>






                              </form>

                        </div>


                  </div>
            </>
      );
}


export default UserProfile;