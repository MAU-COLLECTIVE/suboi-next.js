import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import styles from './MusicSlider.module.scss';

function MusicSlider({ songs }) {
  const [currentSong, setCurrentSong] = useState(1);
  const [transformCss, setTransformCss] = useState('');
  const router = useRouter();

  useEffect(() => {
    const margin = 60;
    const haftActiveWidth = 420 / 2; // 420 is active width
    const width = 220;
    const smallerWidth = 120;
    const smallestWidth = 65;
    if (currentSong === 1) {
      setTransformCss(`translateX(calc(50% - ${haftActiveWidth}px - ${margin}px) )`);
    } else if (currentSong === 2) {
      setTransformCss(`translateX(calc(50% - ${haftActiveWidth}px - 180px - ${width}px))`);
    } else if (currentSong === 3) {
      setTransformCss(`translateX(calc(50% - ${haftActiveWidth}px - 300px - ${width}px - ${smallerWidth}px))`);
    } else {
      setTransformCss(`translateX(calc(50% - ${haftActiveWidth}px - 420px - ${width * (currentSong - 3)}px - ${smallerWidth}px - ${smallestWidth}px + ${35 * (currentSong - 4)}px))`);
    }
  }, [currentSong]);

  const handleOnClick = (id) => {
    router.push(`/shop/${id}`);
  };
  return <div className={styles.musicSlider}>
    {/* <div style={{ width: '100%', background: 'white', textAlign: 'center' }}>|</div> */}
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
      >
        {/* <div style={{
          width: '1px',
          height: '100%',
          background: 'red',
          position: 'absolute',
          left: 0,
          right: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}></div> */}
        <div className={styles.songCardBox}>
          <img src={item.image} />
          <div className={styles.songInfo}>
            <div>
              {item.id}
              <h4 onClick={handleOnClick}>{item.name}</h4>
              <p className={styles.smallText}>{item.miniName}</p>
            </div>
            <p className={styles.bigText}>{item.year}</p>
          </div>
        </div>
      </div>)
      }
    </div>
  </div>;
}

MusicSlider.propTypes = {
  songs: PropTypes.array,
};

export default MusicSlider;
