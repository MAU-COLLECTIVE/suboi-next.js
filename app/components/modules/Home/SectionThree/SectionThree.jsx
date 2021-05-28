import React from 'react';
import PropTypes from 'prop-types';
import Background from 'elements/Background/Background';
import MusicSlider from './MusicSlider/MusicSlider';
import styles from './SectionThree.module.scss';

function SectionThree({ songs }) {
  return (
    <div className={styles.container}>
      <Background
        url="https://media.vov.vn/uploaded/wgyyweux2icrb7fgmumzw/2019_03_28/suboi1_rrvx.jpg"
        className={styles.background}
      />
      <MusicSlider songs={songs}/>
    </div>
  );
}

SectionThree.propTypes = {
  songs: PropTypes.array,
};

export default SectionThree;
