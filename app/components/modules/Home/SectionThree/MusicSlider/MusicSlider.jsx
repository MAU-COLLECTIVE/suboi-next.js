import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';
import clsx from 'clsx';
import styles from './MusicSlider.module.scss';
import SongItem from './SongItem/SongItem';

function MusicSlider({ songs }) {
  const [currentSong, setCurrentSong] = useState(1);
  const [transformCss, setTransformCss] = useState('');
  const [itemHover, setItemHover] = useState(false);
  const slideRef = useRef();
  const handlers = useSwipeable({ onTap: () => alert('swiped') });

  const refPassthrough = (el) => {
    handlers.ref(el);
    slideRef.current = el;
  };

  useEffect(() => {
    let margin = 20;
    const haftActiveWidth = 420 / 2;
    const width = 220;
    const smallerWidth = 120;
    const smallestWidth = 65;

    if (window.innerWidth < 694) {
      margin = 20;
      setTransformCss(`translateX(calc(${-60 * (currentSong - 1)}vw - ${40 * (currentSong - 1)}px))`);
    } else if (window.innerWidth >= 694 && window.innerWidth < 1024) {
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
    } else if (window.innerWidth >= 1024) {
      margin = 60;
      if (currentSong === 1) {
        setTransformCss(`translateX(calc(50% - ${haftActiveWidth}px - ${margin}px) )`);
      } else if (currentSong === 2) {
        setTransformCss(`translateX(calc(50% - ${haftActiveWidth}px - ${margin * 3}px - ${width}px))`);
      } else if (currentSong === 3) {
        setTransformCss(`translateX(calc(50% - ${haftActiveWidth}px - ${margin * 5}px - ${width}px - ${smallerWidth}px))`);
      } else {
        setTransformCss(`translateX(calc(50% - ${haftActiveWidth}px - ${margin * 7}px - ${width * (currentSong - 3)}px - ${smallerWidth}px - ${smallestWidth}px + ${35 * (currentSong - 4)}px))`);
      }
    }
  }, [currentSong]);

  const handleOnHover = (id) => {
    if (currentSong - 1 === Number(id)) {
      setItemHover(!itemHover);
    }
  };

  return <div className={styles.musicSlider}>
    <div
      className={clsx(styles.virtualImage,
        itemHover && styles.virtualImageActive)
      }
    >
      <img src={songs[currentSong - 1].image}/>
    </div>
    <div
      style={{
        transform: transformCss,
      }}
      className={styles.musicSliderBox}
    >
      {songs.length > 0 && songs.map((item, index) => <div
        key={item.id}
        className={clsx(
          styles.songCard,
          currentSong === index + 1 && styles.songCardActive,
          (currentSong === index + 3 || currentSong === index - 1) && styles.songCardSmaller,
          (currentSong >= index + 4 || currentSong <= index - 2) && styles.songCardSmallest,
        )}
        onClick={() => setCurrentSong(index + 1)}
        {...handlers} ref={refPassthrough}
      >
        <SongItem
          item={item}
          onMouseEnter={() => handleOnHover(index)}
          onMouseLeave={() => handleOnHover(index)}
        />
      </div>)}
    </div>
  </div>;
}

MusicSlider.propTypes = {
  songs: PropTypes.array,
};

export default MusicSlider;
