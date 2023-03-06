import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Announcement from "../components/Announcement";
import { login } from "../redux/apiCalls";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Sign in — Cohomy`;
  });

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  return (
    <>
      <Announcement />
      <Navbar />
      <div className="modal-container">
        <div className="modal-container-inner1">
          <div className="modal-container-innerhide"></div>
          <div className="modal-container-inner1">
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "5rem",
                boxShadow: "none",
              }}
              className="modal-inner-1"
              role="dialog"
              arial-label="Log in"
            >
              <header>
                <div className="header-left"></div>
                <div className="header-center">
                  <h1>
                    <div className="header-center-h1div">Log in or sign up</div>
                  </h1>
                </div>
                <div className="header-right"></div>
              </header>
              <div className="modal-content-wrapper">
                <div className="login-pane">
                  <div className="login-pane-div1">
                    <h3>Welcome to Cohomy</h3>
                  </div>
                  <form onSubmit={handleClick}>
                    <div>
                      <div className="login-form-div">
                        <label>
                          <div className="login-label-1">
                            <div className="login-label-1-content">Email</div>
                          </div>
                          <div>
                            <div className="login-label-1-inputdiv">
                              <input
                                type="email"
                                placeholder="Email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                        </label>
                      </div>
                      <div className="login-form-div">
                        <label>
                          <div className="login-label-1">
                            <div className="login-label-1-content">
                              Password
                            </div>
                          </div>
                          <div>
                            <div className="login-label-1-inputdiv">
                              <input
                                type="password"
                                placeholder="Password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="login-button">
                      <button disabled={isFetching}>
                        <span>Continue</span>
                      </button>
                      {error && <>Invalid login credentials</>}
                    </div>
                  </form>
                  <div className="auth-form-divider">
                    <div className="auth-form-divider-div">or</div>
                  </div>
                  <div className="auth-form-misc">
                    <p>
                      New user? <a href="/sign-up">Set up an account</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
