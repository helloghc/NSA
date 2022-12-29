import React from 'react'

import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero-hero hero-container section-container">
      <div className="hero-max-width max-width">
        <div className="hero-content">
          <span className="hero-subtitle before-Heading">{props.subtitle}</span>
          <h1 className="hero-title">
            <span className="hero-text">
              We provide earthquake early warning solutions
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h1>
          <span className="hero-description">{props.description}</span>
          <div className="hero-container">
            <button className="hero-button button">{props.button}</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            alt={props.graphic/* - top_alt*/}
              src={props.graphic/* - top_src*/}
            className="hero-graphic-top"
          />
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  'graphic-top_src': '/playground_assets/union-400h.png',
  'graphic-top_alt': 'image',
  button: 'Request a demo',
  subtitle: 'IN CALIFORNIA, OREGON AND WASHINGTON',
  description:
    'The goal of SkyAlert is to promote resilience in the face of an earthquake. With our technology and training, we help organizations significantly decrease the number of injuries, fatalities and infrastructure damage seen in the aftermath of an earthquake.',
}

Hero.propTypes = {
  'graphic-top_src': PropTypes.string,
  'graphic-top_alt': PropTypes.string,
  button: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
}

export default Hero
