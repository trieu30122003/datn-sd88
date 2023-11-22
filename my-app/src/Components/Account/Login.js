import React from "react";
import { useEffect, useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  const login = () => {
    debugger
  }

  return (
    <>
      <form method="post" action="/login/">
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card bg-dark text-white"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your login and password!
                      </p>
                      <div className="form-outline form-white mb-4">
                        <label className="form-label">User Name</label>
                        {/* <input
                          type="text"
                          name="ma"
                          className="form-control form-control-lg"
                        /> */}
                        <input className="form-control" type="text" name="username" value={this.state.username} />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <label className="form-label">Password</label>
                        <input className="form-control" type="text" name="password" value={this.state.password} />
                      </div>
                      <p className="small mb-5 pb-lg-2">
                        <a className="text-white-50" href="#!">Forgot password ?</a>
                      </p>
                      {/* <button className="btn btn-outline-light btn-lg px-5" type="submit">
                        Login
                      </button> */}
                      <button type="submit" className="btn btn-success" onClick={login}>Login</button>
                      <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" className="text-white">
                          <i className="fab fa-facebook-f fa-lg" />
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-twitter fa-lg mx-4 px-2" />
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-google fa-lg" />
                        </a>
                      </div>
                    </div>
                    <div>
                      <p className="mb-0">
                        Don't have an account?{" "}
                        <a href="/register" className="text-white-50 fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>

                  <form>
                    <div className="input-container">
                      <label>Username </label>
                      <input type="text" name="uname" required />
                      {/* {renderErrorMessage("uname")} */}
                    </div>
                    <div className="input-container">
                      <label>Password </label>
                      <input type="password" name="pass" required />
                      {/* {renderErrorMessage("pass")} */}
                    </div>
                    <div className="button-container">
                      <input type="submit" />
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}
