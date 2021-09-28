import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const CreateBlog = () => {
      const [text, setText] = useState("")
      let options = [
            {
                  value: 1,
                  label: 'Technical',
            },
            {
                  value: 2,
                  label: 'labels',
            },
            {
                  value: 3,
                  label: 'Udemy',
            },
            {
                  value: 4,
                  label: 'Youtube',
            }
      ];

      const [tage, settage] = useState(options)


      const handleTage = (e) => {
            console.log(e);
      }


      return (
            <>
                  <div className="app-wrapper px-3"  >
                        <br />
                        <br />
                        <div className="app-content pt-3 p-md-3 p-lg-4"  >
                              <div className="container-xl">

                                    <div className="row g-3 mb-4 text-center mt-2">

                                          <h1 className="mb-0" style={{ fontSize: "30px" }}>Create Blog</h1>

                                    </div>
                              </div>

                        </div>
                        <div className="col-md-7 mx-auto shadow-lg p-5 mb-4 ">
                              <form>
                                    <div className="form-group mb-5">
                                          <label className="mb-1 text-dark" for="exampleInputEmail1">Blog Title</label>
                                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title" />
                                    </div>
                                    <div class="form-group mb-3">
                                          <label className="mb-1 text-dark" for="exampleFormControlTextarea1">Full Description</label>
                                          <CKEditor
                                                editor={ClassicEditor}
                                                data={text}
                                                onChange={(event, editor) => {
                                                      const data = editor.getData()
                                                      setText(data)
                                                }}
                                          />
                                    </div>
                                    <div className="form-group mb-3">
                                          <label className="mb-1 text-dark" for="exampleInputEmail1">Image</label>
                                          <input type="file" className="form-control" id="validatedCustomFile" />
                                    </div>


                                    <div className="form-group mb-3">
                                          <label className="mb-1 text-dark" for="exampleInputEmail1">Tag</label>
                                          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                          {/* <Select
                                                isMulti
                                                options={tage}
                                                displayValue="Tage"
                                                onChange={handleTage}
                                          ></Select> */}
                                    </div>

                                    <div className="row">
                                          <div class="form-group col-md-6 mb-3">
                                                <label className="mb-1 text-dark" for="inputState">Category</label>
                                                <select id="inputState" class="form-select">
                                                      <option selected>Automobiles</option>
                                                      <option>Home items</option>
                                                      <option>Electronics</option>
                                                      <option>Smartphones</option>
                                                      <option>Sport items</option>
                                                      <option>Baby and Tous</option>
                                                </select>
                                          </div>

                                    </div>



                                    <button type="submit" className="btn mt-4 text-white" style={{ backgroundColor: "#E8C21E" }}>Submit</button>
                              </form>
                        </div>


                  </div>
            </>
      );
}

export default CreateBlog;