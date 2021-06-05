import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Cart.module.scss';
import Close from '../../../../../public/icons/close.svg';
import CheckoutBox from './CheckoutBox/CheckoutBox';
import CartItems from './CartItems/CartItems';

function Cart({ openCart, onClick }) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return (
    <section
      onClick={onClick}
      id="box"
      className={clsx(
        styles.cart,
        openCart && styles.openCart,
      )}
      style={{ height: `${height}px` }}
    >
      <div
        className={clsx(
          styles.cartBox,
          openCart && styles.cartBoxOpen,
        )}
      >
        <CartItems/>
        <CheckoutBox/>
        <div className={styles.closeIcon} onClick={onClick} id="btn">
          <Close/>
        </div>
      </div>
    </section>
  );
}

Cart.propTypes = {
  onClick: PropTypes.func,
  openCart: PropTypes.bool,
};

export default Cart;
