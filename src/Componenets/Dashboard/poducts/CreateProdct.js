import React, { useState } from "react"; 

const CreateProduct = () => {

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

                                          <h1 className="mb-0" style={{ fontSize: "30px" }}>Create Product</h1>

                                    </div>
                              </div>

                        </div>
                        <div className="col-md-7 mx-auto shadow-lg p-5 mb-4 ">
                              <form>
                                    <div className="form-group mb-5">
                                          <label className="mb-1 text-dark" for="exampleInputEmail1">Product Title</label>
                                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div class="form-group mb-3">
                                          <label className="mb-1 text-dark" for="exampleFormControlTextarea1">Full Description</label>
                                          <textarea class="form-control" style={{ height: "150px" }} rows="10" placeholder="type here.."></textarea>
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
                                          <div class="form-group col-md-6 mb-3">
                                                <label className="mb-1 text-dark" for="inputState">Sub-category</label>
                                                <select id="inputState" class="form-select">
                                                      <option selected>Nissan</option>
                                                      <option>Honda</option>
                                                      <option>Mercedes</option>
                                                      <option>Chevrolet</option>
                                                </select>
                                          </div>
                                    </div>
                                    <div className="row">
                                          <div className="form-group col-md-4 mb-3">
                                                <label className="mb-1 text-dark" for="exampleInputEmail1">Price</label>
                                                <input type="emtextil" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="type" />
                                          </div>
                                          <div className="form-group col-md-2">
                                                <label className="mb-1 text-dark" for="exampleInputEmail1">Currency</label>
                                                <select className="form-select" >
                                                      <option selected>USD</option>
                                                      <option>EUR</option>
                                                      <option>RUBL</option>

                                                </select>
                                          </div>
                                          <div class="form-group col-md-6 mb-3">
                                                <label className="mb-1 text-dark" for="inputState">Product Type</label>
                                                <select id="inputState" class="form-select">
                                                      <option selected>Type 1</option>
                                                      <option>Type 2</option>
                                                      <option>Type 3</option>
                                                      <option>...............</option>
                                                </select>
                                          </div>


                                    </div>


                                    <button type="submit" className="btn mt-4 text-white" style={{ backgroundColor: "#E8C21E" }}>Submit item</button>
                              </form>
                        </div>


                  </div>
            </>
      );
}

export default CreateProduct;