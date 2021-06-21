import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import VideoCard from 'modules/Video/VideoCard';
import styles from './Video.module.scss';

function Video({ video }) {
  const [currentLink, setCUrrentLink] = useState(null);

  useEffect(() => {
    const link = video[0]?.youtubeEmbedLink;
    setCUrrentLink(link);
  }, []);

  const handleCurrent = (link) => {
    setCUrrentLink(link);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.currentVideo}>
          <ReactPlayer
            url={currentLink}
            width="100%"
            height="100%"
          />
        </div>
        <div className={styles.videoList}>
          {video.map((vid) => (
            <VideoCard
              key={vid._id}
              title={vid.title}
              thumbnail={vid.thumbnail}
              link={vid.youtubeEmbedLink}
              handleCurrent={handleCurrent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

Video.propTypes = {
  video: PropTypes.array,
};

export default Video;
