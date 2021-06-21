import React from 'react';
import PropTypes from 'prop-types';
import { urlFor } from 'utils/sanity';
import Image from 'next/image';
import styles from '../PhotoSlider.module.scss';

function SongItem({ item }) {
  return (
    <div className={styles.songCardBox}>
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
  item: PropTypes.object,
};

export default SongItem;
