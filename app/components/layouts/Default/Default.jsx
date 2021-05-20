import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import LanguageSelection from 'elements/LanguageSelection/LanguageSelection';
import Newsletter from 'elements/Newsletter/Newsletter';
import Header from 'modules/Header/Header';
import Icon from 'elements/Icon/Icon';
import AppleMusic from 'public/icons/apple-music.svg';
import Facebook from 'public/icons/fb.svg';
import Instagram from 'public/icons/ig.svg';
import Youtube from 'public/icons/youtube.svg';
import Spotify from 'public/icons/spotify.svg';
import styles from './Default.module.scss';

function Default({ children }) {
  return (
    <div className={styles.default}>
      <Head>
        <title>SUBOI</title>
        <meta charSet="utf-8" /><meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width, height=device-height" />
      </Head>
      <Header />
      <LanguageSelection />
      <Newsletter />
      <div className={styles.content}>{children}</div>
      <div className={styles.icons}>
        <Icon url="" icon={<AppleMusic />} />
        <Icon url="" icon={<Spotify />} />
        <Icon url="" icon={<Youtube />} />
        <Icon url="" icon={<Instagram />} />
        <Icon url="" icon={<Facebook />} />
      </div>
    </div>
  );
}

Default.propTypes = {
  children: PropTypes.any,
};

export default Default;
