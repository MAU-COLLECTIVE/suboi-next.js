import React from 'react';
import styles from './SectionTwo.module.scss';

function SectionTwo() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          SUBOI
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, praesentium? Et rerum perferendis totam debitis harum! Possimus labore quia maxime saepe laborum! Quaerat eum, dolorem earum voluptate accusantium vero tempora.
        </p>
      </div>
    </div>
  );
}

export default SectionTwo;
