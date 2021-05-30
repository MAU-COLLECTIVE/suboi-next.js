import React from 'react';
import PropTypes from 'prop-types';
import Button from 'elements/Button/Button';
import { urlFor } from 'utils/sanity';
import styles from './ItemDetail.module.scss';

function Item({ item }) {
  return <div className={styles.itemDetail}>
    <div className={styles.left}>
      <img
        className={styles.itemImage}
        src={urlFor(item.productImage[0].asset._ref)}
      />
      <div className={styles.smallImages}>
        {item.productImage && item.productImage.slice(1).map((url, index = 1) => <img
          key={index}
          className={styles.smallImageItem}
          src={urlFor(url.asset._ref)}
        />)}
      </div>
    </div>
    <div className={styles.right}>
      <div className={styles.titleBox}>
        <h3 className={styles.titleText}>{item.name}</h3>
      </div>
      <div className={styles.descBox}>
        <p className={styles.smallText}>Article description</p>
        <p className={styles.smallText}>In Store (1-2 delivery days)</p>
      </div>
      <div className={styles.priceBox}>
        <h3 className={styles.titleText}>$ {item.price}</h3>
      </div>
      <p className={styles.taxText}>Incl.taxes</p>
      <div className={styles.sizeBox}>
        <h4 className={styles.titleTextSmall}>Choose your size</h4>
        <div className={styles.sizes}>
          <div className={styles.sizeItem}>
            S
          </div>
          <div className={styles.sizeItem}>
            M
          </div>
          <div className={styles.sizeItem}>
            L
          </div>
          <div className={styles.sizeItem}>
            XL
          </div>
        </div>
      </div>
      <Button
        label="ADD TO CART"
        background="red"
        className={styles.addToCartBox}
      />
    </div>
  </div>;
}

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
