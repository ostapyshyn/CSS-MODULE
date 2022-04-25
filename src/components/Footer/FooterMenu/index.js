import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.css';

export const FooterMenu = () => {
  return (
    <div className={styles.footerMenu}>
      <nav className={styles.menu}>
        <Link to='/'>All cities</Link>
        <Link to='/'>Blog</Link>
        <Link to='/'>Video</Link>
        <Link to='/'>Contacts</Link>
      </nav>
    </div>
  );
};
