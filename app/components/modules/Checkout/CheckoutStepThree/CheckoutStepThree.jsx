import React from 'react';
import styles from './CheckoutStepThree.module.scss';

function CheckoutStepThree() {
  return (
    <div className={styles.checkout}>
      <div className={styles.checkoutLeft}>
        <h4 className={styles.title}>Thank you!</h4>
        <div className={styles.checkoutText}>
          <p className={styles.smallText}>
            Your order is processing. Our Customer service will
            contact you immediately via email for payment inquiries and shipping information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutStepThree;
