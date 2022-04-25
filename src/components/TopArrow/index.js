import React from 'react';

import styles from './index.module.css';
import topArrow from '../../images/arrow-top.svg';

export const TopArrow = () => {
  return (
    <div className={styles.topArrow}>
      <a href='#header'>
        <img src={topArrow} alt='arrow' />
      </a>
    </div>
  );
};
