import React, {Component} from "react";
import PropTypes from 'prop-types';
import "./Popup.scss";

class PopupComponent extends Component {
  render(){
    const {show, children, onClose} = this.props;

    return (
      <div className="popup" style={{display: show ? "block" : "none"}}>
        <div className="popup__back" onClick={onClose} />
        <div className="popup__window">
          <a href="" className="popup__close" onClick={onClose}><span className="icon icon-x" /></a>
          {children}
        </div>
      </div>
    );
  }
}

PopupComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.any,
  onClose: PropTypes.func
}

export const Popup = PopupComponent;
