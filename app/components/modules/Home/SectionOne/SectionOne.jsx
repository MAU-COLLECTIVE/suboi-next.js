import React from 'react';
import PropTypes from 'prop-types';
import Button from 'elements/Button/Button';
import Background from 'elements/Background/Background';
import { urlFor } from 'utils/sanity';
import styles from './SectionOne.module.scss';

function SectionOne({ background, promote, height }) {
  return (
    <div
      className={styles.container}
      style={{ height: `${height}px` }}
    >
      <Background
        url={urlFor(promote?.albumAndSong?.albumImage
              ?? promote?.albumAndSong?.background).url()
                ?? background}
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

        {promote?.albumAndSong && (
          <span className={styles.subtitle}></span>
        )}

        <div className={styles.buttons}>
          {(promote?.ctaLink?.playVideo) && (
            <Button
              className={styles.button}
              background="transparent"
              label="PLAY VIDEO"
              href={promote?.ctaLink?.playVideo}
            />
          )}
          {(promote?.ctaLink?.buyAlbum) && (
            <Button
              className={styles.button}
              background="red"
              label="PLAY ALBUM"
              href={promote?.ctaLink?.buyAlbum}
            />
          )}
        </div>
      </div>
    </div>
  );
}

SectionOne.propTypes = {
  background: PropTypes.string,
  promote: PropTypes.object,
  height: PropTypes.number,
};

export default SectionOne;
