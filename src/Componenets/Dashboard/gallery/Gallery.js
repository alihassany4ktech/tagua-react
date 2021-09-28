import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ReactPaginate from 'react-paginate';

const Gallery = () => {

      const [toggle, settoggle] = useState(false);

      const toggleHandler = () => {
            settoggle(true);
      }

      const [selectedFiles, setSelectedFiles] = useState([]);

      const handleImageChange = (e) => {
            // console.log(e.target.files[])
            if (e.target.files) {
                  const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
                  setSelectedFiles((prevImages) => prevImages.concat(filesArray));
                  Array.from(e.target.files).map(
                        (file) => URL.revokeObjectURL(file) // avoid memory leak
                  );
            }
      };


      const deleteImageHandler = (removeItem) => {
            setSelectedFiles(oldArray => {
                  return oldArray.filter(item => item !== removeItem);
            });
      }

      const renderPhotos = (source) => {
            console.log('source: ', source);
            return source.map((photo) => {
                  return <div className="col-6 col-md-4 col-xl-3 col-xxl-2 mb-2">
                        <div className="app-card app-card-doc shadow h-100 p-2">
                              <div className="app-card-thumb-holder">

                                    <div className="app-card-thumb">
                                          <span style={{ zIndex: "1" }} type="button" onClick={() => { deleteImageHandler(photo) }} class="badge bg-warning text-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                          </svg></span>
                                          <img className="thumb-image" style={{ height: "110px", width: "167px" }} src={photo} alt="" key={photo} />
                                    </div>

                              </div>
                        </div>
                  </div>;
            });
      };

      return (
            <>
                  <div className="app-wrapper">
                        <br />
                        <br />
                        <div className="app-content pt-3 p-md-3 p-lg-4">
                              <div className="container-xl">
                                    <div className="row g-3 mb-4 align-items-center mt-3 justify-content-between">
                                          <div className="col-auto d-flex flex-row">
                                                <h1 className="mb-0" style={{ fontSize: "30px" }}>Media Library</h1> <button type="button" onClick={toggleHandler} className="btn app-btn-secondary mt-1 mx-2" style={{ height: "35px" }}>Add New</button>
                                          </div>
                                    </div>
                                    {/* Tooggle Div */}
                                    {
                                          toggle ?
                                                <div className="col-12 col-md-12 mb-5" style={{ borderStyle: "dashed" }} >

                                                      <span type="button" className="text-dark float-end mx-2" onClick={() => { settoggle(false) }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                                                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                            </svg>
                                                      </span>
                                                      <div>
                                                            <input type="file" id="file" multiple onChange={handleImageChange} style={{ display: "none" }} />
                                                            <div className="text-center mt-4 mb-2">
                                                                  <label for="file" className="btn  app-btn-secondary" style={{ marginTop: '-20px', width: "130px", marginLeft: "35px" }}>
                                                                        <i className="fa fa-cloud-upload"></i>&ensp; Select Files
                                                                  </label>
                                                                  <p>Maximum upload file size: 256 MB.</p>
                                                            </div>
                                                            <div className="row">
                                                                  {renderPhotos(selectedFiles)}
                                                            </div>
                                                      </div>
                                                </div>
                                                : ""
                                    }

                                    {/*  end Tooggle Div */}
                                    <nav id="orders-table-tab" className="orders-table-tab app-nav-tabs shadow nav flex-column flex-sm-row p-3 mb-4  justify-content-between align-content-center">
                                          <div className="col-12 col-sm-6  col-md-6 mx-a d-flex flex-row mt-1">

                                                <NavLink exact to="/gallery" style={{ color: "#E8C31E" }}>
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" style={{ marginTop: "5px" }} fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
                                                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                                            <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                                      </svg>
                                                </NavLink>


                                                <NavLink exact to="/gallery" style={{ color: "#E8C31E" }}>
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" fill="currentColor" className="bi bi-border-all" style={{ marginTop: "10px" }} viewBox="0 0 16 16">
                                                            <path d="M0 0h16v16H0V0zm1 1v6.5h6.5V1H1zm7.5 0v6.5H15V1H8.5zM15 8.5H8.5V15H15V8.5zM7.5 15V8.5H1V15h6.5z" />
                                                      </svg>
                                                </NavLink>

                                                <select className="form-select mx-2  " >
                                                      <option selected value="option-1">All media items</option>
                                                      <option value="option-2">Electronics</option>
                                                      <option value="option-3">Clothes</option>
                                                      <option value="option-4">Automobile</option>

                                                </select>
                                                <select className="form-select  " >
                                                      <option selected value="option-1">All dates</option>
                                                      <option value="option-2">Electronics</option>
                                                      <option value="option-3">Clothes</option>
                                                      <option value="option-4">Automobile</option>

                                                </select>
                                                <div>
                                                      <button type="button" class="btn app-btn-secondary  mx-2 " style={{ height: "40px", width: "110px" }}>Bulk Select</button>

                                                </div>
                                          </div>

                                          <div className='d-flex flex-row mt-1'>
                                                <label htmlFor="" className="mt-2 mx-2">Search</label>  <input type="text" name="searchorders" className=" form-control" />

                                          </div>
                                    </nav>
                                    {/* <span class="badge bg-warning text-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                                                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                            </svg></span> */}
                                    <div className="row g-4">

                                          <div className="col-6 col-md-4 col-xl-3 col-xxl-2">
                                                <div className="app-card app-card-doc shadow-sm  h-100 p-2">
                                                      <div className="app-card-thumb-holder p-3">
                                                            <div className="app-card-thumb">
                                                                  <img className="thumb-image" src="assets/images/doc-thumb-1.jpg" alt="" />
                                                            </div>
                                                            <NavLink exact className="app-card-link-mask" to="/image-details"></NavLink>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-6 col-md-4 col-xl-3 col-xxl-2">
                                                <div className="app-card app-card-doc shadow-sm  h-100 p-2">
                                                      <div className="app-card-thumb-holder p-3">
                                                            <div className="app-card-thumb">
                                                                  <img className="thumb-image" src="assets/images/background/background-1.jpg" alt="" />
                                                            </div>
                                                            <NavLink exact className="app-card-link-mask" to="/image-details"></NavLink>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-6 col-md-4 col-xl-3 col-xxl-2">
                                                <div className="app-card app-card-doc shadow-sm  h-100 p-2">
                                                      <div className="app-card-thumb-holder p-3">
                                                            <div className="app-card-thumb">
                                                                  <img className="thumb-image" src="assets/images/background/background-2.jpg" alt="" />
                                                            </div>
                                                            <NavLink exact className="app-card-link-mask" to="/image-details"></NavLink>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-6 col-md-4 col-xl-3 col-xxl-2">
                                                <div className="app-card app-card-doc shadow-sm  h-100 p-2">
                                                      <div className="app-card-thumb-holder p-3">
                                                            <div className="app-card-thumb">
                                                                  <img className="thumb-image" src="assets/images/background/background-3.jpg" alt="" />
                                                            </div>
                                                            <NavLink exact className="app-card-link-mask" to="/image-details"></NavLink>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-6 col-md-4 col-xl-3 col-xxl-2">
                                                <div className="app-card app-card-doc shadow-sm  h-100 p-2">
                                                      <div className="app-card-thumb-holder p-3">
                                                            <div className="app-card-thumb">
                                                                  <img className="thumb-image" src="assets/images/doc-thumb-1.jpg" alt="" />
                                                            </div>
                                                            <NavLink exact className="app-card-link-mask" to="/image-details"></NavLink>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-6 col-md-4 col-xl-3 col-xxl-2">
                                                <div className="app-card app-card-doc shadow-sm  h-100 p-2">
                                                      <div className="app-card-thumb-holder p-3">
                                                            <div className="app-card-thumb">
                                                                  <img className="thumb-image" src="assets/images/doc-thumb-1.jpg" alt="" />
                                                            </div>
                                                            <NavLink exact className="app-card-link-mask" to="/image-details"></NavLink>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-6 col-md-4 col-xl-3 col-xxl-2">
                                                <div className="app-card app-card-doc shadow-sm  h-100 p-2">
                                                      <div className="app-card-thumb-holder p-3">
                                                            <div className="app-card-thumb">
                                                                  <img className="thumb-image" src="assets/images/doc-thumb-1.jpg" alt="" />
                                                            </div>
                                                            <NavLink exact className="app-card-link-mask" to="/image-details"></NavLink>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-6 col-md-4 col-xl-3 col-xxl-2">
                                                <div className="app-card app-card-doc shadow-sm  h-100 p-2">
                                                      <div className="app-card-thumb-holder p-3">
                                                            <div className="app-card-thumb">
                                                                  <img className="thumb-image" src="assets/images/background/background-3.jpg" alt="" />
                                                            </div>
                                                            <NavLink exact className="app-card-link-mask" to="/image-details"></NavLink>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-6 col-md-4 col-xl-3 col-xxl-2">
                                                <div className="app-card app-card-doc shadow-sm  h-100 p-2">
                                                      <div className="app-card-thumb-holder p-3">
                                                            <div className="app-card-thumb">
                                                                  <img className="thumb-image" src="assets/images/background/background-2.jpg" alt="" />
                                                            </div>
                                                            <NavLink exact className="app-card-link-mask" to="/image-details"></NavLink>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-6 col-md-4 col-xl-3 col-xxl-2">
                                                <div className="app-card app-card-doc shadow-sm  h-100 p-2">
                                                      <div className="app-card-thumb-holder p-3">
                                                            <div className="app-card-thumb">
                                                                  <img className="thumb-image" src="assets/images/background/background-1.jpg" alt="" />
                                                            </div>
                                                            <NavLink exact className="app-card-link-mask" to="/image-details"></NavLink>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-6 col-md-4 col-xl-3 col-xxl-2">
                                                <div className="app-card app-card-doc shadow-sm  h-100 p-2">
                                                      <div className="app-card-thumb-holder p-3">
                                                            <div className="app-card-thumb">
                                                                  <img className="thumb-image" src="assets/images/doc-thumb-1.jpg" alt="" />
                                                            </div>
                                                            <NavLink exact className="app-card-link-mask" to="/image-details"></NavLink>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-6 col-md-4 col-xl-3 col-xxl-2">
                                                <div className="app-card app-card-doc shadow-sm  h-100 p-2">
                                                      <div className="app-card-thumb-holder p-3">
                                                            <div className="app-card-thumb">
                                                                  <img className="thumb-image" src="assets/images/doc-thumb-1.jpg" alt="" />
                                                            </div>
                                                            <NavLink exact className="app-card-link-mask" to="/image-details"></NavLink>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-6 col-md-4 col-xl-3 col-xxl-2">
                                                <div className="app-card app-card-doc shadow-sm  h-100 p-2">
                                                      <div className="app-card-thumb-holder p-3">
                                                            <div className="app-card-thumb">
                                                                  <img className="thumb-image" src="assets/images/doc-thumb-1.jpg" alt="" />
                                                            </div>
                                                            <NavLink exact className="app-card-link-mask" to="/image-details"></NavLink>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-6 col-md-4 col-xl-3 col-xxl-2">
                                                <div className="app-card app-card-doc shadow-sm  h-100 p-2">
                                                      <div className="app-card-thumb-holder p-3">
                                                            <div className="app-card-thumb">
                                                                  <img className="thumb-image" src="assets/images/doc-thumb-1.jpg" alt="" />
                                                            </div>
                                                            <NavLink exact className="app-card-link-mask" to="/image-details"></NavLink>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-6 col-md-4 col-xl-3 col-xxl-2">
                                                <div className="app-card app-card-doc shadow-sm  h-100 p-2">
                                                      <div className="app-card-thumb-holder p-3">
                                                            <div className="app-card-thumb">
                                                                  <img className="thumb-image" src="assets/images/doc-thumb-1.jpg" alt="" />
                                                            </div>
                                                            <NavLink exact className="app-card-link-mask" to="/image-details"></NavLink>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-6 col-md-4 col-xl-3 col-xxl-2">
                                                <div className="app-card app-card-doc shadow-sm  h-100 p-2">
                                                      <div className="app-card-thumb-holder p-3">
                                                            <div className="app-card-thumb">
                                                                  <img className="thumb-image" src="assets/images/background/background-2.jpg" alt="" />
                                                            </div>
                                                            <NavLink exact className="app-card-link-mask" to="/image-details"></NavLink>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-6 col-md-4 col-xl-3 col-xxl-2">
                                                <div className="app-card app-card-doc shadow-sm  h-100 p-2">
                                                      <div className="app-card-thumb-holder p-3">
                                                            <div className="app-card-thumb">
                                                                  <img className="thumb-image" src="assets/images/background/background-1.jpg" alt="" />
                                                            </div>
                                                            <NavLink exact className="app-card-link-mask" to="/image-details"></NavLink>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-6 col-md-4 col-xl-3 col-xxl-2">
                                                <div className="app-card app-card-doc shadow-sm  h-100 p-2">
                                                      <div className="app-card-thumb-holder p-3">
                                                            <div className="app-card-thumb">
                                                                  <img className="thumb-image" src="assets/images/background/background-3.jpg" alt="" />
                                                            </div>
                                                            <NavLink exact className="app-card-link-mask" to="/image-details"></NavLink>
                                                      </div>
                                                </div>
                                          </div>


                                    </div>
                                    <div className="overflow-auto mt-4">
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
            </>
      );
}

export default Gallery;