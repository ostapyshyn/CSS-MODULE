import React from 'react';

import { Help } from './Help';
import { Form } from './Form';
import { Contacts } from './Contacts';

import styles from './index.module.css';
import { BackImages } from './BackImages';

export const Main = () => {
  return (
    <main className={styles.main}>
      <BackImages />
      <Help />
      <Form />
      <Contacts />
    </main>
  );
};
