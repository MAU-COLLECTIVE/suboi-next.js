import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { urlFor } from 'utils/sanity';
import styles from '../MusicSlider.module.scss';

function SongItem({ item }) {
  const router = useRouter();

  const handleOnClick = () => {
    router.push(`/${item.slug.current}`);
  };

  return (
    <div className={styles.songCardBox}>
      <img src={urlFor(item.coverImage.asset._ref)}/>
      <div className={styles.songInfo}>
        <div className={styles.songInfoLeft}>
          <h4 onClick={handleOnClick}>{item.name}</h4>
          <p className={styles.smallText}>{item.name.toLowerCase()}</p>
        </div>
        <h className={styles.bigText}>{new Date(item.album.releaseDate).getFullYear()}</h>
      </div>
    </div>
  );
}

SongItem.propTypes = {
  item: PropTypes.object,
};

export default SongItem;
