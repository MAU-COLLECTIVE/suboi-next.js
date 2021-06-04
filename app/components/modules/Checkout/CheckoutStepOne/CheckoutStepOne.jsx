import React, { useContext, useEffect } from 'react';
import Button from 'elements/Button/Button';
import PropTypes from 'prop-types';
import { CartContext } from 'contexts/Cart';
import { urlFor } from 'utils/sanity';
import { useRouter } from 'next/router';
import CheckoutItem from './CheckoutItem/CheckoutItem';
import styles from './CheckoutStepOne.module.scss';

function CheckoutStepOne({ onClick }) {
  const router = useRouter();
  const {
    cartItems,
    totalPrice,
  } = useContext(CartContext);

  useEffect(() => {
    if (cartItems.length === 0) router.push('/shop');
  }, []);

  return (
    <div className={styles.checkout}>
      <div className={styles.checkoutLeft}>
        <h4 className={styles.title}>Order summary</h4>
        {cartItems.map((item) => <CheckoutItem
          name={item.name}
          price={item.price}
          image={urlFor(item.productImage[0].asset._ref)}
          size={item.size}
          key={item.slug.current}
        />)}
      </div>
      <div className={styles.checkoutRight}>
        <h4 className={styles.title}>TOTAL</h4>
        <div className={styles.subtotal}>
          <div>
            <p className={styles.test}>Subtotal</p>
            <p className={styles.test}>${totalPrice}</p>
          </div>
          <div>
            <p className={styles.test}>Shipping</p>
            <p className={styles.test}>Inquiry</p>
          </div>
          <div>
            <p className={styles.test}>VAT</p>
            <p className={styles.test}>Inquiry</p>
          </div>
        </div>
        <div className={styles.total}>
          <div>
            <p className={styles.test}>Total</p>
            <h3>${totalPrice}</h3>
          </div>
        </div>
        <Button
          label="PROCEED TO CHECKOUT"
          background="red"
          className={styles.button}
          onClick={() => onClick(1)}
        />
      </div>
    </div>
  );
}

CheckoutStepOne.propTypes = {
  onClick: PropTypes.func,
};
export default CheckoutStepOne;
