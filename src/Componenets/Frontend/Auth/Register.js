import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Register = () => {


      const [showhidepwd, setshowhidepwd] = useState(false);
      // form data state
      const [data, setdata] = useState({
            email: "",
            password: "",

      });
      // message state
      const [message, setMessage] = useState({
            email: '',
            password: '',

      });

      // get in put vale function 
      const inputEvent = (event) => {

            const { name, value } = event.target;
            setdata((preValue) => {
                  return {
                        ...preValue,
                        [name]: value,
                  }

            });

      };

      const handlePasswordHideShow = () => {
            setshowhidepwd(!showhidepwd);
      }
      // submit function 
      const onSubmit = async (event) => {
            event.preventDefault();
            // return error message
            if (data.email == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              email: "Username or Email is Required",
                        }

                  });
            }
            else if (data.password == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              password: "password is Required",
                        }

                  });
            }
            else if (data.password.length < 8) {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              password: "Password must be at least 8 characters",
                        }

                  });
            } else {

                  console.log(data);
            }

      };

      return (
            <>
                  <div className="container-fluid">

                        <div className="container">
                              <div className="row justify-content-center">

                                    <div className="col-md-4 bg-white shadow-lg p-3 mb-5  rounded smain" style={{ marginTop: "100px" }}>

                                          <h5 className="text-center p-3"><b>Sign Up with Tagua</b></h5>

                                          <form className="signin-form" onSubmit={onSubmit}>
                                                <div className="mb-3">
                                                      <label htmlFor="" className="mb-1">Username or Email</label>
                                                      <input type="text" name="email" value={data.email} className="form-control rounded-0" placeholder="Type here" onChange={inputEvent} />
                                                      <span className="text-danger" style={{ fontSize: "12px" }}>{message.email}</span>
                                                </div>
                                                <label htmlFor="" className="mb-1">Password</label>
                                                <div className="mb-3 input-group">

                                                      <input type={showhidepwd ? "text" : "password"} name="password" value={data.password} className="form-control rounded-0" placeholder="Type here" onChange={inputEvent} />
                                                      <span class="input-group-btn" id="eyeShow">
                                                            <button class="btn btn-default" style={{ height: "40px", border: "1px solid #d2d6d9" }} onClick={handlePasswordHideShow} type="button"><i class="fa fa-eye" aria-hidden="true"></i></button>
                                                      </span>
                                                </div>
                                                <span className="text-danger" style={{ fontSize: "12px" }}>{message.password}</span>



                                                <div className="">
                                                      <p>
                                                            Your personal data will be used to support your experience throughout this website, to manage access to your account,
                                                            and for other purposes described in our <NavLink exact to="/provacy-policy" style={{ color: "#E8C21E", textDecoration: 'none' }}><b>privacy policy</b></NavLink>  .
                                                      </p>
                                                      <button type="submit" className="btn p-2 my-2 rounded-0" style={{ backgroundColor: "#E8C21E", color: "white", width: '100%', }}><b>Sign Up</b></button>
                                                </div>
                                          </form>
                                          <div className="d-flex flex-row justify-content-center">
                                                <p className="px-2">I have a account?</p>
                                                <NavLink exact to="/login" style={{ color: "#E8C21E", textDecoration: 'none' }}>Sign In</NavLink>
                                          </div>



                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Register