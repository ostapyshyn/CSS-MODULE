import React from 'react';

import help from '../../../images/help.svg';
import corner from '../../../images/top-left-corner.svg';

import styles from './index.module.css';

export const Help = () => {
  return (
    <section className={styles.help}>
      <div>
        <img src={corner} alt='corner' />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>
          <div className={styles.line}></div>
          <h3>WTG SPAIN</h3>
        </div>
        <h1 className={styles.title}>
          Do you need <span>some help</span>?
        </h1>
        <p>Contact us right now and our team will do everything to help you.</p>
        <button className={styles.helpButton}>Contact us</button>
      </div>
      <div className={styles.helpImage}>
        <img src={help} alt='help' />
      </div>
    </section>
  );
};
