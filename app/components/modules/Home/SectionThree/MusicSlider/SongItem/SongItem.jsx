import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styles from '../MusicSlider.module.scss';

function SongItem({ item, onMouseEnter, onMouseLeave }) {
  const router = useRouter();

  const handleOnClick = (id) => {
    router.push(`/shop/${id}`);
  };

  return (
    <div className={styles.songCardBox} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <img src={item.image} />
      <div className={styles.songInfo}>
        <div className={styles.songInfoLeft}>
          <h4 onClick={handleOnClick}>{item.name}</h4>
          <p className={styles.smallText}>{item.miniName}</p>
        </div>
        <h className={styles.bigText}>{item.year}</h>
      </div>
    </div>
  );
}

SongItem.propTypes = {
  item: PropTypes.array,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default SongItem;