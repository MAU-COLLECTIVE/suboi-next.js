import React from 'react';
import PropTypes from 'prop-types';
import SongDetail from 'modules/Music/SongDetail/SongDetail';
import styles from './MusicDetail.module.scss';

function MusicDetail({ item }) {
  return <div className={styles.container}>
    <div className={styles.background}>
      <img src={item.image}></img>
    </div>
    <SongDetail item={item}/>
  </div>;
}

MusicDetail.propTypes = {
  item: PropTypes.object,
};

export default MusicDetail;
