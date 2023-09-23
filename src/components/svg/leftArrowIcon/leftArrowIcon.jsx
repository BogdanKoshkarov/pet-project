import React from 'react';
import styles from './leftArrowIcon.module.scss';

const LeftArrowIcon = () => (
  <div className={styles.leftArrowIcon} data-testid="LeftArrowIcon">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      {/* eslint-disable-next-line max-len */}
      <path d="M16.667 30L6.66699 20L16.667 10L19.0003 12.4167L13.0837 18.3333H33.3337V21.6667H13.0837L19.0003 27.5833L16.667 30Z" fill="#040404"/>
    </svg>
  </div>
);

export default LeftArrowIcon;
