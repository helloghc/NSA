import React from 'react'

import PropTypes from 'prop-types'

import './top.css'

const Top = (props) => {
  return (
    <div className={`top-container ${props.rootClassName} `}>
      <span className="top-text">{props.text}</span>
      <span className="top-text1">{props.text1}</span>
      <span className="top-text2">{props.text2}</span>
    </div>
  )
}

Top.defaultProps = {
  rootClassName: '',
  text1: 'contact@skyalertusa.com',
  text2: '(628) 280-8315',
  text: 'San Francisco, CA 94114, 2261 Market Street #4449',
}

Top.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
}

export default Top
