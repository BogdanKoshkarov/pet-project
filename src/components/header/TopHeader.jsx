import React from 'react';
import styles from './TopHeader.module.scss';

const TopHeader = () => {
  return (
    <div className={styles.topHeader}>
      <p className={styles.topTitle}>10% discount on the summer collection</p>
    </div>
  );
};

export default TopHeader;
