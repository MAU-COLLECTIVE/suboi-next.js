import React from 'react';
import PropTypes from 'prop-types';
import MusicSlider from './MusicSlider/MusicSlider';
import styles from './SectionThree.module.scss';

function SectionThree({ songs }) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img src="https://media.vov.vn/uploaded/wgyyweux2icrb7fgmumzw/2019_03_28/suboi1_rrvx.jpg"></img>
      </div>
      <MusicSlider songs={songs}/>
    </div>
  );
}

SectionThree.propTypes = {
  songs: PropTypes.array,
};

export default SectionThree;
