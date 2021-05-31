import React from 'react';
import PropTypes from 'prop-types';
import Button from 'elements/Button/Button';
import Background from 'elements/Background/Background';
import styles from './SectionOne.module.scss';

function SectionOne({ promote }) {
  return (
    <div className={styles.container}>
      <Background
        url="https://i.ytimg.com/vi/h3SZNTXlcR0/maxresdefault.jpg"
        className={styles.background}
      />
       <div className={styles.overlay}></div>
      <p className={styles.lyrics}>
        {promote?.albumAndSong?.lyric}
      </p>
      <div className={styles.banner}>
        <h1 className={styles.title}>
          {promote?.albumAndSong?.name}
        </h1>
        <span className={styles.subtitle}>SUBOI</span>

        <div className={styles.buttons}>
          {(promote?.albumAndSong && promote?.ctaLink?.playVideo) && (
            <Button
              className={styles.button}
              background="transparent"
              label="PLAY VIDEO"
              href={promote?.ctaLink?.playVideo}
            />
          )}
          {(promote?.albumAndSong && promote?.ctaLink?.buyAlbum) && (
            <Button
              className={styles.button}
              background="red"
              label="BUY ALBUM"
              href={promote?.ctaLink?.buyAlbum}
            />
          )}
        </div>
      </div>
    </div>
  );
}

SectionOne.propTypes = {
  promote: PropTypes.object,
};

export default SectionOne;
