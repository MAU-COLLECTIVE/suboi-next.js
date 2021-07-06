import React from 'react';
import PropTypes from 'prop-types';
import { urlFor } from 'utils/sanity';
import Image from 'next/image';
import styles from '../PhotoSlider.module.scss';

function SongItem({ item, transition }) {
  return (
    <div className={styles.songCardBox}
      style={{ transition: `${transition}` }}>
      <div className={styles.img}>
        <Image
          src={urlFor(item?.image).url()}
          layout="fill"
          className={styles.nextImg}
          priority={true}
        />
      </div>
    </div>
  );
}

SongItem.propTypes = {
  transition: PropTypes.string,
  item: PropTypes.object,
};

export default SongItem;
