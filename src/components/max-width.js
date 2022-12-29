import React from 'react'

import PropTypes from 'prop-types'

import './max-width.css'

const MaxWidth = (props) => {
  return (
    <div className={`max-width-max-width max-width ${props.rootClassName} `}>
      <div className="max-width-image"></div>
      <div className="max-width-content">
        <span className="max-width-text before-Heading">
          <span>ABout skyalert</span>
        </span>
        <span className="max-width-text2">
          <span>
            SkyAlert is part of the private sector for disasters resilient
            societies (ARISE) by the United Nations Office for Disaster Risk
            Reduction (UNDRR).
          </span>
        </span>
        <div className="max-width-container">
          <button className="max-width-button button-secondary button bg-transparent">
            <span>
              <span>Check our solutions</span>
            </span>
          </button>
        </div>
      </div>
      <div className="max-width-hero-image">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="max-width-image1"
        />
      </div>
    </div>
  )
}

MaxWidth.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/logo.6d13bf72-600h.png',
  rootClassName: '',
}

MaxWidth.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default MaxWidth
