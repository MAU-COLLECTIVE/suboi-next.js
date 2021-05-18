import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styles from './Item.module.scss';

function Item({
  id,
  name,
  price,
  image,
}) {
  const router = useRouter();
  const handleOnClick = () => {
    router.push(`/shop/${id}`);
  };

  return <div className={styles.item}>
    <img
      className={styles.itemImg}
      src={image}
    />
    <div className={styles.itemInfo}>
      <h4 onClick={handleOnClick}>{name}</h4>
      <p className={styles.text}>USD {price}</p>
    </div>
  </div>;
}

Item.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
};

export default Item;
