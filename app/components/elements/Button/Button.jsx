import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Button.module.scss';

function Button({
  label,
  background,
  onClick,
  className,
  href,
  loading,
}) {
  if (href) {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        href={href}
        className={clsx(styles.button,
          background === 'red' && styles.redBg,
          background === 'transparent' && styles.transparentBg,
          className && className)
        }
      >
        <p className={clsx(styles.smallText, styles.label)}>{label}</p>
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button,
        background === 'red' && styles.redBg,
        background === 'transparent' && styles.transparentBg,
        className && className)
      }
      disabled={loading}
    >
      <p className={clsx(styles.smallText, styles.label)}>{loading ? 'Loading...' : label}</p>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  background: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  href: PropTypes.string,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};

export default Button;
