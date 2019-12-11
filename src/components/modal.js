import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { ModalOverlay, ModalWrapper, ModalBody } from 'styles/modalStyles';

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <ModalOverlay />
          <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
            <ModalBody>
              <img
                src="http://lorempixel.com/800/600/people/"
                onClick={hide}
                alt="modalImg"
              />
            </ModalBody>
          </ModalWrapper>
        </>,
        document.body
      )
    : null;

export default Modal;
