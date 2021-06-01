import React from 'react';
import PropTypes from 'prop-types';
import Background from 'elements/Background/Background';
import PhotoSlider from './PhotoSlider/PhotoSlider';
import styles from './SectionFive.module.scss';

function SectionFive({ background, photos }) {
  return (
    <div className={styles.container}>
      <Background
        url={background}
        className={styles.background}
      />
      <PhotoSlider photos={photos}/>
    </div>
  );
}

SectionFive.propTypes = {
  background: PropTypes.string,
  photos: PropTypes.array,
};

export default SectionFive;
