import React, { useState } from 'react';
import Button from 'elements/Button/Button';
import PropTypes from 'prop-types';
import styles from './CheckoutStepTwo.module.scss';

function CheckoutStepTwo({ onClick }) {
  const [email, setEmail] = useState('');

  const handleOnClick = () => {
    // onClick(2);
    const formData = new FormData();
    formData.append('message', 'message');
    formData.append('email', 'John123@gmail.com');

    fetch('https://script.google.com/macros/s/AKfycbxi1Yv7hDYA5QIj5QogSLWuTeWOzEnPtPsHsAXh7gMtIRkEjsU4/exec', {
      body: formData,
      method: 'post',
    });
  };

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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button
            label="SUBMIT"
            background="red"
            className={styles.button}
            onClick={handleOnClick}
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
