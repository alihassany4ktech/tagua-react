import React from "react";


const Signup = () => {

      return (
            <>
                  <div className="row g-0 app-auth-wrapper">
                        <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
                              <div className="d-flex flex-column align-content-end">
                                    <div className="app-auth-body mx-auto">
                                          <div className="app-auth-branding mb-4"><a className="app-logo" href="index.html"><img className="logo-icon me-2" src="assets/images/app-logo.png" alt="logo" /></a></div>
                                          <h2 className="auth-heading text-center mb-4">Sign up to Dashboard</h2>

                                          <div className="auth-form-container text-start mx-auto">
                                                <form className="auth-form auth-signup-form">
                                                      <div className="email mb-3">
                                                            <label className="sr-only" for="signup-email">Your Name</label>
                                                            <input id="signup-name" name="signup-name" type="text" className="form-control signup-name" placeholder="Full name" required="required" />
                                                      </div>
                                                      <div className="email mb-3">
                                                            <label className="sr-only" for="signup-email">Your Email</label>
                                                            <input id="signup-email" name="signup-email" type="email" className="form-control signup-email" placeholder="Email" required="required" />
                                                      </div>
                                                      <div className="password mb-3">
                                                            <label className="sr-only" for="signup-password">Password</label>
                                                            <input id="signup-password" name="signup-password" type="password" className="form-control signup-password" placeholder="Create a password" required="required" />
                                                      </div>
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

                                                <div className="auth-option text-center pt-5">Already have an account? <a className="text-link" href="login.html" style={{ color: "#E8C21E" }} >Log in</a></div>
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