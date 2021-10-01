import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import img from "./doc-thumb-1.jpg";
const ImageDetail = () => {
      const [text, setText] = useState("")
      const [text2, setText2] = useState("")
      return (
            <>
                  <div className="app-wrapper" >
                        <br />
                        <br />
                        <div className="app-content pt-3 p-md-3 p-lg-4 p-2" style={{ backgroundColor: "#f8f9fa" }} >
                              <h1 className="mt-4 mb-4" style={{ fontSize: "30px" }}>Attachment details</h1>
                              <div className="container-xl shadow p-4" style={{ backgroundColor: "white" }}>
                                    <div className="row g-4 settings-section">
                                          <div className="col-12 col-md-7 text-center" style={{ borderRight: "1px solid #efeff1" }}>

                                                <img src={img} width="100%" height="250" alt="pic" />
                                                <button type="button" className="btn app-btn-primary mt-3" >Edit Image</button>

                                          </div>
                                          <div className="col-12 col-md-5" style={{ backgroundColor: "#F6F8F7" }}>



                                                <div className="app-card-body p-3">
                                                      <div className="mb-3">
                                                            <p>Uploaded on: September 23, 20201 <br /> Uploaded by: Peter <br /> File name: example.jpg
                                                                  <br /> Image type: image/jpg
                                                                  <br /> File size: 555 KB
                                                                  <br /> Dimensions: 1920 by 550 pixels
                                                            </p>

                                                      </div>
                                                      <form className="settings-form">
                                                            <div className="mb-3">
                                                                  <label for="setting-input-1" className="form-label text-dark">Alternative Text
                                                                  </label>
                                                                  <input type="text" className="form-control " id="setting-input-1" required placeholder="Type here" />
                                                            </div>
                                                            <div className="mb-3">
                                                                  <label for="setting-input-1" className="form-label text-dark">Title
                                                                  </label>
                                                                  <input type="text" className="form-control " id="setting-input-1" required placeholder="1" />
                                                            </div>
                                                            <div className="mb-3">
                                                                  <label for="setting-input-2" className="form-label text-dark">Caption</label>
                                                                  <CKEditor
                                                                        editor={ClassicEditor}
                                                                        data={text}
                                                                        onChange={(event, editor) => {
                                                                              const data = editor.getData()
                                                                              setText(data)
                                                                        }}
                                                                  />
                                                            </div>
                                                            <div className="mb-3">
                                                                  <label for="setting-input-2" className="form-label text-dark">Description</label>
                                                                  <CKEditor
                                                                        editor={ClassicEditor}
                                                                        data={text2}
                                                                        onChange={(event, editor) => {
                                                                              const data = editor.getData()
                                                                              setText2(data)
                                                                        }}
                                                                  />
                                                            </div>
                                                            <div className="mb-3">
                                                                  <label for="setting-input-1" className="form-label text-dark">File URL
                                                                  </label>
                                                                  <input type="text" className="form-control " id="setting-input-1" required placeholder="https://www.tagua/wp-conten/uplaod" />
                                                            </div>

                                                            <button type="button" className="btn app-btn-primary mb-3" >Copy URL to clipboard</button>
                                                            <div className="mb-3">
                                                                  <p>Required feilds are marked <span className="text-danger">*</span></p>

                                                            </div>
                                                            <div className="form-check mb-3">
                                                                  <input className="form-check-input" type="checkbox" value="" id="settings-checkbox-1" checked />
                                                                  <label className="form-check-label text-dark" for="settings-checkbox-1">
                                                                        Exclude this image from sitemap
                                                                  </label>
                                                            </div>
                                                            <button type="button" className="btn app-btn-primary mb-3" >Regenerate Thumbnails</button>


                                                      </form>

                                                </div>



                                                <hr className="my-4" />
                                                <p> <NavLink exact to="/dashboard/image-details" className="text-link" style={{ color: "#E8C21E" }}> View attachment page </NavLink> | <NavLink exact to="/dashboard/image-details" style={{ color: "#E8C21E" }} className="text-link" > Edit more details </NavLink> |  <a type="button" className="text-danger">Delete permannently</a>  </p>
                                          </div>
                                    </div>





                              </div>
                        </div>


                  </div>
            </>
      );
}
export default ImageDetail;