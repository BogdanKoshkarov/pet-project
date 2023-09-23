import React from 'react';
import styles from './SaleBlock.module.scss';

const SaleBlock = () => (
  <div className={styles.saleBlock} data-testid="SaleBlock">
    <div className={styles.contentBlock}>
      <span className={styles.title}>summer sale</span>
      <button className={styles.button}>
        <span>shop now</span>
      </button>
    </div>

  </div>
);

export default SaleBlock;
