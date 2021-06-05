import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Swipe from 'react-easy-swipe';
import clsx from 'clsx';
import styles from './MusicSlider.module.scss';
import SongItem from './SongItem/SongItem';

function MusicSlider({ songs }) {
  const [currentSong, setCurrentSong] = useState(1);
  const [transformCss, setTransformCss] = useState('');
  const [sizeChanged, setSizeChanged] = useState(false);

  const onSwipeRight = () => {
    if (currentSong > 1) {
      setCurrentSong(currentSong - 1);
    }
  };

  const onSwipeLeft = () => {
    if (currentSong < songs.length) {
      setCurrentSong(currentSong + 1);
    }
  };

  useEffect(() => {
    let margin = 20;
    let haftActiveWidth = 420 / 2;
    const width = 220;
    const smallerWidth = 120;
    const smallestWidth = 65;

    function updateSize() {
      setSizeChanged(sizeChanged);
    }

    if (window.innerWidth <= 500) {
      margin = 20;
      if (currentSong === songs.length) {
        setTransformCss(`translateX(calc(${-60 * (currentSong - 1)}vw - ${40 * (currentSong - 1)}px + 30vw))`);
      } else {
        setTransformCss(`translateX(calc(${-60 * (currentSong - 1)}vw - ${40 * (currentSong - 1)}px))`);
      }
    } else if (window.innerWidth < 694 && window.innerWidth > 500) {
      margin = 20;
      if (currentSong === songs.length) {
        setTransformCss(`translateX(calc(${-60 * (currentSong - 1)}vw - ${40 * (currentSong - 1)}px + 33vw))`);
      } else {
        setTransformCss(`translateX(calc(${-60 * (currentSong - 1)}vw - ${40 * (currentSong - 1)}px))`);
      }
    } else if (window.innerWidth >= 694 && window.innerWidth < 1023) {
      haftActiveWidth = 280 / 2;
      if (currentSong === 1) {
        setTransformCss(`translateX(calc(50% - ${haftActiveWidth}px - ${margin}px - 20px) )`);
      } else {
        setTransformCss(`translateX(calc(50% - ${haftActiveWidth * (currentSong + (currentSong - 1))}px - ${margin * (currentSong + (currentSong - 1))}px - ${20 * (currentSong + (currentSong - 1))}px) )`);
      }
    } else if (window.innerWidth >= 1023 && window.innerWidth < 1366) {
      haftActiveWidth = 280 / 2;
      margin = 90;
      if (currentSong === 1) {
        setTransformCss(`translateX(calc(50% - ${haftActiveWidth}px - ${margin}px - 20px) )`);
      } else {
        setTransformCss(`translateX(calc(50% - ${haftActiveWidth * (currentSong + (currentSong - 1))}px - ${margin * (currentSong + (currentSong - 1))}px - ${20 * (currentSong + (currentSong - 1))}px) )`);
      }
    } else if (window.innerWidth >= 1366 && window.innerWidth < 1919) {
      margin = 40;
      if (currentSong === 1) {
        setTransformCss(`translateX(calc(50% - ${haftActiveWidth}px - ${margin}px) )`);
      } else if (currentSong === 2) {
        setTransformCss(`translateX(calc(50% - ${haftActiveWidth}px - ${margin * 3}px - ${width}px))`);
      } else if (currentSong === 3) {
        setTransformCss(`translateX(calc(50% - ${haftActiveWidth}px - ${margin * 5}px - ${width}px - ${smallerWidth}px))`);
      } else {
        setTransformCss(`translateX(calc(50% - ${haftActiveWidth}px - ${margin * 7}px - ${width * (currentSong - 3)}px - ${smallerWidth}px - ${smallestWidth}px + ${75 * (currentSong - 4)}px))`);
      }
    } else if (window.innerWidth >= 1919) {
      haftActiveWidth = 440 / 2;
      margin = 40;
      if (currentSong === 1) {
        setTransformCss(`translateX(calc(50% - ${haftActiveWidth}px - ${margin}px))`);
      } else if (currentSong === 2) {
        setTransformCss(`translateX(calc(50% - ${haftActiveWidth}px - ${margin * 3}px - ${width}px))`);
      } else if (currentSong === 3) {
        setTransformCss(`translateX(calc(50% - ${haftActiveWidth}px - ${margin * 5}px - ${width}px - ${smallerWidth}px))`);
      } else {
        setTransformCss(`translateX(calc(50% - ${haftActiveWidth}px - ${margin * 7}px - ${width * (currentSong - 3)}px - ${smallerWidth}px - ${smallestWidth}px + ${75 * (currentSong - 4)}px))`);
      }
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [currentSong, sizeChanged]);

  return (
    <Swipe
      allowMouseEvents={true}
      onSwipeRight={onSwipeRight}
      onSwipeLeft={onSwipeLeft}>
      <div className={styles.musicSlider}>
        <div
          style={{
            transform: transformCss,
          }}
          className={styles.musicSliderBox}
        >
          {songs.length > 0 && songs.map((item, index) => <div
            key={item.slug.current}
            className={clsx(
              styles.songCard,
              currentSong === index + 1 && styles.songCardActive,
              (currentSong === index + 3 || currentSong === index - 1) && styles.songCardSmaller,
              (currentSong >= index + 4 || currentSong <= index - 2) && styles.songCardSmallest,
            )}
            onClick={() => setCurrentSong(index + 1)}
          >
            <SongItem item={item} center={currentSong - 1 === index}/>
          </div>)}
        </div>
      </div>;
    </Swipe>
  );
}

MusicSlider.propTypes = {
  songs: PropTypes.array,
};

export default MusicSlider;
