import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Background.module.scss';

function Background({ url, className }) {
  return (
    <div className={clsx(styles.background, className)}>
      <img src={url}></img>
    </div>
  );
}

Background.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string,
};

export default Background;
