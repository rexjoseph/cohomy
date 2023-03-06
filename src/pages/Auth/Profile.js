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
    document.title = `${user.firstName}'s Profile — Hashingmart`;
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
              <div>
                <h1 className='user-name-header'>Hey,&nbsp;{user.firstName}</h1>
                <span className='user-join-date'>You joined&nbsp;{format(new Date(user.createdAt), 'MM/yyyy')}</span>
                <div className='logout-div'>
                  <button onClick={handleLogout}>Sign out</button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Profile