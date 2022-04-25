import React from 'react';

import logo from '../../images/logo-footer.svg';

import styles from './index.module.css';
import { FooterMenu } from './FooterMenu';
import { LeftMenu } from './LeftMenu';
import { Types } from './Types';
import { RightMenu } from './RightMenu';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.titles}>
          <div>
            <img src={logo} alt='logo' />
          </div>

          <h3 className={styles.title}>
            <span>THE BEST</span> REAL ESTATE IN SPAIN
          </h3>
        </div>
        <hr />
        <FooterMenu />

        <div className={styles.footerBody}>
          <LeftMenu />
          <Types />
          <RightMenu />
        </div>

        <div className={styles.copy}>
          <p>The company "WTG Spain" specializes in the investment and sale of real estate in Spain, and the provision of legal and consulting services.</p>
          <p>All rights reserved. "WTG Spain" - The Best Real Estate in Spain. © Copyright 2007 - 2020.</p>
        </div>
      </div>
    </footer>
  );
};
