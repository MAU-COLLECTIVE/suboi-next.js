import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import Navigation from './Navigation/Navigation';

function Header({ onChangeSection }) {
  const { pathname } = useRouter();
  const [hideLinks, setHideLinks] = useState(false);
  const [title, setTitle] = useState('SUBOI');
  const [blackColor, setBlackColor] = useState(false);
  const [logoLink, setLogoLink] = useState('/');

  useEffect(() => {
    if (pathname === '/[id]' || pathname === '/video') {
      setHideLinks(true);
    } else if (pathname === '/shop' || pathname === '/shop/[id]' || pathname === '/checkout') {
      setHideLinks(true);
      setBlackColor(true);
      setTitle('SUBOI SHOP');
      setLogoLink('/shop');
    }
  }, []);

  const handleOnClick = (id, name) => {
    onChangeSection(id, name);
  };

  return (
    <header className={styles.header}>
      <Navigation
        hideLinks={hideLinks}
        logoLink={logoLink}
        title={title}
        blackColor={blackColor}
        handleOnClick={(id, name) => handleOnClick(id, name)}
      />
    </header>
  );
}

Header.propTypes = {
  onChangeSection: PropTypes.func,
};

export default Header;
