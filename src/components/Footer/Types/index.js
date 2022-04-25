import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

export const Types = () => {
  return (
    <div className={styles.types}>
      <h4 className={styles.title}>Type:</h4>
      <div className={styles.links}>
        <Link to='/'>Apartments</Link>
        <Link to='/'>Penthouses</Link>
        <Link to='/'>Townhouses</Link>
        <Link to='/'>Commercial</Link>
        <Link to='/'>Bungalows</Link>
        <Link to='/'>Duplexes</Link>
        <Link to='/'>Villas</Link>
      </div>
    </div>
  );
};
