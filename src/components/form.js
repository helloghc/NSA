import React from 'react'

import PropTypes from 'prop-types'

import AppComponent from './component'
import Footer from './footer'
import './form.css'

const Form = (props) => {
  return (
    <div className={`form-container ${props.rootClassName} `}>
      <div className="form-container1">
        <div className="form-container2">
          <form className="form-form">
            <input
              type="text"
              placeholder={props.Input_placeholder}
              className="form-input input"
            />
            <input
              type="text"
              placeholder={props.Input_placeholder1}
              className="form-input1 input"
            />
            <input
              type="text"
              placeholder={props.Input_placeholder2}
              className="form-input2 input"
            />
            <input
              type="text"
              placeholder={props.Input_placeholder3}
              className="form-input3 input"
            />
          </form>
          <form className="form-form1">
            <label className="form-text">{props.text1}</label>
            <select className="form-select">
              <option value="Option_1">
                250 +
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </option>
              <option value="Option_2">50 to 250 +</option>
              <option value="Option_3">50 -</option>
            </select>
            <label className="form-text1">{props.text11}</label>
            <div>
              <AppComponent></AppComponent>
              <AppComponent text12="Instagram"></AppComponent>
              <AppComponent text12="Twitter"></AppComponent>
              <AppComponent text12="Website"></AppComponent>
              <AppComponent text12="Recommendation"></AppComponent>
              <AppComponent text12="Other\n"></AppComponent>
            </div>
            <textarea
              placeholder={props.textarea_placeholder}
              className="form-textarea textarea"
            ></textarea>
            <button className="form-button button">{props.button}</button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

Form.defaultProps = {
  text11: 'How did you hear about us?',
  button: 'Submit',
  Input_placeholder1: 'Email:',
  Input_placeholder3: '10 digit phone number:',
  Input_placeholder2: 'Company:',
  textarea_placeholder: 'Another topics or requests:',
  rootClassName: '',
  text1: 'How many people do you want to alert?',
  Input_placeholder: 'Name',
}

Form.propTypes = {
  text11: PropTypes.string,
  button: PropTypes.string,
  Input_placeholder1: PropTypes.string,
  Input_placeholder3: PropTypes.string,
  Input_placeholder2: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  Input_placeholder: PropTypes.string,
}

export default Form
