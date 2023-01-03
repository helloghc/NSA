import React from 'react'

import { Helmet } from 'react-helmet'
import Contactform from '../components/contactform'
import Top from '../components/top'
import Navbar from '../components/navbar'
import Form from '../components/form'
import './about.css'
import Footer from '../components/footer'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>about - SkyAlert US</title>
        <meta property="og:title" content="about - SkyAlert US" />
      </Helmet>
      <Top></Top>
      <Navbar></Navbar>
      <div className="about-container1">
        <h1 className="about-text">
          <span></span>
          <span className="about-text02">+ SHAKE ALERT</span>
          <br></br>
          <span></span>
          <span></span>
        </h1>
        <span className="about-text05">
          <span className="about-text06">SkyAlert</span>
          <span className="about-text07">
            {' '}
            is a global company headquartered in San Francisco, California.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <h1 className="about-text11">
        <span></span>
        <span className="about-text13">SkyAlert</span>
        <span className="about-text14">
          {' '}
          collaborates closely with the United States Geological Survey (USGS)
          to distribute Earthquake Early Warnings in California, Oregon and
          Washington.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span></span>
        <span></span>
      </h1>
      <h1 className="about-text17">
        <span></span>
        <span className="about-text19">SkyAlert</span>
        <span>
          {' '}
          is an official ShakeAlert partner to distribute EEW in the US.
        </span>
        <span></span>
        <br></br>
        <span></span>
        <span></span>
      </h1>
      <div className="about-max-width max-width">
        <div className="about-image"></div>
        <div className="about-content">
          <span className="about-text24 before-Heading">
            <span>ABout skyalert</span>
          </span>
          <span className="about-text26">
            <span>
              SkyAlert is part of the private sector for disasters resilient
              societies (ARISE) by the United Nations Office for Disaster Risk
              Reduction (UNDRR).
            </span>
          </span>
          <div className="about-container2">
            <button className="about-button button-secondary button bg-transparent">
              <span className="about-text28">
                <span>Check our solutions</span>
              </span>
            </button>
          </div>
        </div>
        <div className="about-hero-image">
          <img
            alt="image"
            src="/playground_assets/logo.6d13bf72-600h.png"
            className="about-image1"
          />
        </div>
      </div>
      <div className="about-section section-container">
        <div className="about-max-width1 max-width">
          <div className="about-image2">
            <div className="about-hero-image1">
              <img
                alt="image"
                src="/playground_assets/logo.6d13bf72-600h.png"
                className="about-image3"
              />
            </div>
          </div>
          <div className="about-content1">
            <span className="about-text30">
              <span>
                SkyAlert was founded with the mission of providing a
                technological solution to prevent and reduce human and economic
                losses when a disaster strikes. SkyAlert was founded in 2011,
                and currently protects over 400 businesses and 1.2 million
                monthly users.
              </span>
            </span>
            <div className="about-container3">
              <button className="about-button1 button-secondary button bg-transparent">
                <span className="about-text32">
                  <span>Check our solutions</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="about-text34">
        <span>Awards</span>
      </h1>
      <h1 className="about-text36">
        <span></span>
        <span>
          With the combination of SkyAlert’s award-winning technology,
          businesses and organizations can receive advance warning of shaking
          from an earthquake that has already begun.
        </span>
        <br></br>
        <span></span>
        <span></span>
      </h1>
      <div className="about-section1 section-container">
        <div className="about-max-width2 max-width">
          <img
            alt="image"
            src="/playground_assets/30under30.cfe8a6d1-500w.png"
            className="about-hero-image2"
          />
          <img
            alt="image"
            src="/playground_assets/endeavor.036b3a5d-200h.png"
            className="about-hero-image3"
          />
          <img
            alt="image"
            src="/playground_assets/under35.227a9b7d-500w.png"
            className="about-hero-image4"
          />
          <img
            alt="image"
            src="/playground_assets/microsoft.5040e03b-200h.png"
            className="about-hero-image5"
          />
        </div>
      </div>
      <h1 className="about-text41">
        <span>Let’s talk about business solutions!</span>
        <br></br>
        <span></span>
      </h1>
      <span className="about-text44">
        We have the perfect solution, shortly an advisor will assist you
      </span>
      <Contactform></Contactform>
      <Footer></Footer>
    </div>
  )
}

export default About
