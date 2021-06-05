import React from 'react';
import PropTypes from 'prop-types';
import Background from 'elements/Background/Background';
import PhotoSlider from './PhotoSlider/PhotoSlider';
import styles from './SectionFive.module.scss';

function SectionFive({ background, photos, height }) {
  return (
    <div
      className={styles.container}
      style={{ height: `${height}px` }}
    >
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
  height: PropTypes.number,
};

export default SectionFive;
