import React from 'react';
import Button from 'elements/Button/Button';
import styles from './CheckoutBox.module.scss';

function CheckoutBox() {
  return (
    <div className={styles.cartTotal}>
      <div className={styles.totalBox}>
        <h4>TOTAL</h4>
        <p className={styles.text}>Incl.taxes</p>
        <p className={styles.totalPrice}>$0</p>
        <div className={styles.checkoutBtn}>
          <Button label="CHECKOUT" background="red" />
        </div>
      </div>
    </div>
  );
}
export default CheckoutBox;
