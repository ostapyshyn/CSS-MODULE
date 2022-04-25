import React from 'react';

import { Form } from '../Form';

import facebook from '../../../images/facebook-right.svg';
import youtube from '../../../images/youtube-right.svg';
import linkedin from '../../../images/link-right.svg';
import instagram from '../../../images/instagram-right.svg';
import question from '../../../images/q-right.svg';

import styles from './index.module.css';

export const RightMenu = () => {
  return (
    <div>
      <h4>Follow us:</h4>
      <div className={styles.iconsBody}>
        <div>
          <div className={styles.menuItem}>
            <div>
              <img src={facebook} alt='facebook' />
            </div>
            <p>Facebook</p>
          </div>
          <div className={styles.menuItem}>
            <div>
              <img src={youtube} alt='youtube' />
            </div>
            <p>Youtube</p>
          </div>
        </div>
        <div className='bottomMenu'>
          <div className={styles.menuItem}>
            <div>
              <img src={linkedin} alt='linkedin' />
            </div>
            <p>LinkedIn</p>
          </div>
          <div className={styles.menuItem}>
            <div>
              <img src={instagram} alt='instagram' />
            </div>
            <p>Instagram</p>
          </div>
        </div>
      </div>
      <div className={styles.subContainer}>
        <div className={styles.subBody}>
          <p>Subscribe to new objects</p>
          <div className={styles.question}>
            <img src={question} alt='question' />
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};
