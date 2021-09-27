import React, { useState } from "react";
import userimg4 from "../users/userimages/user-5.jpg";

const UserProfileEdit = () => {
      const [imgData, setImgData] = useState(userimg4);

      const onChangePicture = e => {
            if (e.target.files[0]) {
                  console.log("picture: ", e.target.files[0].name);
                  const reader = new FileReader();
                  reader.addEventListener("load", () => {
                        setImgData(reader.result);
                  });
                  reader.readAsDataURL(e.target.files[0]);
            }
      };
      return (
            <>
                  <div className="app-wrapper px-3" >
                        <br />
                        <br />
                        <div className="app-content pt-3 p-md-3 p-lg-4" >
                              <div className="container-xl">

                                    <div className="row g-3 mb-4 text-center mt-2">

                                          <h1 className="app-page-title mb-0">Edit User Profile</h1>

                                    </div>
                              </div>

                        </div>
                        <div className="col-md-7 mx-auto shadow-lg p-5 mb-4 ">
                              <form>
                                    <div className="row">
                                          <div className="col-md-8">
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
                                                <div className="row">
                                                      <div className="form-group col-md-6 mb-3">
                                                            <label className="mb-1 text-dark" for="inputState">Status</label>
                                                            <select id="inputState" class="form-select">
                                                                  <option selected>Active</option>
                                                                  <option>Inactive</option>

                                                            </select>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-md-4">
                                                <div className="top-response d-flex flex-column">
                                                      <img className="rounded-pill" src={imgData} alt="profilepic" style={{ height: "200px", width: "200px" }} />
                                                      <label for="profilePic" className="btn  app-btn-secondary mt-4" style={{ marginTop: '-20px', width: "130px", marginLeft: "35px" }}>
                                                            <i className="fa fa-cloud-upload"></i>&ensp; Upload
                                                      </label>
                                                      <input id="profilePic" name="image" type="file" className='d-none' onChange={onChangePicture} />
                                                </div>
                                          </div>
                                    </div>





                                    <button type="submit" className="btn mt-3 text-white" style={{ backgroundColor: "#E8C21E" }}>Update</button>
                              </form>
                              <hr />


                              <div class="row">
                                    <div className="col-md-6 text-center">
                                          <button type="button" className="btn  app-btn-secondary "> Change Password</button>

                                    </div>
                                    <div className="col-md-6 text-center">
                                          <button type="button" className="btn  app-btn-secondary1 text-danger" > Deactive</button>

                                    </div>




                              </div>



                        </div>


                  </div>
            </>
      );
}

export default UserProfileEdit;