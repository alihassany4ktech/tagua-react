import React from "react";



const Address = () => {
      return (
            <>
                  <div className="col-12 col-md-9 p-4">
                        <p>The following addresses will be used on the checkout page by default. </p>
                        <div className="row">

                              <div className="col-md-6 p-3">
                                    <h3 className="section-title">Billing address <small className="edit-address" style={{ fontSize: "12px" }}>Edit</small> </h3> <br />
                                    <p style={{ lineHeight: "30px" }}>PEDRO KELLEMEN
                                          <br />1800 SW 1st Avenue Suite # 305
                                          <br />FPY132965
                                          <br />Miami, FL, FL 33129 </p>
                              </div>
                              <div className="col-md-6 p-3">
                                    <h3 className="section-title">Shipping address <small className="edit-address" style={{ fontSize: "12px" }}>Edit</small></h3> <br />
                                    <p style={{ lineHeight: "30px" }}>PEDRO KELLEMEN
                                          <br />1800 SW 1st Avenue Suite # 305
                                          <br />FPY132965
                                          <br />Miami, FL, FL 33129 </p>
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default Address;