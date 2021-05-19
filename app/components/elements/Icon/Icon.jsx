import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import styles from './Icon.module.scss';

function Icon({ url, icon }) {
  const { pathname } = useRouter();

  return (
    <a className={clsx(styles.icon,
      (pathname === '/' || pathname === '/music/[id]') && styles.iconWhite)
    } target="_blank" rel="noreferrer" href={url}>
      {icon}
    </a>
  );
}

Icon.propTypes = {
  url: PropTypes.string,
  icon: PropTypes.object,
};

export default Icon;
