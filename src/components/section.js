import React from 'react'

import PropTypes from 'prop-types'

import Banner from './banner'
import './section.css'

const Section = (props) => {
  return (
    <div className="section-section section-container">
      <div className="section-max-width max-width">
        <div className="section-f-a-q">
          <div className="section-questions">
            <span className="section-text before-Heading">{props.text}</span>
            <h1 className="section-text01">
              <span className="section-text02">
                Frequently Asked
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span className="section-text04">Questions</span>
            </h1>
            <div data-role="Accordion" className="question">
              <div data-type="accordion-header" className="section-trigger">
                <span className="section-text05">{props.text1}</span>
                <svg viewBox="0 0 1024 1024" className="section-icon">
                  <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                </svg>
              </div>
              <div data-type="accordion-content" className="question-content">
                <span className="section-text06">{props.text2}</span>
              </div>
            </div>
            <div data-role="Accordion" className="question">
              <div data-type="accordion-header" className="section-trigger1">
                <span className="section-text07">{props.text3}</span>
                <svg viewBox="0 0 1024 1024" className="section-icon2">
                  <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                </svg>
              </div>
              <div data-type="accordion-content" className="question-content">
                <span className="section-text08">{props.text4}</span>
              </div>
            </div>
            <div data-role="Accordion" className="question">
              <div data-type="accordion-header" className="section-trigger2">
                <span className="section-text09">{props.text5}</span>
                <svg viewBox="0 0 1024 1024" className="section-icon4">
                  <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                </svg>
              </div>
              <div data-type="accordion-content" className="question-content">
                <span className="section-text10">{props.text6}</span>
              </div>
            </div>
            <div data-role="Accordion" className="question">
              <div data-type="accordion-header" className="section-trigger3">
                <span className="section-text11">{props.text7}</span>
                <svg viewBox="0 0 1024 1024" className="section-icon6">
                  <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                </svg>
              </div>
              <div data-type="accordion-content" className="question-content">
                <span className="section-text12">{props.text8}</span>
              </div>
            </div>
          </div>
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="section-image"
          />
        </div>
        <Banner></Banner>
      </div>
    </div>
  )
}

Section.defaultProps = {
  text3: 'Do you operate in United Stated?',
  text8:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  text6:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  text: 'faq',
  image_src: '/playground_assets/group%202-1200w.png',
  text1: 'Is this a Free or Paid service?',
  text4:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  text7: 'Do you have an iOS or Android app?',
  text2:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  text5: 'Is this a globally available bank?',
  image_alt: 'image',
}

Section.propTypes = {
  text3: PropTypes.string,
  text8: PropTypes.string,
  text6: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  text7: PropTypes.string,
  text2: PropTypes.string,
  text5: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Section
