import React from 'react';
import PropTypes from 'prop-types';
import Button from 'elements/Button/Button';
import clsx from 'clsx';
import styles from './TourCard.module.scss';

function TourCard({ isRtl, date, title, location, link }) {
  return (
    <div className={clsx(styles.card, isRtl && styles.rtl)}>
      <p className={styles.date}>{date}</p>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.location}>{location}</p>
      <Button background="transparent" label="GET TICKETS HERE" />
    </div>
  );
}

TourCard.propTypes = {
  isRtl: PropTypes.bool,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

TourCard.defaultProps = {
  isRtl: false,
}

export default TourCard;
