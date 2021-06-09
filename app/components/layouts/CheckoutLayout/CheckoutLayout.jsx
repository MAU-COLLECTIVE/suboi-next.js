import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from 'modules/Header/Header';
import Icon from 'elements/Icon/Icon';
import AppleMusic from 'public/icons/apple-music.svg';
import Facebook from 'public/icons/fb.svg';
import Instagram from 'public/icons/ig.svg';
import Youtube from 'public/icons/youtube.svg';
import Spotify from 'public/icons/spotify.svg';
import LanguageSelection from 'elements/LanguageSelection/LanguageSelection';
import styles from './CheckoutLayout.module.scss';

function CheckoutLayout({ children, social }) {
  return (
    <div className={styles.default}>
      <Head>
        <title>SUBOI</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width, height=device-height" />
      </Head>
      <Header/>
      <div className={styles.content}>
        {children}
      </div>
      <LanguageSelection />
      <div className={styles.icons}>
        <Icon url={social?.appleMusic} icon={<AppleMusic />} />
        <Icon url={social?.spotify} icon={<Spotify />} />
        <Icon url={social?.youtube} icon={<Youtube />} />
        <Icon url={social?.instagram} icon={<Instagram />} />
        <Icon url={social?.facebook} icon={<Facebook />} />
      </div>
    </div>
  );
}

CheckoutLayout.propTypes = {
  children: PropTypes.any,
  social: PropTypes.object,
};

export default CheckoutLayout;
