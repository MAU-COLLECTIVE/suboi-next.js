import React from 'react';
import PropTypes from 'prop-types';
import SongDetail from 'modules/Music/SongDetail/SongDetail';
import Background from 'elements/Background/Background';
import styles from './MusicDetail.module.scss';

function MusicDetail({ item }) {
  return <div className={styles.container}>
    <Background
      url="https://avatar-ex-swe.nixcdn.com/song/2019/12/31/2/b/5/a/1577798006327_640.jpg"
      className={styles.background}
    />
    <SongDetail item={item}/>
  </div>;
}

MusicDetail.propTypes = {
  item: PropTypes.object,
};

export default MusicDetail;
