import React from 'react';
import styles from './AboutBlock.module.scss';

const AboutBlock = () => {
  return (
    <div className={styles.aboutBlock}>
      <div className={styles.imgs}>
        <div className={styles.mainImg}>
          <img src='./img/images/AboutUs/aboutBlock_1.jpg' alt='img_1' />
        </div>
        <div className={styles.secondImg}>
          <img src='./img/images/AboutUs/aboutBlock_2.jpg' alt='img_2' />
        </div>
      </div>
      <div className={styles.description}>
        <h2 className={styles.title}>
          <span>About&#x20;</span>
          bavovna
        </h2>
        <p className={styles.text}>
          BAVOVNA is a women&#39;s clothing brand that cares about the health
          and comfort of its customers. All products of this brand are made from
          organic cotton, which is grown without chemical fertilizers and
          pesticides. Thus, BAVOVNA clothes are environmentally friendly and
          safe for health.
        </p>
      </div>
    </div>
  );
};

export default AboutBlock;
