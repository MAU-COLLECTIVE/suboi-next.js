import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';
import Button from 'elements/Button/Button';
import { CartContext } from 'contexts/Cart';
import { urlFor } from 'utils/sanity';
import styles from './ItemDetail.module.scss';

function Item({ item, showPopup, openCart }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [error, setError] = useState('');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (!openCart) setSelectedSize('');
  }, [openCart]);

  const handleOnClick = () => {
    if (item.productVariant.length > 0) {
      if (selectedSize) {
        showPopup();
        addToCart({ ...item, size: selectedSize, priceForSize: selectedPrice });
        setError('');
      } else {
        setError('Select size please!');
      }
    } else {
      showPopup();
      addToCart(item);
      setError('');
    }
  };

  const chooseSize = (size) => {
    setSelectedSize(size.name);
    setSelectedPrice(size.price);
  };

  return <div className={styles.itemDetail}>
    <div className={styles.left}>
      <div className={styles.itemImage}>
        <Image
          src={urlFor(selectedImage).url() || urlFor(item.productImage[0]).url()}
          layout="fill"
          priority={true}
        />
      </div>
      <div className={styles.smallImages}>
        {item.productImage.length > 1 && item.productImage.map((url, index = 1) => <div
          key={index}
          className={styles.smallImageItem}
        >
          <Image
            src={urlFor(url).url()}
            onClick={() => setSelectedImage(url)}
            layout="fill"
            priority={true}
          />
        </div>)}
      </div>
    </div>
    <div className={styles.right}>
      <div className={styles.titleBox}>
        <h3 className={styles.titleText}>{item.name}</h3>
      </div>
      <div className={styles.descBox}>
        <p className={styles.smallText}>{item.description}</p>
      </div>
      <div className={styles.priceBox}>
        <h3 className={styles.titleText}>${selectedPrice === '' ? item.price : selectedPrice}</h3>
      </div>
      <p className={styles.taxText}>Incl.taxes</p>
      <div className={styles.sizeBox}>
        <h4 className={styles.titleTextSmall}>
          {item.productVariant.length > 0 && 'CHOOSE YOUR SIZE'}
        </h4>
        <div className={styles.sizes}>
          {item.productVariant.map((variant) => <div
            key={variant.name}
            className={clsx(
              styles.sizeItem,
              selectedSize === variant.name && styles.sizeItemActive,
            )}
            onClick={() => chooseSize(variant)}
          >
            {variant.name}
          </div>)}
        </div>
        {error && <div className={styles.error}>
            {error}
          </div>
        }
      </div>
      <Button
        label="ADD TO CART"
        background="red"
        className={styles.addToCartBox}
        onClick={handleOnClick}
      />
    </div>
  </div>;
}

Item.propTypes = {
  item: PropTypes.object,
  showPopup: PropTypes.func,
  openCart: PropTypes.bool,
};

export default Item;
