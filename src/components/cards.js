import React from 'react'

import PropTypes from 'prop-types'

import './cards.css'

const Cards = (props) => {
  return (
    <div className={`cards-container ${props.rootClassName} `}>
      <div className="cards-card">
        <div className="cards-info">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="cards-image"
          />
          <span className="cards-text">{props.text}</span>
          <span className="cards-text1">{props.text1}</span>
        </div>
      </div>
      <div className="cards-card1">
        <div className="cards-info1">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="cards-image1"
          />
          <span className="cards-text2">{props.text2}</span>
          <span className="cards-text3">{props.text3}</span>
        </div>
      </div>
      <div className="cards-card2">
        <div className="cards-info2">
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className="cards-image2"
          />
          <span className="cards-text4">{props.text4}</span>
          <span className="cards-text5">{props.text5}</span>
        </div>
      </div>
    </div>
  )
}

Cards.defaultProps = {
  image_alt: 'image',
  text5: 'technology with award-winning design.',
  image_alt1: 'image',
  text4: 'State-of-the-art',
  image_src: '/playground_assets/bell.ee61c7d7-200h.png',
  text2: 'Customized plans',
  text1: 'for California, Washington and Oregon.',
  text3: 'for your company.',
  text: 'Earthquake Early Warnings',
  image_src1: '/playground_assets/buildings.c583a513-200h.png',
  image_src2: '/playground_assets/trophy.5c6e7b1f-200h.png',
  rootClassName: '',
  image_alt2: 'image',
}

Cards.propTypes = {
  image_alt: PropTypes.string,
  text5: PropTypes.string,
  image_alt1: PropTypes.string,
  text4: PropTypes.string,
  image_src: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  image_src1: PropTypes.string,
  image_src2: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt2: PropTypes.string,
}

export default Cards
