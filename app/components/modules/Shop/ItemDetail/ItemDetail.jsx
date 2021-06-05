import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'elements/Button/Button';
import clsx from 'clsx';
import { CartContext } from 'contexts/Cart';
import { urlFor } from 'utils/sanity';
import styles from './ItemDetail.module.scss';

function Item({ item, showPopup, openCart }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (!openCart) setSelectedSize('');
  }, [openCart]);

  useEffect(() => {
    setImages(item.productImage);
  }, []);

  const handleOnClick = () => {
    if (item.productVariant.length > 0) {
      if (selectedSize) {
        showPopup();
        addToCart({ ...item, size: selectedSize });
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

  const chooseImage = (image, index) => {
    const rearrangeImage = [...images];
    rearrangeImage.splice(index, 1);
    rearrangeImage.unshift(image);
    setImages(rearrangeImage);
  };

  return <div className={styles.itemDetail}>
    <div className={styles.left}>
      {images.length > 0 && <img
          className={styles.itemImage}
          src={urlFor(images[0]?.asset._ref)}
        />
      }
      <div className={styles.smallImages}>
        {images.length > 1 && images.slice(1).map((url, index = 1) => <img
          key={index}
          className={styles.smallImageItem}
          src={urlFor(url?.asset._ref)}
          onClick={() => chooseImage(url, index + 1)}
        />)}
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
          {item.productVariant.length > 0 && 'Choose your size'}
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
