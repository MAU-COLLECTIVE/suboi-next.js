import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './CheckoutItem.module.scss';

function CheckoutItem({
  name,
  price,
  image,
  size,
}) {
  return <div className={styles.item}>
    <Image src={image} width='140px' height='140px' className={styles.itemImg} priority={true}/>
    <div className={styles.itemInfo}>
      <h4>{name}</h4>
      <p className={styles.text}>{size ? `SIZE ${size}` : ''}</p>
    </div>
    <div className={styles.itemPrice}>
      <p className={styles.text}>${price}</p>
    </div>
  </div>;
}

CheckoutItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.object,
  price: PropTypes.number,
  size: PropTypes.string,
};

export default CheckoutItem;
