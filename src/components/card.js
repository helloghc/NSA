import React from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <div className={`card-card ${props.rootClassName} `}>
      <div className="card-info">
        <span className="card-text">{props.text}</span>
        <span className="card-text1">{props.text2}</span>
        <span className="card-text2">{props.text1}</span>
        <span className="card-text3">{props.text3}</span>
      </div>
    </div>
  )
}

Card.defaultProps = {
  text3: 'Text',
  text1: 'Text',
  text2: 'Text',
  rootClassName: '',
  text: 'Business',
}

Card.propTypes = {
  text3: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Card
