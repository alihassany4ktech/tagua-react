import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

const Login = () => {
      // States 
      const [showhidepwd, setshowhidepwd] = useState(false);
      const [data, setdata] = useState({
            email: "",
            password: ""
      })

      // Error Message State
      const [message, setMessage] = useState({
            email: '',
            password: '',

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
      }

      // Form Submit Function

      const onSubmit = (e) => {
            e.preventDefault();

            if (data.email == '') {
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
                              password: "Password is Required"
                        }
                  })
            } else {
                  console.log(data);
            }


      }
      //handlePasswordHideShow

      const handlePasswordHideShow = () => {
            setshowhidepwd(!showhidepwd);
      }



      return (
            <>
                  <div className="row g-0 app-auth-wrapper">
                        <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
                              <div className="d-flex flex-column align-content-end">
                                    <div className="app-auth-body mx-auto">
                                          <div className="app-auth-branding mb-4"><a className="app-logo" href="index.html"><img className="logo-icon me-2" src="assets/images/app-logo.png" alt="logo" /></a></div>
                                          <h2 className="auth-heading text-center mb-5">Log in to Dashboard</h2>
                                          <div className="auth-form-container text-start">
                                                <form className="auth-form login-form" onSubmit={onSubmit}>
                                                      <div className="email mb-3">
                                                            <label className="sr-only" for="signin-email">Email</label>
                                                            <input id="signin-email" name="email" value={data.email} type="email" className="form-control signin-email" placeholder="Email address" onChange={inputEvent} />
                                                            <span className="text-danger" style={{ fontSize: "12px" }}>{message.email}</span>
                                                      </div>
                                                      <label className="sr-only" for="signin-password">Password</label>
                                                      <div className="password mb-3 input-group">

                                                            <input id="signin-password" name="password" value={data.password} type={showhidepwd ? "text" : "password"} className="form-control signin-password" placeholder="Password" onChange={inputEvent} />
                                                            <span class="input-group-btn" id="eyeShow">
                                                                  <button class="btn btn-default" style={{ height: "40px", border: "1px solid #d2d6d9" }} type="button" onClick={handlePasswordHideShow}>{showhidepwd ? <i class="fa fa-eye-slash"></i> : <i class="fa fa-eye"></i>}</button>
                                                            </span>
                                                            <span className="text-danger" style={{ fontSize: "12px" }}>{message.password}</span>
                                                      </div>
                                                      <div className="extra mt-3 row justify-content-between">
                                                            <div className="col-6">
                                                                  <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value="" id="RememberPassword" />
                                                                        <label className="form-check-label" for="RememberPassword">
                                                                              Remember me
                                                                        </label>
                                                                  </div>
                                                            </div>
                                                            <div className="col-6">
                                                                  <div className="forgot-password text-end">
                                                                        <NavLink exact to="/verify-email" style={{ textDecoration: "none", color: "#E8C21E" }} >Forgot password?</NavLink>
                                                                  </div>
                                                            </div>
                                                      </div>

                                                      <div className="text-center mt-3">
                                                            <button type="submit" className="btn app-btn-primary w-100 theme-btn mx-auto">Log In</button>
                                                      </div>
                                                </form>

                                                <div className="auth-option text-center pt-5">No Account? Sign up <NavLink exact to="/signup" className="text-link" style={{ color: "#E8C21E" }} >here</NavLink>.</div>
                                          </div>

                                    </div>
                              </div>
                        </div>
                        <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                              <div className="auth-background-holder">
                              </div>
                              <div className="auth-background-mask">
                                    <img src="https://picsum.photos/id/2/760/747" alt="" />
                              </div>
                        </div>

                  </div>
            </>
      );
}

export default Login;