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
    document.title = `Sign in`;
  });

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  return (
    <>
      <Announcement />
      <Navbar />
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
        <div className="modal-content-wrapper">
          <div className="login-pane">
            <div className="login-pane-div1">
              <h3>Sign in</h3>
            </div>
            <div className="registerFormDiv">
              <form className="registerForm" onSubmit={handleClick}>
                <div className="inputDiv">
                  <label className="registerFormLabel" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="registerFormInput"
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="inputDiv">
                  <label className="registerFormLabel" htmlFor="email">
                    Password
                  </label>
                  <input
                    className="registerFormInput"
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="login-button">
                  <button disabled={isFetching}>
                    <span>Continue</span>
                  </button>
                  {error && <>Invalid login credentials</>}
                </div>
              </form>
            </div>
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
    </>
  );
};

export default Login;
