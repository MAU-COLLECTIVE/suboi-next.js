import React from 'react';
import PropTypes from 'prop-types';
import SongDetail from 'modules/Music/SongDetail/SongDetail';
import Background from 'elements/Background/Background';
import { urlFor } from 'utils/sanity';
import styles from './MusicDetail.module.scss';

function MusicDetail({ item }) {
  return <div className={styles.container}>
    <Background
      url={urlFor(item?.coverImage?.asset._ref)}
      className={styles.background}
    />
    <SongDetail item={item}/>
  </div>;
}

MusicDetail.propTypes = {
  item: PropTypes.object,
};

export default MusicDetail;
