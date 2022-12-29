import React from 'react'

import PropTypes from 'prop-types'

import './input.css'

const Input = (props) => {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder={props.Input_placeholder}
        className="input-input input"
      />
    </div>
  )
}

Input.defaultProps = {
  Input_placeholder: 'How did you hear about us?',
}

Input.propTypes = {
  Input_placeholder: PropTypes.string,
}

export default Input
