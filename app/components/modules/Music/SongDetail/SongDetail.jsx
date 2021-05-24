import React from 'react';
import PropTypes from 'prop-types';
import Button from 'elements/Button/Button';
import styles from './SongDetail.module.scss';

function SongDetail({ item }) {
  return <div className={styles.itemDetail}>
    <div className={styles.left}>
      <img
        className={styles.itemImage}
        src={item.image}
      />
    </div>
    <div className={styles.right}>
      <h3 className={styles.titleText}>{item.name}</h3>
      <h4 className={styles.album}>{item.album}</h4>
      <p className={styles.smallText}>{item.year}</p>
      <h4 className={styles.lyrics}>Lyrics</h4>
      <div className={styles.lyricsBox}>
        <p>{item.lyrics}</p>
      </div>
      <Button
        label="STREAM HERE"
        className={styles.addToCartBox}
      />
    </div>
  </div>;
}

SongDetail.propTypes = {
  item: PropTypes.object,
};

export default SongDetail;
