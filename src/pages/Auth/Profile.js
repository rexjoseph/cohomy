import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import Announcement from '../../components/Announcement'
import Footer from '../../components/Footer'
import { format } from 'date-fns'
import './Profile.css'
import { logout } from "../../redux/apiCalls";
import Navbar from '../../components/Navbar';
import { userRequest } from '../../requestMethods';

const Profile = () => {
  const user = useSelector((state) => state.user.currentUser);
  const id = user._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = `${user.firstName}'s Profile`;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('files', file);
    // const fileName = new Date().getTime() + file.name;
    console.log(file);
    const res = await userRequest.post(`/auth/${id}/update-pfp`, formData)
    console.log(res);
    if (res.status === '200') setSuccess(res.data.message);
    if (res.status === '500') setError(res.data.message);
  }

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
                          <img src={user.profile_photo} />
                        </div>
                      </div>
                    </div>
                    <div className='up-33-2changepfp'>
                      <form encType="multipart/form-data" onSubmit={handleSubmit}>
                        <input 
                        className='pfp-uploader'
                        type="file" 
                        name='image' 
                        onChange={(e) => setFile(e.target.files[0])} 
                        accept=".png, .jpg, .jpeg"
                        placeholder='Update photo'
                        />
                        <div className='pfp-submit-btn'>
                          <button type="submit">Update photo</button>
                        </div>
                      </form>
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
                {success && <p>{success}</p>}
                {error && <p>{error}</p>}
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