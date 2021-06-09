import React from 'react';
import PropTypes from 'prop-types';
import { urlFor } from 'utils/sanity';
import styles from '../PhotoSlider.module.scss';

function SongItem({ item }) {
  return (
    <div className={styles.songCardBox}>
      <img src={urlFor(item?.image).url()} />
    </div>
  );
}

SongItem.propTypes = {
  item: PropTypes.object,
};

export default SongItem;
