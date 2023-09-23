import React from 'react';
import {Header} from '../header';
import {Footer} from '../footer';

import styles from './Layout.module.scss';
import {Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
