import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Announement from '../components/Announcement'
import './About.css'

const About = () => {
  useEffect(() => {
    document.title = `About Us | Co-habit your happy place`
  }, [])

  return (
    <>
    <Announement />
      <Navbar />
      <section className='about-section'>
        <div>
          <main className='about-main'>
            <div className='main-image'>
              <img className='main-image-1-mobile' src='https://hashingmartimages.mo.cloudinary.net/files/coh-about-us-image-1-mobile.jpg' />
              <img className='main-image-1' src='https://hashingmartimages.mo.cloudinary.net/files/coh-about-us-image-1.jpg' />
            </div>
            <div className='main-about-content'>
              <div className='main-about-header'>
                <h1>About us</h1>
              </div>
              <div className='main-about-contentarea'>
                <p>
                  Coh was born in 2023 after our founder was struck by the frustrating experience of trying to find shelter while hustling (non-matching company, choppy WiFi, unfit for work spaces, more disappointments). He knew there had to be a better way to hustle and live. There is. Every day, Natives offer unique stays and experiences that make it possible for Explorers to commit to goals, connect with family and communities in an authentic way.
                </p>
              </div>
            </div>
          </main>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About