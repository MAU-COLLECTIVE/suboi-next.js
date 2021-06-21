import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import VideoCard from 'modules/Video/VideoCard';
import styles from './Video.module.scss';

function Video({ video }) {
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    const id = getYouTubeId(video[0]?.youtubeEmbedLink);
    setCurrentId(id);
  }, []);

  const handleCurrent = (id) => {
    setCurrentId(getYouTubeId(id));
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <YouTube
          videoId={currentId}
          opts={{ width: '100%', height: '100%' }}
          containerClassName={styles.currentVideo}
        />
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
