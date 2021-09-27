import React, { useState } from "react";
import userimg4 from "./user-5.jpg";
const AdminProfile = () => {
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

                                          <h1 className="app-page-title mb-0">Admin Profile</h1>

                                    </div>
                              </div>

                        </div>
                        <div className="col-md-12 col-lg-8 mx-auto shadow-lg p-5 mb-4 ">
                              <form>
                                    <div className="row">
                                          <div className="col-md-8">
                                                <div className="row">
                                                      <div className="col-md-6">
                                                            <div className="form-group mb-3">
                                                                  <label className="mb-1 text-dark" for="exampleInputEmail1"> First name </label>
                                                                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type here" />
                                                            </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                            <div className="form-group mb-3">
                                                                  <label className="mb-1 text-dark" for="exampleInputEmail1"> Last name </label>
                                                                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type gere" />
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className="row">
                                                      <div className="col-md-6">
                                                            <div className="form-group mb-3">
                                                                  <label className="mb-1 text-dark" for="exampleInputEmail1">Email</label>
                                                                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" />
                                                            </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                            <div className="form-group mb-3">
                                                                  <label className="mb-1 text-dark" for="exampleInputEmail1">Phone</label>
                                                                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="+1234567890" />
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="form-group mb-3">
                                                      <label className="mb-1 text-dark" for="exampleInputEmail1">Address</label>
                                                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type here" />
                                                </div>
                                                <div className="row">
                                                      <div className="form-group col-md-6 mb-3">
                                                            <div className="form-group mb-3">
                                                                  <label className="mb-1 text-dark" for="exampleInputEmail1">Birthday</label>
                                                                  <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                            </div>
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





                                    <button type="submit" className="btn mt-3 text-white" style={{ backgroundColor: "#E8C21E" }}>Save changes</button>
                              </form>

                        </div>


                  </div>
            </>
      );
}


export default AdminProfile;