import React from 'react'

import PropTypes from 'prop-types'

import './banner.css'

const Banner = (props) => {
  return (
    <div className="banner-banner">
      <span className="banner-text before-Heading">{props.text}</span>
      <h1 className="banner-text01">
        <span>Push your finances to</span>
        <br></br>
        <span></span>
        <span></span>
        <span> the next level.</span>
      </h1>
      <span className="banner-text07">
        <span>
          Amet minim mollit non deserunt ullamco est sit
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>
          aliqua dolor do amet sint.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
      </span>
      <div className="banner-btns">
        <button className="banner-button button button-transparent">
          {props.button}
        </button>
        <button className="banner-button1 button button-gradient">
          {props.button1}
        </button>
      </div>
    </div>
  )
}

Banner.defaultProps = {
  text: 'get started',
  button1: 'Get started',
  button: 'See all plans',
}

Banner.propTypes = {
  text: PropTypes.string,
  button1: PropTypes.string,
  button: PropTypes.string,
}

export default Banner
