import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './About.css'

const About = () => {
  return (
    <>
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
                  Coh was born in 2023 when two Hosts welcomed three guests to their San Francisco home, and has since grown to over 4 million Hosts who have welcomed 1.4 billion guest arrivals in almost every country across the globe. Every day, Hosts offer unique stays and experiences that make it possible for guests to connect with communities in a more authentic way.
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