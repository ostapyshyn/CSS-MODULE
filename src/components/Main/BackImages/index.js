import React from 'react';

import plane_right from '../../../images/plane-right.svg';
import plane_left from '../../../images/plane-left.svg';
import plane_down from '../../../images/plane-down.svg';

import styles from './index.module.css';

export const BackImages = () => {
  return (
    <div className='backImages'>
      <div className={styles.backImage_1}>
        <img className={styles.plane1} src={plane_right} alt='plane1' />
      </div>
      <div className={styles.backImage_2}>
        <img className={styles.plane2} src={plane_left} alt='plane2' />
      </div>
      <div className={styles.backImage_3}>
        <img className={styles.plane3} src={plane_left} alt='plane3' />
      </div>
      <div className={styles.backImage_4}>
        <img className={styles.plane4} src={plane_left} alt='plane4' />
      </div>
      <div className={styles.backImage_5}>
        <img className={styles.plane5} src={plane_down} alt='plane5' />
      </div>
    </div>
  );
};
