import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerTopLeft}>
            <div className={styles.footerContact}>
              <h3>Contact</h3>
              <div className={styles.footerList}>
                <Link to='tel:+380441234567'>+38 (044) 123-45-67</Link>
                <Link to='mailto:help@email.com'>help@email.com</Link>
                <Link to='/'>Contact Us</Link>
              </div>
            </div>
            <div className={styles.footerShop}>
              <h3>Shop</h3>
              <div className={styles.footerList}>
                <Link to='/'>Sale</Link>
                <Link to='/'>New</Link>
                <Link to='/'>Shorts</Link>
                <Link to='/'>Pants</Link>
                <Link to='/'>T-Shirts</Link>
                <Link to='/'>Tops</Link>
              </div>
            </div>
            <div className={styles.footerHelp}>
              <h3>Help</h3>
              <div className={styles.footerList}>
                <Link to='/'>Delivery information</Link>
                <Link to='/'>Return information</Link>
                <Link to='/'>FAQ</Link>
              </div>
            </div>
          </div>
          <div className={styles.footerTopRight}>
            <Link to='/'>Logo</Link>
            <div className={styles.socialList}>
              <Link to='/' className={styles.socialListItem}>
                <img src='/img/svg/instagram.svg' alt='instagram icon' />
              </Link>
              <Link to='/' className={styles.socialListItem}>
                <img src='/img/svg/facebook.svg' alt='facebook icon' />
              </Link>
              <Link to='/' className={styles.socialListItem}>
                <img src='/img/svg/tik-tok.svg' alt='tik-tok icon' />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomLeft}>
            <p className={styles.footerBottomItem}>
              © 2023 Bavovna | All Rights Reserved
            </p>
            <div className={styles.footerBottomItem}>
              <Link to='/'>Cookies settings</Link>
            </div>
            <div className={styles.footerBottomItem}>
              <Link to='/'>Privacy policy</Link>
            </div>
          </div>
          <div className={styles.footerBottomRight}>
            <img src='/img/svg/liqpay.png' alt='liqpay' />
            <img src='/img/svg/mastercard.svg' alt='mastercard' />
            <img src='/img/svg/visa.svg' alt='visa' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export {Footer};
