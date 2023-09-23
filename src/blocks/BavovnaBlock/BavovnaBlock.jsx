import React from 'react';
import styles from './BavovnaBlock.module.scss';

const BavovnaBlock = () => (
  <div className={styles.bavovnaBlock} data-testid="BavovnaBlock">
    <span className={styles.title}>BAVOVNA IS A UKRAINIAN BRAND of sustainable clothes</span>
    <span className={styles.content}>
      We are dedicated to bringing you a wide range of sustainable
      products that help reduce your ecological footprint without compromising on quality or style.
    </span>
    <button className={styles.button}>
      <span>
        shop now
      </span>
    </button>
  </div>
);

export default BavovnaBlock;
