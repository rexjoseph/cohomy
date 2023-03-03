import React, { useEffect } from 'react'
import Header from '../components/Slider'
import HomeNavbar from '../components/HomeNavbar'

const Home = () => {

  useEffect(() => {
    document.title = `Cohomy | Reignite your happy place`
  }, [])
  
  return (
    <div>
      <HomeNavbar />
      <Header />
    </div>
  )
}

export default Home