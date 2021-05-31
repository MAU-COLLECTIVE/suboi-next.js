import Background from 'elements/Background/Background';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionTwo.module.scss';

function SectionTwo({ about }) {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <Background
        url="https://crazyhood.com/wp-content/uploads/2018/12/suboi.png"
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
  about: PropTypes.object,
};

export default SectionTwo;
