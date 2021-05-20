import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Navigation.module.scss';

function Navigation({ title, hideLinks, hasBack }) {
  const [isShown, setIsShown] = useState(false);

  // Resize listener
  useEffect(() => {
    const resize = () => {
      const width = window.innerWidth;
      if (width > 1024) {
        setIsShown(false);
      }
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // Click-outside-navbar listener
  useEffect(() => {
    const handleClick = (event) => {
      const target = document.getElementById('nav-links');
      const withinBoundaries = event.composedPath().includes(target);
      if (!withinBoundaries && isShown) {
        event.stopPropagation();
        setIsShown(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isShown]);

  return (
    <nav className={styles.navigation}>
      <h2 className={styles.company}>{title}</h2>
      {(!hideLinks && !hasBack) ? (
        <React.Fragment>
          <ul id="nav-links" className={clsx(styles.links, !isShown && styles.hideLinks)}>
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
          <button
            onClick={() => setIsShown((prev) => !prev)}
            className={styles.btnMenu}>
              MENU
          </button>
        </React.Fragment>
      ) : (
        <button
          className={styles.btnBack}>
            BACK TO HOMEPAGE
        </button>
      )}
    </nav>
  );
}

Navigation.propTypes = {
  title: PropTypes.string,
  hideLinks: PropTypes.bool,
  hasBack: PropTypes.bool,
};

Navigation.defaultProps = {
  title: 'SUBOI',
  hideLinks: false,
  hasBack: false,
};

export default Navigation;
