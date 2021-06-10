import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Image from 'next/image';
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

  return <div className={styles.item} onClick={handleOnClick}>
    <div className={styles.itemImg}>
      <Image src={image} layout="fill" priority={true}/>
    </div>
    <div className={styles.itemInfo}>
      <h4>{name}</h4>
      <p className={styles.text}>USD {price}</p>
    </div>
  </div>;
}

Item.propTypes = {
  name: PropTypes.string,
  image: PropTypes.object,
  price: PropTypes.number,
  id: PropTypes.string,
};

export default Item;
