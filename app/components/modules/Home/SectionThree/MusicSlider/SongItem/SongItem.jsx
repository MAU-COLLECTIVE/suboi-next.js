import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { urlFor } from 'utils/sanity';
import Image from 'next/image';
import styles from '../MusicSlider.module.scss';

function SongItem({ item, center }) {
  const router = useRouter();

  const handleOnClick = () => {
    if (center) {
      router.push(`/${item.slug.current}`);
    }
  };

  return (
    <div className={styles.songCardBox} onClick={handleOnClick}>
      <div className={styles.img}>
        <Image src={urlFor(item?.coverImage).url()} priority={true} layout="fill" />
      </div>
      <div className={styles.songInfo}>
        <div className={styles.songInfoLeft}>
          <h4>{item?.name}</h4>
          <p className={styles.smallText}>{item?.album.name} – Suboi</p>
        </div>
        <h className={styles.bigText}>{new Date(item?.album?.releaseDate).getFullYear()}</h>
      </div>
    </div>
  );
}

SongItem.propTypes = {
  item: PropTypes.object,
  center: PropTypes.bool,
};

export default SongItem;
