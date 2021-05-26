import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';
import Back from 'public/icons/Back.svg';
import styles from './Navigation.module.scss';

function Navigation({
  title,
  hideLinks,
  hasBack,
  blackColor,
}) {
  const { pathname } = useRouter();
  const [isShown, setIsShown] = useState(false);
  const [isArrow, setIsArrow] = useState(false);

  // Resize listener
  useEffect(() => {
    const checkArrow = (width) => {
      if (pathname === '/shop' || pathname === '/shop/[id]') {
        if (width < 1024) {
          setIsArrow(true);
        } else {
          setIsArrow(false);
        }
      }
    };
    const resize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setIsShown(false);
      }
      checkArrow(width);
    };
    checkArrow();
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
      <Link href="/">
        <h2 className={clsx(styles.company, blackColor && styles.blackColor)}>{title}</h2>
      </Link>
      {(!hideLinks && !hasBack) ? (
        <React.Fragment>
          <ul id="nav-links" className={clsx(styles.links, isShown ? styles.showLinks : styles.hideLinks)}>
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
          <Link href="/">
            {isArrow
              ? <div className={styles.icon}><Back /></div>
              : <button className={clsx(styles.btnBack, blackColor && styles.blackColor)}>
                  BACK TO HOMEPAGE
                </button>
            }
        </Link>
      )}
    </nav>
  );
}

Navigation.propTypes = {
  title: PropTypes.string,
  hideLinks: PropTypes.bool,
  hasBack: PropTypes.bool,
  blackColor: PropTypes.bool,
};

Navigation.defaultProps = {
  title: 'SUBOI',
  hideLinks: false,
  hasBack: false,
  blackColor: false,
};

export default Navigation;
