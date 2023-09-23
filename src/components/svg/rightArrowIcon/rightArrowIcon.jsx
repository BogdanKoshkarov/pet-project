import React from 'react';
import styles from './rightArrowIcon.module.scss';

const RightArrowIcon = () => (
  <div className={styles.rightArrowIcon} data-testid="RightArrowIcon">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      {/* eslint-disable-next-line max-len */}
      <path d="M23.3337 30L21.0003 27.5833L26.917 21.6667H6.66699V18.3333H26.917L21.0003 12.4167L23.3337 10L33.3337 20L23.3337 30Z" fill="#040404"/>
    </svg>
  </div>
);
export default RightArrowIcon;
