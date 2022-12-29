import React from 'react'

import PropTypes from 'prop-types'

import './max-width1.css'

const MaxWidth1 = (props) => {
  return (
    <div className={`max-width1-max-width max-width ${props.rootClassName} `}>
      <div className="max-width1-image"></div>
      <div className="max-width1-content">
        <div className="max-width1-info">
          <div className="max-width1-container"></div>
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="max-width1-image1"
          />
        </div>
        <span className="max-width1-text">
          <span>
            SkyAlert Desk is a software for seismic warning and other natural
            hazards and it&apos;s
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            designed primarily for early warning in small businesses, branch
            offices and for employees at home.
          </span>
        </span>
        <span className="max-width1-text03"></span>
        <span className="max-width1-text04">
          <span>
            It can be downloaded to any computer or sales terminal with Windows,
            Mac or Linux
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>Early Warning massive distribution at a low cost</span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            Alertas con Tiempo Estimado de Arribo (TEA) e Intensidad Local
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>Easy Installation without the need of external hardware</span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            Faster and more accurate alerts. All users receive notifications at
            the same time
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            Send key corporate messages to your employees; they can be organized
            in groups from an admin profile
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>Immediate aftermath damage report from each branch</span>
          <br></br>
          <span></span>
          <br></br>
          <span>Device monitoring to ensure connectivity</span>
        </span>
      </div>
      <div className="max-width1-hero-image">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="max-width1-image2"
        />
      </div>
    </div>
  )
}

MaxWidth1.defaultProps = {
  rootClassName: '',
  image_alt1: 'image',
  image_alt: 'image',
  image_src: '/playground_assets/logo.6d13bf72-800h.png',
  image_src1: '/playground_assets/suite-de-soluciones_081-200h-200h.png',
}

MaxWidth1.propTypes = {
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
}

export default MaxWidth1
