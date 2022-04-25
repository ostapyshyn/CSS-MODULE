import React from 'react';

import { Help } from './Help';
import { Form } from './Form';
import { Contacts } from './Contacts';

export const Main = () => {
  return (
    <main>
      <Help />
      <Form />
      <Contacts />
    </main>
  );
};
