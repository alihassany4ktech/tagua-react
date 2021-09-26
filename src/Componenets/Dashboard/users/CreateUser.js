import React from "react";


const CreateUser = () => {
      return (
            <>
                  <div className="app-wrapper px-3" >
                        <br />
                        <br />
                        <div className="app-content pt-3 p-md-3 p-lg-4" >
                              <div className="container-xl">

                                    <div className="row g-3 mb-4 text-center mt-2">

                                          <h1 className="app-page-title mb-0">Create User</h1>

                                    </div>
                              </div>

                        </div>
                        <div className="col-md-7 mx-auto shadow-lg p-5 mb-4 ">
                              <form>
                                    <div className="form-group mb-3">
                                          <label className="mb-1 text-dark" for="exampleInputEmail1">Name</label>
                                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                                    </div>
                                    <div className="form-group mb-3">
                                          <label className="mb-1 text-dark" for="exampleInputEmail1">Email</label>
                                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group mb-3">
                                          <label className="mb-1 text-dark" for="exampleInputEmail1">Password</label>
                                          <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password" />
                                    </div>
                                    {/* <div class="form-group mb-3">
                                          <label className="mb-1 text-dark" for="exampleFormControlTextarea1">Full Description</label>
                                          <textarea class="form-control" style={{ height: "150px" }} rows="10" placeholder="type here.."></textarea>
                                    </div> */}





                                    {/* <div className="row">
                                          <div class="form-group col-md-6 mb-3">

                                          </div> */}
                                    {/* <div class="form-group col-md-6 mb-3">
                                                <label className="mb-1 text-dark" for="inputState">Sub-category</label>
                                                <select id="inputState" class="form-select">
                                                      <option selected>Nissan</option>
                                                      <option>Honda</option>
                                                      <option>Mercedes</option>
                                                      <option>Chevrolet</option>
                                                </select>
                                          </div> */}
                                    {/* </div> */}
                                    <div className="row">
                                          <div className="form-group col-md-6 mb-3">
                                                <label className="mb-1 text-dark" for="inputState">Status</label>
                                                <select id="inputState" class="form-select">
                                                      <option selected>Active</option>
                                                      <option>Inactive</option>
                                                      {/* <option>Electronics</option>
                                                      <option>Smartphones</option>
                                                      <option>Sport items</option>
                                                      <option>Baby and Tous</option> */}
                                                </select>
                                          </div>
                                          <div class="form-group col-md-6 mb-3">
                                                <div className="form-group mb-3">
                                                      <label className="mb-1 text-dark" for="exampleInputEmail1">Image</label>
                                                      <input type="file" className="form-control" id="validatedCustomFile" />
                                                </div>
                                          </div>


                                    </div>


                                    <button type="submit" className="btn mt-3 text-white" style={{ backgroundColor: "#E8C21E" }}>Create</button>
                              </form>
                        </div>


                  </div>
            </>
      );
}


export default CreateUser;