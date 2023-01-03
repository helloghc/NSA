import React from 'react'

import { Helmet } from 'react-helmet'

import Top from '../components/top'
import Navbar from '../components/navbar'
import Form from '../components/form'
import Footer from '../components/footer'
import Contactform from '../components/contactform'
import './how.css'

const How = (props) => {
  return (
    <div className="how-container">
      <Helmet>
        <title>how - SkyAlert US</title>
        <meta property="og:title" content="how - SkyAlert US" />
      </Helmet>
      <Top></Top>
      <Navbar></Navbar>
      <div className="how-container1">
        <h1 className="how-text">
          <span className="how-text01">How SkyAlert EEW works?</span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <br></br>
          <span></span>
          <span></span>
        </h1>
        <div className="how-container2">
          <div className="how-card">
            <div className="how-info">
              <svg viewBox="0 0 1024 1024" className="how-icon">
                <path d="M896 150q34 0 60 25t26 59v598q0 34-26 60t-60 26h-768q-34 0-60-26t-26-60v-598q0-34 26-59t60-25h256v84h-256v598h768v-598h-256v-84h256zM512 704l-170-170h128v-384h84v384h128z"></path>
              </svg>
              <span className="how-text08">
                <span>USGS ShakeAlert</span>
                <br></br>
                <span></span>
              </span>
              <span className="how-text11">
                <span>
                  The USGS ShakeAlert System issues earthquake early warnings
                  (ShakeAlerts) from a network system that detects significant
                  earthquakes through its sensors.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  The USGS and its partners have installed hundreds of
                  seismometers throughout California, Oregon and Washington.
                  Most of them are along faults that can produce earthquakes.
                </span>
              </span>
            </div>
          </div>
          <div className="how-card1">
            <div className="how-info1">
              <svg viewBox="0 0 1024 1024" className="how-icon2">
                <path d="M512 810q58 0 126-33t106-79l112 66q-128 174-344 174-176 0-301-125t-125-301q0-166 111-287t273-137v128q-108 16-182 100t-74 196q0 124 87 211t211 87zM554 88q162 16 273 137t111 287q0 96-36 174l-112-66q20-56 20-108 0-112-74-196t-182-100v-128z"></path>
              </svg>
              <span className="how-text15">
                <span>Data Processing</span>
                <br></br>
                <span></span>
              </span>
              <span className="how-text18">
                <span>
                  SkyAlert activates the early warning Communications platform
                  and transmits the warning via our Critical Warning Platform.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
          <div className="how-card2">
            <div className="how-info2">
              <svg viewBox="0 0 1024 1024" className="how-icon4">
                <path d="M490 384q0-44 32-75t76-31 75 31 31 75-31 75-75 31-76-31-32-75zM326 112q-112 112-112 272t112 272l-60 60q-138-138-138-332t138-332zM726 854q34 0 59-26t25-60h86q0 70-50 120t-120 50q-38 0-70-14-82-42-118-152-14-44-72-88-82-60-122-134-46-82-46-166 0-126 87-212t213-86 212 86 86 212h-86q0-90-61-152t-151-62-152 62-62 152q0 64 34 126 28 54 100 108 80 60 102 128 26 76 72 100 16 8 34 8z"></path>
              </svg>
              <span className="how-text22">
                <span>Calculation and Delivery</span>
                <br></br>
                <span></span>
              </span>
              <span className="how-text25">
                <span>
                  SkyAlert calculates the expected shaking intensity and time to
                  impact on an specific location and delivers the alert to the
                  end user.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <h1 className="how-text29">
        <span>
          The reason to integrate EEW into our lives.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
      </h1>
      <span className="how-text31">
        With our technology, know in advance what level of shaking intensity to
        expect and how much time (countdown) you have to prepare before the
        earthquake strikes your location.
      </span>
      <div className="how-section section-container">
        <div className="how-max-width max-width">
          <div className="how-image">
            <img
              alt="image"
              src="/playground_assets/captura%20de%20pantalla%202022-08-02%20a%20la%5Bs%5D%2011.17.34-1200w.png"
              className="how-hero-image"
            />
          </div>
          <div className="how-content">
            <span className="how-text32">
              <span>
                The SkyAlert Earthquake Early Warning System (EEWS) consists of
                our Critical Warning Platform (the Cloud) and our IoT Solutions.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                When an earthquake happens, the SkyAlert Critical Warning
                Platform (CWP) receives the earthquake data from the USGS and
                utilizes the location of the end user to calculate the intensity
                of local shaking. It will also calculate the amount of time
                before the shaking will occur.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                For significant shaking intensities, SkyAlert issues a
                customizable audio warning letting the user know what intensity
                of shaking to expect as well as how much time before the
                earthquake strikes.
              </span>
            </span>
            <div className="how-container3">
              <button className="how-button button-secondary button bg-transparent">
                <span className="how-text38">
                  <span>Check our solutions</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="how-text40">
        <span>Education, Outreach and Diffusion</span>
        <br></br>
        <span></span>
      </h1>
      <h1 className="how-text43">
        <span></span>
        <span>
          It is not only being warned but what you can do with the time Early
          Warning provides before the earthquake strikes.
        </span>
        <span></span>
        <span></span>
        <br></br>
        <span></span>
        <span></span>
      </h1>
      <img
        alt="image"
        src="/playground_assets/captura%20de%20pantalla%202022-07-14%20a%20la%5Bs%5D%2018.30.30-1500w.png"
        className="how-image1"
      />
      <div className="how-container4">
        <h1 className="how-text50">Drop</h1>
        <h1 className="how-text51">Cover</h1>
        <h1 className="how-text52">Hold on</h1>
      </div>
      <h1 className="how-text53">
        <span></span>
        <br></br>
        <span></span>
        <span>
          The device allows its users to organize periodical earthquake drills.
          Improve your staff and students earthquake response!
        </span>
        <span></span>
        <br></br>
        <span></span>
        <span></span>
      </h1>
      <h1 className="how-text60">
        <span>Let’s talk about business solutions!</span>
        <br></br>
        <span></span>
      </h1>
      <span className="how-text63 before-Heading">
        We have the perfect solution, shortly an advisor will assist you
      </span>
      <Contactform></Contactform>
      <Footer></Footer>
    </div>
  )
}

export default How
