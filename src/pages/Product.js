import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Product.css'
import ButtonDefault from '../components/ButtonDefault'

const Product = () => {
  return (
    <>
      <Navbar />
      <main className='product-main'>
        <div>
          <div className='product-setup'>
            <h1>Cohnect. Pack. Go.</h1>
            <div className='product-setup-image'>
              <img src='https://hashingmartimages.mo.cloudinary.net/files/coh-product-artboard.png' />
            </div>
            <div className='product-setup-image-mobile'>
              <img src='https://hashingmartimages.mo.cloudinary.net/files/coh-product-artboard-small.png' />
            </div>
            <div className='product-setup-content'>
              <div className='product-setup-contents'>
                <h3>End-to-end arrangements</h3>
                <div>
                  Communicate with each other through the app's messaging system to discuss potential home-sharing, experience arrangements and ask questions prior to booking.
                </div>
              </div>
              <div className='product-setup-contents'>
                <h3>A filtered search for every of your bookings</h3>
                <div>
                  Search for available homes, experiences based on desired location, price range, and amenities. Also filter results by the Native's age, gender, interests, and other criteria.
                </div>
              </div>
              <div className='product-setup-contents'>
                <h3>Unique support from Coh</h3>
                <div>
                  Natives and Explorers get direct access to the specialized support from Coh on everything ranging from disputes, arrangements, bookings, account, billing, moving etc.,
                </div>
              </div>
            </div>
            <ButtonDefault />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Product