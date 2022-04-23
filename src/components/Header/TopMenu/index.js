import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../images/logo.svg';
import styles from './index.module.css';

export const TopMenu = () => {
  return (
    <div className={styles.topMenu}>
      <div className={styles.container}>
        <div>
          <img src={logo} alt='logo' />
        </div>
        <div className={styles.navigation}>
          <nav className={styles.menu}>
            <select>
              <option value=''>Cities</option>
            </select>
            <select>
              <option value=''>Properties</option>
            </select>
            <Link to='/'>Blog</Link>
            <Link to='/'>Video</Link>
            <Link to='/'>Contacts</Link>
          </nav>
          <div className={styles.authButtons}>
            <Link to='/'>Log in</Link>
            <Link to='/'>Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
