import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
      // States 
      const [showhidepwd, setshowhidepwd] = useState(false);
      const [showhidepwdc, setshowhidepwdc] = useState(false);
      const [data, setdata] = useState({
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
      });
      const [message, setMessage] = useState({
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
      });

      // Input Event 

      const inputEvent = (event) => {
            const { name, value } = event.target;
            setdata((preValue) => {
                  return {
                        ...preValue,
                        [name]: value,
                  }
            });
      };

      // onSubmit Function 

      const onSubmit = (event) => {
            event.preventDefault();
            if (data.name == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              name: "Name is Required",
                        }
                  });
            } else if (data.email == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              email: "Email is Required",

                        }
                  })
            } else if (data.password == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              password: "Password is Required",

                        }
                  })
            } else if (data.password_confirmation == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              password_confirmation: "Confirm Password is Required",
                        }

                  });
            } else if (data.password_confirmation != data.password) {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              password_confirmation: "Password does't match is Required",
                        }

                  });
            } else if (data.password.length < 8) {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              password: "Password must be at least 8 characters",
                        }

                  });
            } else {
                  console.log(data);
            }
      }

      //handlePasswordHideShow

      const handlePasswordHideShow = () => {
            setshowhidepwd(!showhidepwd);
      }
      const handlePasswordHideShowc = () => {
            setshowhidepwdc(!showhidepwdc);
      }
      return (
            <>
                  <div className="row g-0 app-auth-wrapper">
                        <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
                              <div className="d-flex flex-column align-content-end">
                                    <div className="app-auth-body mx-auto">
                                          <div className="app-auth-branding mb-4"><a className="app-logo" href="index.html"><img className="logo-icon me-2" src="assets/images/app-logo.png" alt="logo" /></a></div>
                                          <h2 className="auth-heading text-center mb-4">Sign up to Dashboard</h2>

                                          <div className="auth-form-container text-start mx-auto">
                                                <form className="auth-form auth-signup-form" onSubmit={onSubmit}>
                                                      <div className="email mb-3">
                                                            <label className="sr-only" for="signup-email">Your Name</label>
                                                            <input id="signup-name" value={data.name} name="name" type="text" className="form-control signup-name" placeholder="Full name" onChange={inputEvent} />
                                                            <span className="text-danger" style={{ fontSize: "12px" }}>{message.name}</span>
                                                      </div>
                                                      <div className="email mb-3">
                                                            <label className="sr-only" for="signup-email">Your Email</label>
                                                            <input id="signup-email" value={data.email} name="email" type="email" className="form-control signup-email" placeholder="Email" onChange={inputEvent} />
                                                            <span className="text-danger" style={{ fontSize: "12px" }}>{message.email}</span>
                                                      </div>
                                                      <label className="sr-only" for="signup-password">Password</label>
                                                      <div className="password mb-3 input-group">
                                                            <input id="signup-password" value={data.password} name="password" type={showhidepwd ? "text" : "password"} className="form-control signup-password" placeholder="Create a password" onChange={inputEvent} />
                                                            <span class="input-group-btn" id="eyeShow">
                                                                  <button class="btn btn-default" style={{ height: "40px", border: "1px solid #d2d6d9" }} type="button" onClick={handlePasswordHideShow}>{showhidepwd ? <i class="fa fa-eye-slash"></i> : <i class="fa fa-eye"></i>}</button>
                                                            </span>

                                                      </div>
                                                      <span className="text-danger" style={{ fontSize: "12px", marginTop: "-50px" }}>{message.password}</span>
                                                      <label className="sr-only" for="signup-password">Confirm Password</label>
                                                      <div className="mb-3 input-group">

                                                            <input type={showhidepwdc ? "text" : "password"} value={data.password_confirmation} name="password_confirmation" className="form-control" placeholder="Confirm Password" autoComplete="off" onChange={inputEvent} />

                                                            <span class="input-group-btn" id="eyeShow">
                                                                  <button class="btn btn-default" style={{ height: "40px", border: "1px solid #d2d6d9" }} type="button" onClick={handlePasswordHideShowc}>{showhidepwdc ? <i class="fa fa-eye-slash"></i> : <i class="fa fa-eye"></i>}</button>
                                                            </span>
                                                      </div>
                                                      <span className="text-danger" style={{ fontSize: "12px" }}>{message.password_confirmation}</span>
                                                      <div className="extra mb-3">
                                                            <div className="form-check">
                                                                  <input className="form-check-input" type="checkbox" value="" id="RememberPassword" />
                                                                  <label className="form-check-label" for="RememberPassword">
                                                                        I agree to Portal's <a href="#" className="app-link">Terms of Service</a> and <a href="#" className="app-link">Privacy Policy</a>.
                                                                  </label>
                                                            </div>
                                                      </div>

                                                      <div className="text-center">
                                                            <button type="submit" className="btn app-btn-primary w-100 theme-btn mx-auto">Sign Up</button>
                                                      </div>
                                                </form>

                                                <div className="auth-option text-center pt-5">Already have an account? <NavLink exact to="/" className="text-link" style={{ color: "#E8C21E" }} >Log in</NavLink></div>
                                          </div>



                                    </div>


                              </div>
                        </div>
                        <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                              <div className="auth-background-holder">
                              </div>
                              <div className="auth-background-mask">
                                    <img src="https://picsum.photos/id/7/760/747" alt="" />

                              </div>

                        </div>

                  </div>
            </>
      );
}


export default Signup;