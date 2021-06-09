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
    if (email) {
      setLoading(true);
      const formData = new FormData();
      let string = '';
      for (let i = 0; i < cartItems.length; i += 1) {
        string += `${cartItems[i].name}|${cartItems[i].priceForSize || cartItems[i].price}|${cartItems[i].size || 'Default'}|${cartItems[i].count},`;
      }
      formData.append('Product Name', string);
      formData.append('Email', email);
      const res = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL, {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
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
