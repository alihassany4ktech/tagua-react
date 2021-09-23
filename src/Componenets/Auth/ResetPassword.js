import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

const ResetPassword = () => {
      // States 
      const [showhidepwd, setshowhidepwd] = useState(false);
      const [data, setdata] = useState({
            password: "",

      })

      // Error Message State
      const [message, setMessage] = useState({
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

            if (data.password == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              password: "Password is Required",
                        }

                  })
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
      const handlePasswordHideShow = () => {
            setshowhidepwd(!showhidepwd);
      }


      return (
            <>
                  <div className="row g-0 app-auth-wrapper">
                        <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5 mt-5">
                              <div className="d-flex flex-column align-content-end">
                                    <div className="app-auth-body mx-auto">
                                          <div className="app-auth-branding mb-4"><a className="app-logo" href="index.html"><img className="logo-icon me-2" src="assets/images/app-logo.png" alt="logo" /></a></div>
                                          <h2 className="auth-heading text-center mb-4">Reset Password</h2>
                                          <p className="text-center mb-5">Enter your new password.</p>
                                          <div className="auth-form-container text-start">
                                                <form className="auth-form login-form" onSubmit={onSubmit}>
                                                      <div className="email mb-3 input-group">

                                                            <input id="signin-email" name="password" value={data.password} type={showhidepwd ? "text" : "password"} className="form-control signin-email" placeholder="Enter password" onChange={inputEvent} />
                                                            <span class="input-group-btn" id="eyeShow">
                                                                  <button class="btn btn-default" style={{ height: "40px", border: "1px solid #d2d6d9" }} type="button" onClick={handlePasswordHideShow}>{showhidepwd ? <i class="fa fa-eye-slash"></i> : <i class="fa fa-eye"></i>}</button>
                                                            </span>

                                                      </div>
                                                      <span className="text-danger" style={{ fontSize: "12px" }}>{message.password}</span>
                                                      <div className="text-center mt-3">
                                                            <button type="submit" className="btn app-btn-primary w-100 theme-btn mx-auto">Reset</button>
                                                      </div>
                                                </form>

                                          </div>

                                    </div>
                              </div>
                        </div>
                        <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                              <div className="auth-background-holder">
                              </div>
                              <div className="auth-background-mask">
                                    <img src="https://picsum.photos/id/1/760/747" alt="" />
                              </div>
                        </div>

                  </div>
            </>
      );
}


export default ResetPassword;