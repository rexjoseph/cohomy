import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import Announcement from '../../components/Announcement'
import Footer from '../../components/Footer'
import { format } from 'date-fns'
import './Profile.css'
import { logout } from "../../redux/apiCalls";
import Navbar from '../../components/Navbar';

const Profile = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${user.firstName}'s Profile`;
  });

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout);
    navigate("/");
  };
  
  return (
    <div>
      <Announcement />
      <Navbar />
      <main>
        <div>
          <div className='user-profile-wrapper'>
            <div className='user-profile-flex'>
              <div className='up-33'>
                <div className='up-33-1'>
                  <div className='up-33-2'>
                    <div className='up-33-2wrapper'>
                      <div className='up-33-2wrapper1'>
                        <div className='up-pfp-holder'>
                          <img src="https://a0.muscache.com/defaults/user_pic-225x225.png?v=3" />
                        </div>
                      </div>
                    </div>
                    <div className='up-33-2changepfp'>
                      <p>Update photo</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='up-34'>
                <h1 className='user-name-header'>Hey,&nbsp;{user.firstName}</h1>
                <span className='user-join-date'>You joined&nbsp;{format(new Date(user.createdAt), 'MM/yyyy')}</span>
                <div className='logout-div'>
                  <button onClick={handleLogout}>Sign out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Profile