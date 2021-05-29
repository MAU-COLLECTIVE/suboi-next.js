import Background from 'elements/Background/Background';
import React from 'react';
import styles from './SectionTwo.module.scss';

function SectionTwo() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <Background
        url="https://crazyhood.com/wp-content/uploads/2018/12/suboi.png"
        className={styles.background}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>
          SUBOI
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Perferendis, praesentium? Et rerum perferendis totam debitis harum!
          Possimus labore quia maxime saepe laborum! Quaerat eum, dolorem earum
          voluptate accusantium vero tempora.
        </p>
      </div>
    </div>
  );
}

export default SectionTwo;
