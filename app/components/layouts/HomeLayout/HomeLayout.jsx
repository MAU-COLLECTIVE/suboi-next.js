import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import LanguageSelection from 'elements/LanguageSelection/LanguageSelection';
import Newsletter from 'elements/Newsletter/Newsletter';
import Icon from 'elements/Icon/Icon';
import AppleMusic from 'public/icons/apple-music.svg';
import Facebook from 'public/icons/fb.svg';
import Instagram from 'public/icons/ig.svg';
import Youtube from 'public/icons/youtube.svg';
import Spotify from 'public/icons/spotify.svg';
import styles from './HomeLayout.module.scss';

function Default({ social, children }) {
  return (
    <div className={styles.default}>
      <Head>
        <title>SUBOI</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width, height=device-height" />
      </Head>
      <LanguageSelection />
      <Newsletter />
      <div className={styles.content}>
        {children}
      </div>
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

Default.propTypes = {
  children: PropTypes.any,
  social: PropTypes.object,
};

export default Default;
