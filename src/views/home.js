import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Top from '../components/top'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Card from '../components/card'
import Footer from '../components/footer'
import Form from '../components/form'
import Licencitarios from '../components/licencitarios'
import Contactform from '../components/contactform'
import './home.css'


const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>SkyAlert US</title>
        <meta property="og:title" content="SkyAlert US" />
      </Helmet>
      <Top rootClassName="top-root-class-name"></Top>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <div className="home-navbar navbar-container">
        <div className="home-max-width max-width">
          <div className="home-logo">
            <Link to="/" className="home-navlink">
              <img
                alt="image"
                src="/playground_assets/logo.6d13bf72-200h.png"
                className="home-image"
              />
            </Link>
          </div>
          <div className="home-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
        <svg viewBox="0 0 1024 1024" className="home-icon2">
          <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
        </svg>
      </div>
      <Hero></Hero>
      <div className="home-section section-container">
        <div className="home-max-width1 max-width">
          <div className="home-image1">
            <img
              alt="image"
              src="/playground_assets/diverse-people-working-in-the-office-1200w.jpg"
              className="home-hero-image"
            />
          </div>
          <div className="home-content">
            <span className="home-text before-Heading">
              <span>About US</span>
            </span>
            <span className="home-text02">
              <span>
                Since 2011 we have been developing technology to alert
                earthquakes and coverage about geological hazards.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                SkyAlert provides Earthquake Early Warning (EEW) services to
                over 400 business customers in Mexico and USA.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                With our technology and training, we help to significantly
                decrease the number of injuries and fatalities seen in the
                aftermath of an earthquake.
              </span>
            </span>
            <div className="home-container1">
              <Link
                to="/solutions"
                className="home-navlink1 button-secondary button bg-transparent"
              >
                <span>
                  <span>Check our solutions</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section1 section-container">
        <div className="home-max-width2 max-width">
          <div className="home-content1">
            <span className="home-text10 before-Heading">
              distribute Earthquake Early Warnings
            </span>
            <h1 className="home-text11">
              <span className="home-text12">
                We are an official partner United States Geological Survey
                (USGS)
              </span>
            </h1>
            <span className="home-text13">
              We are an official partner of the United States Geological Survey
              (USGS) and collaborate closely to distribute Earthquake Early
              Warnings.
            </span>
          </div>
          <div className="home-image2">
            <img
              alt="image"
              src="/playground_assets/2018nshm-longterm-1200w.jpeg"
              className="home-hero-image1"
            />
          </div>
        </div>
      </div>
      <div className="home-section2 section-container">
        <div className="home-max-width3 max-width">
          <img
            alt="image"
            src="/playground_assets/captura%20de%20pantalla%202022-07-01%20a%20la%5Bs%5D%202.26.56-1200w.png"
            className="home-hero-image2"
          />
          <div className="home-content2">
            <span className="home-text14 before-Heading">ARISE</span>
            <h1 className="home-text15">
              <span>
                We are part of the United Nations Private Sector Alliance for
                Disaster Resilient Societies.
              </span>
              <span></span>
            </h1>
          </div>
        </div>
      </div>
      <div className="home-section3 section-container">
        <div className="home-max-width4 max-width">
          <div className="home-image3">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1555453337-32dff9bb054d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxzY2hvb2xzfGVufDB8fHx8MTY1NjY2MDE5NQ&amp;ixlib=rb-1.2.1&amp;w=1200"
              className="home-hero-image3"
            />
          </div>
          <div className="home-content3">
            <span className="home-text18 before-Heading">USA</span>
            <h1 className="home-text19">Global clients and companies</h1>
            <div className="home-step">
              <div className="home-number">
                <span className="home-text20">
                  <span>2000+</span>
                </span>
              </div>
              <div className="home-container2">
                <span className="home-text22">Business Clients</span>
              </div>
            </div>
            <div className="home-step1">
              <div className="home-number1">
                <span className="home-text23">
                  <span>60+</span>
                </span>
              </div>
              <div className="home-container3">
                <span className="home-text25">Schools</span>
              </div>
            </div>
            <div className="home-step2">
              <div className="home-number2">
                <span className="home-text26">
                  <span>30+</span>
                </span>
              </div>
              <div className="home-container4">
                <span className="home-text28">Universities</span>
              </div>
            </div>
            <div className="home-step3">
              <div className="home-number3">
                <span className="home-text29">
                  <span>20+</span>
                </span>
              </div>
              <div className="home-container5">
                <span className="home-text31">Hospitals</span>
              </div>
            </div>
            <div className="home-step4">
              <div className="home-number4">
                <span className="home-text32">
                  <span>30+</span>
                </span>
              </div>
              <div className="home-container6">
                <span className="home-text34">Goverment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container7">
        <img
          alt="image"
          src="/playground_assets/captura%20de%20pantalla%202022-07-01%20a%20la%5Bs%5D%202.20.40-1400w.png"
          className="home-image4"
        />
      </div>
      <div className="home-section4 section-container">
        <h1 className="home-text35">
          <span>EARTHQUAKE EARLY WARNING SOLUTIONS</span>
          <span></span>
          <br></br>
          <span></span>
        </h1>
        <div className="home-max-width5 max-width">
          <span className="home-text39 before-Heading">
            <span></span>
            <span>(HARDWARE)</span>
            <span></span>
          </span>
          <h1 className="home-text43">
            <span></span>
          </h1>
          <div className="home-cards-container">
            <Card
              text="Industries"
              text1="Turn on emergency lights"
              text2="Reduce injuries by getting hundred of employees to a safe spot"
              text3="Automatically shut off factory lines, gas valves and electrical power supply\n"
              rootClassName="card-root-class-name2"
            ></Card>
            <Card
              text="Public Services &amp; Transportation"
              text1="Turn on red lights to avoid vehicles to cross bridges and enter tunnels\n"
              text2="Shut down processes at critical facilities\n"
              text3="Open gates for first responders"
              rootClassName="card-root-class-name"
            ></Card>
          </div>
        </div>
      </div>
      <h1 className="home-text45">Let’s talk about business solutions!</h1>
      <span className="home-text46 before-Heading">
        We have the perfect solution, shortly an advisor will assist you
      </span>
      <Contactform></Contactform>
      <Footer></Footer>
    </div>
  )
}

export default Home
