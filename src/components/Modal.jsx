import React, { useEffect, useState } from 'react';
import './styles/Modal.css';
import group from '../assets/hand.svg';
import house from '../assets/house.svg';
import human from '../assets/training.svg';
import env from '../assets/environment.svg';

const Modal = ({ show, onClose, buttonPosition, color, children, image }) => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [modalStyle, setModalStyle] = useState({});

  useEffect(() => {
    if (show) {
      const { top, left } = buttonPosition;
      setModalStyle({
        top: `${top}px`,
        left: `${left}px`,
        backgroundColor: color,
        transform: 'scale(0) translate(-50%, -50%)'
      });
      setShowBackdrop(true);
      setTimeout(() => {
        setModalStyle({
          top: '50%',
          left: '50%',
          backgroundColor: color,
          transform: 'scale(1) translate(-50%, -50%)'
        });
        setShowContent(true);
      }, 10); // Delay to trigger the transition
    } else {
      setShowContent(false);
      setTimeout(() => setShowBackdrop(false), 300); // Duration of the transition
    }
  }, [show, buttonPosition, color]);

  return (
    <>
      {showBackdrop && (
        <div className={`modal-backdrop ${showContent ? 'show' : ''}`}>
          <div
            className={`modal-content ${showContent ? 'show' : ''}`}
            style={modalStyle}
          >
            <button className="close-button" onClick={onClose}>X</button>
            <img src={image} alt="Modal Image" className="modal-image" />
            <div className="modal-text">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
