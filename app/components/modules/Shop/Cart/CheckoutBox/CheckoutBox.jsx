import React, { useContext } from 'react';
import Button from 'elements/Button/Button';
import { CartContext } from 'contexts/Cart';
import { useRouter } from 'next/router';
import styles from './CheckoutBox.module.scss';

function CheckoutBox() {
  const router = useRouter();
  const {
    totalPrice,
    cartItems,
  } = useContext(CartContext);

  const handleOnClick = () => {
    if (cartItems.length > 0) router.push('/checkout');
  };

  return (
    <div className={styles.cartTotal}>
      <div className={styles.totalBox}>
        <h4>TOTAL</h4>
        <p className={styles.smallText}>Incl.taxes</p>
        <p className={styles.totalPrice}>${totalPrice}</p>
        <Button
          label="CHECKOUT"
          background="red"
          className={styles.checkoutBtn}
          onClick={handleOnClick}
        />
      </div>
    </div>
  );
}
export default CheckoutBox;
