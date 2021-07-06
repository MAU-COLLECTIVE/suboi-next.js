import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Swipe from 'react-easy-swipe';
import clsx from 'clsx';
import styles from './PhotoSlider.module.scss';
import PhotoItem from './PhotoItem/PhotoItem';

function PhotoSlider({ photos }) {
  const [currentSong, setCurrentSong] = useState(5);
  const [infinityPhotos, setInfinityPhotos] = useState([
    photos[photos.length - 4],
    photos[photos.length - 3],
    photos[photos.length - 2],
    photos[photos.length - 1],
    ...photos,
    photos[0],
    photos[1],
    photos[2],
    photos[3],
  ]);
  const [transformCss, setTransformCss] = useState('');
  const [sizeChanged, setSizeChanged] = useState(false);
  const [transition, setTransition] = useState('.3s');

  const onSwipeRight = () => {
    if (currentSong > 1) {
      setCurrentSong(currentSong - 1);
    }
  };

  const onSwipeLeft = () => {
    if (currentSong < infinityPhotos.length) {
      setCurrentSong(currentSong + 1);
    }
  };

  useEffect(() => {
    let margin = 40;
    const haftActiveWidth = 420 / 2;
    const width = 220;
    const marginStep = currentSong + (currentSong - 1);

    function updateSize() {
      setSizeChanged(sizeChanged);
    }

    switch (true) {
      case window.innerWidth < 694:
        setTransformCss(`translateX(calc(${-60 * (currentSong - 1)}vw - ${margin * (currentSong - 1)}px))`);
        break;
      case window.innerWidth >= 694 && window.innerWidth < 1024:
        if (currentSong === 1) {
          setTransformCss(`translateX(calc(50% - ${haftActiveWidth}px - ${margin}px) )`);
        } else if (currentSong >= 2) {
          setTransformCss(`translateX(calc(50% - ${haftActiveWidth * (currentSong - 1)}px - ${margin * marginStep}px - ${width}px - ${10 * (currentSong - 2)}px))`);
        }
        break;
      case window.innerWidth >= 1024:
        margin = 60;
        if (currentSong === 1) {
          setTransformCss(`translateX(calc(50% - ${haftActiveWidth}px - ${margin}px) )`);
        } else if (currentSong >= 2) {
          setTransformCss(`translateX(calc(50% - ${haftActiveWidth * currentSong}px - ${margin * marginStep}px - ${10 * (currentSong - 1)}px))`);
        }
        break;
      default:
        break;
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [currentSong, sizeChanged]);

  useEffect(() => {
    if (currentSong === infinityPhotos.length - 3) {
      setTimeout(() => {
        setTransition('none');
      }, 200);
      setTimeout(() => {
        setCurrentSong(5);
      }, 350);
      setTimeout(() => {
        setTransition('.3s');
      }, 400);
    }
    if (currentSong === 3) {
      setTimeout(() => {
        setTransition('none');
      }, 200);
      setTimeout(() => {
        setCurrentSong(infinityPhotos.length - 5);
      }, 350);
      setTimeout(() => {
        setTransition('.3s');
      }, 400);
    }
  }, [photos, currentSong]);

  return (
    <Swipe
      allowMouseEvents
      onSwipeRight={onSwipeRight}
      onSwipeLeft={onSwipeLeft}
    >
      <div className={styles.musicSlider}>
        <div
          style={{
            transform: `${transformCss} translateZ(0)`,
            transition: `${transition}`,
          }}
          className={styles.musicSliderBox}
        >
          {infinityPhotos?.map((item, index) => <div
            key={index}
            className={clsx(
              styles.songCard,
              currentSong === index + 1 && styles.songCardActive,
              (currentSong === index + 3 || currentSong === index - 1) && styles.songCardSmaller,
              (currentSong >= index + 4 || currentSong <= index - 2) && styles.songCardSmallest,
            )}
            onClick={() => {
              if (currentSong !== infinityPhotos.length - 2) {
                setCurrentSong(index + 1)
              }
            }}
            style={{ transition: `${transition}` }}
          >
            <PhotoItem item={item} transition={transition}/>
          </div>)}
        </div>
      </div>
    </Swipe>
  );
}

PhotoSlider.propTypes = {
  photos: PropTypes.array,
};

export default PhotoSlider;
