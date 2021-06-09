import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './Background.module.scss';

function Background({ url, className }) {
  return (
    <div className={clsx(styles.background, className)}>
      <Image src={url} layout='fill'></Image>
    </div>
  );
}

Background.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string,
};

export default Background;
