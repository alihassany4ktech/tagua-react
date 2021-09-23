import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

const VerifyEmail = () => {
      // States 

      const [data, setdata] = useState({
            email: "",

      })

      // Error Message State
      const [message, setMessage] = useState({
            email: '',


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
            } else {
                  console.log(data);
            }


      }



      return (
            <>
                  <div className="row g-0 app-auth-wrapper">
                        <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5 mt-5">
                              <div className="d-flex flex-column align-content-end">
                                    <div className="app-auth-body mx-auto">
                                          <div className="app-auth-branding mb-4"><a className="app-logo" href="index.html"><img className="logo-icon me-2" src="assets/images/app-logo.png" alt="logo" /></a></div>
                                          <h2 className="auth-heading text-center mb-4">Verify Email</h2>
                                          <p className="text-center mb-5">Enter your email address below. We'll email you a link to a page where you can easily send <strong>OTP</strong>  for new password on this email.</p>
                                          <div className="auth-form-container text-start">
                                                <form className="auth-form login-form" onSubmit={onSubmit}>
                                                      <div className="email mb-3">
                                                            <label className="sr-only" for="signin-email">Email</label>
                                                            <input id="signin-email" name="email" value={data.email} type="email" className="form-control signin-email" placeholder="Email address" onChange={inputEvent} />
                                                            <span className="text-danger" style={{ fontSize: "12px" }}>{message.email}</span>
                                                      </div>
                                                      <div className="text-center mt-3">
                                                            <button type="submit" className="btn app-btn-primary w-100 theme-btn mx-auto">Send</button>
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
                                    <img src="https://picsum.photos/id/3/760/747" alt="" />
                              </div>
                        </div>

                  </div>
            </>
      );
}


export default VerifyEmail;