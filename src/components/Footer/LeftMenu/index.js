import React from 'react';

import phone from '../../../images/phone-footer.svg';
import mail from '../../../images/mail-footer.svg';
import location from '../../../images/location-footer.svg';
import stars from '../../../images/stars.svg';

import styles from './index.module.css';

export const LeftMenu = () => {
  return (
    <div>
      <h4>Contacts:</h4>
      <div className={styles.menubody}>
        <div className={styles.menuItem}>
          <div>
            <img src={phone} alt='phone' />
          </div>
          <p>+34 (965) 020 - 784</p>
        </div>
        <div className={styles.menuItem}>
          <div>
            <img src={mail} alt='mail' />
          </div>
          <p>sales@wtgspain.com</p>
        </div>
        <div className={styles.menuItem}>
          <div>
            <img src={location} alt='location' style={{ maxWidth: 'none' }} />
          </div>
          <p>Centro Comercial «Playa Flamenca» C/ Niagara, 63 Local 60/PB, first floor, 03189 - Orihuela Costa (Alicante), Spain</p>
        </div>
        <div className={styles.menuItem}>
          <p>Rating 4.9/5: </p>
          <div>
            <div>
              <img src={stars} alt='stars' />
            </div>
          </div>
          <p>820 votes</p>
        </div>
      </div>
    </div>
  );
};
