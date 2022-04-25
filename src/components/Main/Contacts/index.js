import React from 'react';

import phone from '../../../images/phone-main.svg';
import mail from '../../../images/mail-main.svg';
import whatsapp from '../../../images/whatsapp-main.svg';
import viber from '../../../images/viber.svg';
import messenger from '../../../images/messenger.svg';
import telegram from '../../../images/telegram.svg';

import styles from './index.module.css';

export const Contacts = () => {
  return (
    <section>
      <div className={styles.line} style={{ maxWidth: '367px' }}></div>
      <div className={styles.contactsBody}>
        <div className={styles.contactsSection}>
          <h3 className={styles.contactTitle}>Phone</h3>
          <div className={styles.contactInfo}>
            <div>
              <img src={phone} alt='phone' />
            </div>
            <p>+34 965 020784</p>
          </div>
        </div>

        <div className={styles.contactsSection} style={{ maxWidth: '367px' }}>
          <h3 className={styles.contactTitle}>Office in Spain</h3>

          <p>Centro Comercial Playa Flamenca C / Niagara, 63 Local 60/PB, first floor, 03189 - Orihuela Costa (Alicante), Spain</p>
        </div>

        <div className={styles.contactsSection}>
          <h3 className={styles.contactTitle}>E-mail</h3>

          <div className={styles.contactInfo}>
            <div className={styles.credentialsIcon}>
              <img src={mail} alt='mail' />
            </div>

            <p>sales@wtgspain.com</p>
          </div>
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.appsBody}>
        <h3 className={styles.appsTitle}>We are online</h3>

        <div className={styles.appsContainer}>
          <div className={styles.appsItem}>
            <div>
              <img src={whatsapp} alt='whatsapp' />
            </div>
            <p>WhatsApp</p>
          </div>
          <div className={styles.appsItem}>
            <div>
              <img src={viber} alt='viber' />
            </div>
            <p>Viber</p>
          </div>
          <div className={styles.appsItem}>
            <div>
              <img src={messenger} alt='facebook' />
            </div>
            <p>Messenger</p>
          </div>
          <div className={styles.appsItem}>
            <div>
              <img src={telegram} alt='telegram' />
            </div>
            <p>Telegram</p>
          </div>
        </div>
      </div>
    </section>
  );
};
