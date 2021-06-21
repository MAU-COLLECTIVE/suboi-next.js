import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { urlFor } from 'utils/sanity';
import styles from './VideoCard.module.scss';

const VideoCard = ({ title, thumbnail, link, handleCurrent }) => (
  <div className={styles.video}>
      <Image
        src={thumbnail && urlFor(thumbnail).width('500').url()}
        alt={title}
        layout="fill"
      />
      <div className={styles.videoOverlay}>
        <p className={styles.videoTitle}>{title}</p>
        <button
          className={styles.btnPlayVideo}
          onClick={() => handleCurrent(link)}>
            Play Video
        </button>
      </div>
  </div>
);

VideoCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.object,
  link: PropTypes.string,
  handleCurrent: PropTypes.func,
};

export default VideoCard;
