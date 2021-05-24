import React from 'react';
import Button from 'elements/Button/Button';
import styles from './CheckoutBox.module.scss';

function CheckoutBox() {
  return (
    <div className={styles.cartTotal}>
      <div className={styles.totalBox}>
        <h4>TOTAL</h4>
        <p className={styles.smallText}>Incl.taxes</p>
        <p className={styles.totalPrice}>$0</p>
        <Button label="CHECKOUT" background="red" className={styles.checkoutBtn}/>
      </div>
    </div>
  );
}
export default CheckoutBox;
