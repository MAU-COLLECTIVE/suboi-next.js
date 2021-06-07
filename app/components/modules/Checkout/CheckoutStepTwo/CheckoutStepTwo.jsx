import React, { useContext, useState } from 'react';
import Button from 'elements/Button/Button';
import { CartContext } from 'contexts/Cart';
import PropTypes from 'prop-types';
import styles from './CheckoutStepTwo.module.scss';

function CheckoutStepTwo({ onClick }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { cartItems } = useContext(CartContext);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    let totalOk = 0;
    if (email) {
      setLoading(true);
      for (let i = 0; i < cartItems.length; i += 1) {
        const formData = new FormData();
        formData.append('Product Name', cartItems[i].name);
        formData.append('Product Price', cartItems[i].priceForSize || cartItems[i].price);
        formData.append('Product Variant', cartItems[i].size || 'Default');
        formData.append('Product Amount', cartItems[i].count);
        formData.append('Email', email);
        // eslint-disable-next-line no-await-in-loop
        const res = await fetch('https://script.google.com/macros/s/AKfycbzPvgLWSCETYGceL-rf0fa7xT-PosKmr7EowacCElnfRPxq8Puj/exec', {
          method: 'POST',
          body: formData,
        });
        if (res.ok) {
          totalOk += 1;
        }
      }
      if (totalOk === cartItems.length) {
        setLoading(false);
        onClick(2);
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('Enter the email please!');
    }
  };

  return (
    <div className={styles.checkout}>
      <div className={styles.checkoutLeft}>
        <h4 className={styles.title}>Finish your order</h4>
        <div className={styles.checkoutText}>
          <p className={styles.smallText}>Please submit your email to complete your purchase.</p>
        </div>
        <form className={styles.checkoutInput} onSubmit={handleOnSubmit}>
          <input
            type="email"
            className={styles.input}
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button
            label={loading ? 'LOADING...' : 'SUBMIT'}
            background="red"
            className={styles.button}
          />
        </form>
      </div>
    </div>
  );
}

CheckoutStepTwo.propTypes = {
  onClick: PropTypes.func,
};
export default CheckoutStepTwo;
