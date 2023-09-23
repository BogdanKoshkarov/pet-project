import React from 'react';
import styles from './searchIcon.module.scss';

const SearchIcon = () => (
  <div className={styles.searchIcon} data-testid="SearchIcon">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      {/* eslint-disable-next-line max-len */}
      <path d="M21.7 21L17.35 16.65M19.7 11C19.7 15.4183 16.1182 19 11.7 19C7.28167 19 3.69995 15.4183 3.69995 11C3.69995 6.58172 7.28167 3 11.7 3C16.1182 3 19.7 6.58172 19.7 11Z" stroke="#040404" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export default SearchIcon;
