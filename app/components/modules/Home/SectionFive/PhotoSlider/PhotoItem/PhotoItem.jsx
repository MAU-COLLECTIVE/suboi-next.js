import React from 'react';
import PropTypes from 'prop-types';
import styles from '../PhotoSlider.module.scss';

function SongItem({ item }) {
  return (
    <div className={styles.songCardBox}>
      <img src={item.image} />
    </div>
  );
}

SongItem.propTypes = {
  item: PropTypes.object,
};

export default SongItem;
