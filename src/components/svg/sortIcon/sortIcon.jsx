import React from 'react';
import styles from './sortIcon.module.scss';

const SortIcon = () => {
  return (
    <div className={styles.sortIcon}>
      <svg
        // width='40'
        // height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10 20H30M5 10H35M15 30H25'
          stroke='#101828'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
};

export default SortIcon;
