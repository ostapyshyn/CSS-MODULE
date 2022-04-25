import React from 'react';

import { ContactForm } from '../ContactForm';
import styles from './index.module.css';
import map from '../../../images/map.png';

export const Form = () => {
  return (
    <section className={styles.formMap}>
      <p className={styles.formTitle}>We are always in touch and will be happy to resolve any of your questions.</p>
      <div className={styles.formContainer}>
        <div className={styles.map}>
          <img src={map} alt='map' />
        </div>
        <div className={styles.formBody}>
          <h2>Contact us</h2>
          <ContactForm />
          <div className={styles.link}>
            <a href='/'>Privacy policy</a>
          </div>
        </div>
      </div>
    </section>
  );
};
