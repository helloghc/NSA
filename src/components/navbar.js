import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-navbar navbar-container ${props.rootClassName} `}>
      <div className="max-width">
        <div className="navbar-logo">
          <Link to="/" className="navbar-navlink">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="navbar-image"
            />
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/" className="navbar-text navbar-Link">
            {props.Text}
          </Link>
          <Link to="/about" className="navbar-navlink1 navbar-Link">
            {props.text}
          </Link>
          <Link to="/solutions" className="navbar-navlink2 navbar-Link">
            {props.text1}
          </Link>
          <Link to="/how" className="navbar-navlink3 navbar-Link">
            {props.text2}
          </Link>
          <span className="navbar-text1 navbar-Link">{props.text3}</span>
          <Link to="/form" className="navbar-navlink4 button button-primary">
            {props.button1}
          </Link>
        </div>
        <div className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon">
            <path
              d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  text1: 'Solutions',
  image_src: '/playground_assets/logo.6d13bf72-200h.png',
  text: 'About us',
  text3: 'Press',
  rootClassName: '',
  Text: 'Home',
  text2: 'How it works',
  button1: 'Request a Demo',
  image_alt: 'image',
}

Navbar.propTypes = {
  text1: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  Text: PropTypes.string,
  text2: PropTypes.string,
  button1: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Navbar
