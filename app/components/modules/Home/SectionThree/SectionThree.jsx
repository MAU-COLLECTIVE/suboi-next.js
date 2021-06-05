import React from 'react';
import PropTypes from 'prop-types';
import Background from 'elements/Background/Background';
import MusicSlider from './MusicSlider/MusicSlider';
import styles from './SectionThree.module.scss';

function SectionThree({ background, songs, height }) {
  return (
    <div
      className={styles.container}
      style={{ height: `${height}px` }}
    >
      <Background
        url={background}
        className={styles.background}
      />
      <MusicSlider songs={songs}/>
    </div>
  );
}

SectionThree.propTypes = {
  background: PropTypes.string,
  songs: PropTypes.array,
  height: PropTypes.number,
};

export default SectionThree;
