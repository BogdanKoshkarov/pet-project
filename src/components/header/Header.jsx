import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Header.module.scss';
import AccountIcon from '../svg/accountIcon/accountIcon';
import ShoppingCartIcon from '../svg/shoppingCartIcon/shoppingCartIcon';
import FavoriteIcon from '../svg/favoriteIcon/favoriteIcon';
import SearchIcon from '../svg/searchIcon/searchIcon';
import {useSelector} from 'react-redux';
import {getIsLoggedIn, getUser} from '../../store/userSlice';

const Header = () => {
  const user = useSelector(getUser());
  const isLoggedIn = useSelector(getIsLoggedIn());
  return (
    <header className={styles.container}>
      <div className={styles.banner}>
        <Link to='/'>
          <span>
            10% discount on the summer collection
          </span>
        </Link>
      </div>
      <div className={styles.header}>
        <div className={styles.headerNavBar}>
          <Link to='/sale'><span>Sale</span></Link>
          <Link to='/shop'><span>Shop</span></Link>
          <Link to='/aboutus'><span>About us</span></Link>
          <Link to='/card'><span>Card</span></Link>
          <Link to='/catalogue'><span>Catalogue</span></Link>
        </div>
        {/* <div className={styles.headerLogo}>Logo</div>*/}
        <div className={styles.headerMenuBar}>
          <div className={styles.headerSearch}>
            <input></input>
            <SearchIcon/>
          </div>
          <Link to='/favorite'>
            <FavoriteIcon/>
          </Link>
          <Link to=''>
            <ShoppingCartIcon/>
            <span>(0)</span>
          </Link>
          <Link to='/login'>
            <AccountIcon/>
            <span>
              {isLoggedIn && user ? user.name : ''}
            </span>
          </Link>
          <Link to=''>
            <div className={styles.headerLang}>
              <span>Eng</span>
              <span>Укр</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export {Header};
