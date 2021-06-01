import Background from 'elements/Background/Background';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionTwo.module.scss';

function SectionTwo({ background, about }) {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <Background
        url={background}
        className={styles.background}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>
          SUBOI
        </h1>
        <p className={styles.desc}>
          {about?.biography?.lang?.en_US}
        </p>
      </div>
    </div>
  );
}

SectionTwo.propTypes = {
  background: PropTypes.string,
  about: PropTypes.object,
};

export default SectionTwo;
