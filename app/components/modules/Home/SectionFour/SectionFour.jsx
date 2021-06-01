import React from 'react';
import PropTypes from 'prop-types';
import Background from 'elements/Background/Background';
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import TourCard from './Tour/TourCard';
import styles from './SectionFour.module.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';

function SectionFour({ background, tour }) {
  const tours = tour?.tour?.length <= 4 ? tour?.tour : tour?.tour?.reverse();

  return (
    <div className={styles.container}>
      <Background
        url={background}
        className={styles.background}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>
          {tour?.tourName ?? 'NO TOUR ANNOUNCEMENTS YET'}
        </h1>
        <div className={styles.cardContainer}>
          <Splide options={{
            width: '100%',
            autoWidth: true,
            pagination: false,
            arrows: false,
            direction: tour?.tour?.length <= 4 ? 'rtl' : 'ltr',
            gap: '100px',
          }}>
              {tours?.map((to, index) => (
                <SplideSlide key={index}>
                  <TourCard
                    isRtl={tour?.tour?.length <= 4}
                    title={to?.city}
                    date={to?.tourDate}
                    location={to?.venue}
                    link={to?.tourTicket}
                  />
                </SplideSlide>
              ))}
          </Splide>
        </div>
      </div>
    </div>
  );
}

SectionFour.propTypes = {
  background: PropTypes.string,
  tour: PropTypes.object,
};

export default SectionFour;
