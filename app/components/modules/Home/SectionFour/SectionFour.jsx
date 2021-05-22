import React from 'react';
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import TourCard from './Tour/TourCard';
import styles from './SectionFour.module.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';

function SectionFour() {
  const slides = [];
  const slidesLength = 5;

  for (let i = 0; i < slidesLength; i++) {
    slides.push(
      <SplideSlide key={`card-${i}`}>
        <TourCard
          isRtl={slidesLength <= 4}
          title={`Ho Chi Minh city ${i}`}
          date="2021, JUNE 2"
          location="Salman Avenue"
          link="www..google.com"
        />
      </SplideSlide>,
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          TOUR NAME
        </h1>
        <div className={styles.cardContainer}>
          <Splide options={{
            width: '100%',
            autoWidth: true,
            pagination: false,
            arrows: false,
            direction: slidesLength <= 4 ? 'rtl' : 'ltr',
            gap: '80px',
          }}>
            {slides}
          </Splide>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
