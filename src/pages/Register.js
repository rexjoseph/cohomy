import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import "../components/LoginModal.css";
import { register } from "../redux/apiCalls";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";


const Register = () => {
  const { isFetching } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      errorMessage: "First name must be minimun 3 characters and not include special characters",
      label: "First Name",
      pattern: "^[A-Za-z]{3,20}$",
      required: true
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "Last name must be minimun 3 characters and not include special characters",
      label: "Last Name",
      pattern: "^[A-Za-z]{3,20}$",
      required: true
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "john@doe.com",
      errorMessage: "Must be a valid email address",
      label: "Email",
      required: true
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include atleast 1 letter, 1 number, and 1 special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords do not match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true
    }
  ]

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: [e.target.value]})
  }

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { ...values });
    navigate('/login');
  }

  useEffect(() => {
    document.title = `Register — Cohomy`;
  })

  return (
    <>
    <Announcement />
    <Navbar />
      <div style={{marginLeft: "auto", marginRight: "auto", marginTop: "5rem", boxShadow: "none"}} className="modal-inner-1" role="dialog" arial-label="Log in">
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
                {
                  inputs.map(input => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={handleChange}
                    />
                  )
                )}
               
              </div>
              <div className="login-button">
                <button disabled={isFetching}>
                  <span>Continue</span>
                </button>
              </div>
            </form>
            <div className="auth-form-divider">
              <div className="auth-form-divider-div">or</div>
            </div>
            <div className="auth-form-misc">
              <p>
                Returning user?&nbsp;<a href="/login">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
