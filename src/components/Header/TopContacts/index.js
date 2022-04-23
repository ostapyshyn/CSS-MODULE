import React from 'react';

import mail from '../../../images/mail.svg';
import phone from '../../../images/phone.svg';
import whatsapp from '../../../images/whatsapp.svg';
import flag from '../../../images/flag.svg';
import heart from '../../../images/heart.svg';

import styles from './index.module.css';

export const TopContacts = () => {
  return (
    <div className={styles.topContacts}>
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <div className={styles.topContactsItem}>
            <div className={styles.topContactsImage}>
              <img src={mail} alt='mail' />
            </div>
            <div className={styles.topContactsInfo}>sales@wtgspain.com</div>
          </div>
          <div className={styles.topContactsItem}>
            <div className={styles.topContactsImage}>
              <img src={phone} alt='phone' />
            </div>
            <div className={styles.topContactsInfo}>+34 965 020784</div>
          </div>
          <div className={styles.topContactsItem}>
            <div className={styles.topContactsImage} style={{ width: '18px', height: '18px' }}>
              <img src={whatsapp} alt='whatsapp' />
            </div>
            <div className={styles.whatsApp}>WhatsApp</div>
          </div>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.heart}>
            <img src={heart} alt='heart' />
          </div>
          <div className={styles.flag}>
            <img src={flag} alt='flag' />
          </div>
        </div>
      </div>
    </div>
  );
};
