import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/apiCalls';
import './LoginModal.css'

const LoginModal = ({open, onClose}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  if (!open) {
    return null
  }

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
    navigate('/profile');
  };

  return (
    <div className='overlay'>
      <section className={open ? `modal-section active` : 'modal-section'}>
        <div className='modal-container'>
          <div className='modal-container-inner1'>
            <div className='modal-container-innerhide'></div>
            <div className='modal-container-inner1'>
              <div className='modal-inner-1' role="dialog" arial-label="Log in">
                <div className='close-div'>
                  <span onClick={onClose}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", fill: "none", height: "16px", width: "16px", stroke: "currentColor", strokeWidth: "3", overflow: "visible"}}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                  </span>
                </div>
                <header>
                  <div className='header-left'></div>
                  <div className='header-center'>
                    <h1>
                      <div className='header-center-h1div'>
                        Log in or sign up
                      </div>
                    </h1>
                  </div>
                  <div className='header-right'></div>
                </header>
                <div className='modal-content-wrapper'>
                  <div className='login-pane'>
                    <div className='login-pane-div1'>
                      <h3>Welcome to Cohomy</h3>
                    </div>
                    <form onSubmit={handleClick}>
                      <div>
                        <div className='login-form-div'>
                          <label>
                            <div className="login-label-1">
                              <div className='login-label-1-content'>Email</div>
                            </div>
                            <div>
                              <div className='login-label-1-inputdiv'>
                                <input 
                                type='email' 
                                placeholder='Email'
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>
                            </div>
                          </label>
                        </div>
                        <div className='login-form-div'>
                          <label>
                            <div className="login-label-1">
                              <div className='login-label-1-content'>Password</div>
                            </div>
                            <div>
                              <div className='login-label-1-inputdiv'>
                                <input 
                                type='password' 
                                placeholder='Password'
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                />
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className='login-button'>
                        <button disabled={isFetching}>
                          <span>Continue</span>
                        </button>
                      {error && <>Invalid login credentials</>}
                      </div>
                    </form>
                    <div className="auth-form-divider">
                      <div className='auth-form-divider-div'>
                        or
                      </div>
                    </div>
                    <div className="auth-form-misc">
                      <p>New user? <a href="/sign-up">Set up an account</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LoginModal