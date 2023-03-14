import React, { useState, useRef } from 'react'
import ButtonDefault from '../components/ButtonDefault'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer } from '@react-google-maps/api'
import Loading from '../components/Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'


const center = { lat: 48.8584, lng: 2.2945 }
const google = window.google


const Experiences = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places']
  })

  const [loading, setLoading] = useState(true);
  const [map, setMap] = useState(/** @type google.maps.map */(null));
  const [directionRes, setDirectionRes] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef()

  if (!isLoaded) {
    return loading && <Loading />
  }

  async function calcRoute() {
    if (originRef.current.value === '' || destinationRef.current.value === '') {
      return
    }
    const directionService = new google.maps.DirectionsService()
    const results = await directionService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING
    })
    setDirectionRes(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }
  
  function clearRoute() {
    setDirectionRes(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destinationRef.current.value = ''
  }

  return (
    <>
      <Navbar />
      <main className='product-main'>
      <div>
        <div>
          <div className='exp-map-setup'>
            <div>
              <div className='exp-map-setup-inner1'>
                <div className='exp-map-content'>
                  <div className='exp-map-content1'>
                    <h2><span>Coh it.</span> <br />Find a space</h2>
                    <div className='exp-map-searchcont'>
                      <>
                        <div className='exp-map-searchflex'>
                          <Autocomplete>
                            <input type='text' placeholder='Origin' ref={originRef}/>
                          </Autocomplete>
                          <Autocomplete>
                            <input type='text' placeholder='Destination' ref={destinationRef} />
                          </Autocomplete>
                        </div>
                        <div style={{marginTop: '2rem'}} className='exp-map-searchflex'>
                          <p><b>Distance:</b>&nbsp;{distance}</p>
                          <button onClick={() => map.panTo(center)} className="exp-map-arrowbtn">
                            <FontAwesomeIcon icon={faLocationArrow} />
                          </button>
                          <p><b>Duration:</b>&nbsp;{duration}</p>
                        </div>
                        <div className='exp-map-search-clear'>
                        <button onClick={clearRoute} className="exp-map-arrowbtn">
                            <p>Reset</p>
                          </button>
                        </div>
                        <div>
                          <button onClick={calcRoute} className='exp-map-calc-btn'>Calculate route</button>
                        </div>
                      </>
                    </div>
                    <div></div>
                  </div>
                </div>

                <div className='exp-map-mapdiv'>
                  <div className='exp-map-map1'>
                    <div className='exp-map-container'>
                      <div className='exp-map1'>
                        <div className='exp-map2'>
                          <div className='exp-map3'>
                            <div className='exp-map4'>
                              {/* this div houses the button */}
                              <div className='exp-map-div1'>
                                <button>Natives await, cohnect now</button>
                              </div>

                              {/* this div houses the map */}
                              <div style={{width: '100%', height: '100%'}}>
                                {/* display Google Map */}
                                <GoogleMap center={center} zoom={15} mapContainerStyle={{width: '100%', height: '100%'}} options={{streetViewControl: false, mapTypeControl: false, fullscreenControl: false}} 
                                onLoad={map => setMap(map)}
                                >
                                  <Marker position={center} />
                                  {directionRes && <DirectionsRenderer directions={directionRes} />}
                                  {/* display markers, directions */}
                                </GoogleMap>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default Experiences