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

  useEffect(() => {
    if (pathname === '/[id]') {
      setHideLinks(true);
    } else if (pathname === '/shop' || pathname === '/shop/[id]') {
      setHideLinks(true);
      setBlackColor(true);
      setTitle('SUBOI SHOP');
    }
  }, []);

  const handleOnClick = (id, name) => {
    onChangeSection(id, name);
  };

  return (
    <header className={styles.header}>
      <Navigation
        hideLinks={hideLinks}
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
