import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Button from 'elements/Button/Button';
import { urlFor } from 'utils/sanity';
import clsx from 'clsx';
import styles from './SongDetail.module.scss';

function SongDetail({ item }) {
  return <div className={styles.itemDetail}>
    <div className={styles.left}>
      <div className={styles.itemImage}>
        <Image src={urlFor(item?.coverImage).url()} layout="fill" priority={true}/>
      </div>
    </div>
    <div className={styles.right}>
      <h3 className={styles.titleText}>{item.name}</h3>
      <h4 className={styles.album}>{item?.album.name} – Suboi</h4>
      <p className={styles.smallText}>{new Date(item?.album?.releaseDate).getFullYear()}</p>
      <h4 className={styles.lyrics}>{item.lyric ? 'Lyrics' : ''}</h4>
      <div className={clsx(styles.lyricsBox, !item.lyric && styles.lyricsBoxNull)}>
        <p>{item.lyric}</p>
      </div>
      <a target="_blank" rel="noreferrer" href={item.streamLink}>
        <Button
          label="STREAM HERE"
          className={styles.addToCartBox}
        />
      </a>
    </div>
  </div>;
}

SongDetail.propTypes = {
  item: PropTypes.object,
};

export default SongDetail;
