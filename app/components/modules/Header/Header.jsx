import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import Navigation from './Navigation/Navigation';

function Header() {
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

  return (
    <header className={styles.header}>
      <Navigation hideLinks={hideLinks} title={title} blackColor={blackColor}/>
    </header>
  );
}

export default Header;
