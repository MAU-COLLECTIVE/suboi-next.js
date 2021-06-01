import Button from 'elements/Button/Button';
import React, { useContext } from 'react';
import { CartContext } from 'contexts/Cart';
import PlusIcon from 'public/icons/plus.svg';
import MinusIcon from 'public/icons/minus.svg';
import { urlFor } from 'utils/sanity';
import styles from './CartItems.module.scss';

function CartItems() {
  const {
    cartItems,
    minusCart,
    plusCart,
    removeCartItem,
  } = useContext(CartContext);

  return (
    <div className={styles.cartItems}>
      { cartItems.length > 0 && cartItems.map((item, index) => <div
        className={styles.item}
        key={index}
      >
        <div className={styles.left}>
          <img src={urlFor(item.productImage[0].asset._ref)}></img>
          <div className={styles.counter}>
            <div
              className={styles.countBtn}
              onClick={() => minusCart({ ...item, size: item.size })}
            >
              <MinusIcon/>
            </div>
            <div className={styles.countBox}>
              {item.count}
            </div>
            <div
              className={styles.countBtn}
              onClick={() => plusCart({ ...item, size: item.size })}>
              <PlusIcon />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <h4>{item.name}</h4>
          <p className={styles.text}>size {item.size}</p>
          <div className={styles.price}>${item.price}</div>
          <Button
            label="Remove Item"
            className={styles.removeBtn}
            onClick={() => removeCartItem({ ...item, size: item.size })}
          />
        </div>
      </div>)}
      { cartItems.length === 0 && <p className={styles.textEmpty}>Your cart is empty :(</p>}
    </div>
  );
}
export default CartItems;
