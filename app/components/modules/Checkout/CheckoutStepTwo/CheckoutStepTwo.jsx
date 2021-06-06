import React from 'react';
import Button from 'elements/Button/Button';
import PropTypes from 'prop-types';
import styles from './CheckoutStepTwo.module.scss';

function CheckoutStepTwo({ onClick }) {
  return (
    <div className={styles.checkout}>
      <div className={styles.checkoutLeft}>
        <h4 className={styles.title}>Finish your order</h4>
        <div className={styles.checkoutText}>
          <p className={styles.smallText}>Please submit your email to complete your purchase.</p>
        </div>
        <div className={styles.checkoutInput}>
          <input
            className={styles.input}
            placeholder="Enter your email"
          />
          <Button
            label="SUBMIT"
            background="red"
            className={styles.button}
            onClick={() => onClick(2)}
          />
        </div>
      </div>
    </div>
  );
}

CheckoutStepTwo.propTypes = {
  onClick: PropTypes.func,
};
export default CheckoutStepTwo;
