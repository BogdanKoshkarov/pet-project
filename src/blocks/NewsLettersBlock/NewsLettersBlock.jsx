import React from 'react';
import styles from './NewsLettersBlock.module.scss';

const NewsLettersBlock = () => (
  <div className={styles.newsLettersBlock} data-testid="NewsLettersBlock">
    <span className={styles.title}>
      Newsletter
    </span>
    <span className={styles.content}>
        SIGN UP TO GET 10% OFF ON YOUR FIRST ORDER, RELEASE NOTIFICATIONS
        AND EXCLUSIVE ACCESS BEFORE EVERYONE ELSE
    </span>
    <div className={styles.input}>
      <input placeholder={'Enter your e-mail'}/>
    </div>
    <button className={styles.button} >
      <span>
        subscribe
      </span>
    </button>
  </div>
);

export default NewsLettersBlock;
