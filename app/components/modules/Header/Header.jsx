import React from 'react';
import styles from './Header.module.scss';
import Navigation from './Navigation/Navigation';

function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}

export default Header;
