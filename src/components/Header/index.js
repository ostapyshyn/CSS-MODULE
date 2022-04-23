import React from 'react';

import { TopContacts } from './TopContacts';
import { TopMenu } from './TopMenu';

export const Header = () => {
  return (
    <header id='header'>
      <TopContacts />
      <TopMenu />
    </header>
  );
};
