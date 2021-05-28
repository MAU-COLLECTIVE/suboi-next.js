import React from 'react';
import PropTypes from 'prop-types';
import Background from 'elements/Background/Background';
import PhotoSlider from './PhotoSlider/PhotoSlider';
import styles from './SectionFive.module.scss';

function SectionFive({ photos }) {
  return (
    <div className={styles.container}>
      <Background
        url="https://static.tuoitre.vn/tto/i/s626/2016/05/25/suboi-obama-1464164959.jpg"
        className={styles.background}
      />
      <PhotoSlider photos={photos}/>
    </div>
  );
}

SectionFive.propTypes = {
  photos: PropTypes.array,
};

export default SectionFive;
