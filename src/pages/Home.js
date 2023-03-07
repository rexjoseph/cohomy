import React, { useEffect, useState } from 'react'
import Header from '../components/Slider'
import HomeNavbar from '../components/HomeNavbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import LoginModal from '../components/LoginModal'

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  
  useEffect(() => {
    document.title = `Reignite your happy place`
  }, [])
  
  return (
    <div>
      <Announcement />
      <HomeNavbar />
      <Header />
      <Footer />
      <LoginModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  )
}

export default Home