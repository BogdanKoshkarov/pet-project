import React from 'react';
import styles from './accountIcon.module.scss';

const AccountIcon = () => (
  <div className={styles.accountIcon} data-testid="AccountIcon">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      {/* eslint-disable-next-line max-len */}
      <path d="M20.7 21V19C20.7 17.9391 20.2785 16.9217 19.5284 16.1716C18.7782 15.4214 17.7608 15 16.7 15H8.69995C7.63909 15 6.62167 15.4214 5.87152 16.1716C5.12138 16.9217 4.69995 17.9391 4.69995 19V21M16.7 7C16.7 9.20914 14.9091 11 12.7 11C10.4908 11 8.69995 9.20914 8.69995 7C8.69995 4.79086 10.4908 3 12.7 3C14.9091 3 16.7 4.79086 16.7 7Z" stroke="#040404" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export default AccountIcon;
