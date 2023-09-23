/* eslint-disable max-len */
import React from 'react';
import styles from './filterIcon.module.scss';

const FilterIcon = () => {
  return (
    <div className={styles.filterIcon}>
      <svg
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M35 33.3333H23.3333M16.6667 33.3333H5M35 19.9999L20 19.9999M13.3333 19.9999H5M35 6.66659L26.6667 6.66659M20 6.66659H5M23.3333 38.3333V28.3333M13.3333 24.9999L13.3333 14.9999M26.6667 11.6666L26.6667 1.66659'
          stroke='#101828'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
};

export default FilterIcon;
