import React from 'react';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <h2 className={styles.company}>SUBOI</h2>
      <ul className={styles.links}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Music</a>
        </li>
        <li>
          <a href="#">Tour</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Photos</a>
        </li>
        <li>
          <a href="#">Videos</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
