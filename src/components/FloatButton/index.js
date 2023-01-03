import React from 'react';
import PropTypes from 'prop-types';
import { ModalContext } from '../../context';
import { Anchor, ButtonWhatsapp, ButtonInfo } from './styles';

const FloatButton = ({sticked, type}) =>
    type === 'whatsapp' ?
    <Anchor rel="noopener noreferrer" href="https://wa.me/525579020029?text=I%20would%20like%20to%20know%20more%20about%20SkyAlert%20" target="_blank" className="eride">
        <ButtonWhatsapp sticked={sticked}>
            <i className="fa fa-laptop my-float "></i>
            Support SkyAlert
        </ButtonWhatsapp>
    </Anchor>
    :
    <ModalContext.Consumer>
    {({toogleOpen}) => (
      <ButtonInfo sticked={sticked} className="float_cotiza eride" onClick={toogleOpen}>
         <i className="fa-solid fa-house-laptop my-float"></i>
           Quote SkyAlert
      </ButtonInfo>
    )}
  </ModalContext.Consumer>;

FloatButton.propTypes = {
    type: PropTypes.oneOf(['whatsapp', 'info']).isRequired,
    sticked: PropTypes.bool,
}

FloatButton.defaultProps = {
    sticked: false,
}

export default FloatButton;
