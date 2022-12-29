import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <input type="radio" name="radio" className="component-radiobutton" />
      <label className="component-text">{props.text12}</label>
    </div>
  )
}

AppComponent.defaultProps = {
  text12: 'Facebook',
}

AppComponent.propTypes = {
  text12: PropTypes.string,
}

export default AppComponent
