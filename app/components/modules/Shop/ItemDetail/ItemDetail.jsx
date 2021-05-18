import React from 'react';
// import PropTypes from 'prop-types';
// import { useRouter } from 'next/router';
import styles from './ItemDetail.module.scss';

function Item() {
  // const { query } = useRouter();

  return <div className={styles.itemDetail}>
    <div className={styles.left}>
      <img
        className={styles.itemImg}
        src="https://i.ibb.co/XCQMY1W/hoodieblack.png"
      />
    </div>
    <div className={styles.right}>
      <p className={styles.text}>USD</p>
    </div>
  </div>;
}

Item.propTypes = {
  // name: PropTypes.string,
  // image: PropTypes.string,
  // price: PropTypes.number,
  // id: PropTypes.string,
};

export default Item;
