import React, {useEffect, useMemo} from 'react';
import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
import {createPortal} from 'react-dom';

const modalRootElement = document.querySelector('#modal');

const Modal = ({isOpen, handleCloseModal, children}) => {
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    if (isOpen) {
      modalRootElement.appendChild(element);

      const handleEscapeKeyPress = (event) => {
        if (event.key === 'Escape') {
          handleCloseModal();
        }
      };

      document.addEventListener('keydown', handleEscapeKeyPress);

      return () => {
        document.removeEventListener('keydown', handleEscapeKeyPress);
        modalRootElement.removeChild(element);
      };
    }
  });

  if (isOpen) {
    return createPortal(
        <div className={styles.modal}>
          <div className={styles.modalContent}>{children}</div>
        </div>,
        element,
    );
  }

  return null;
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  children: PropTypes.node,
};

export {Modal};
