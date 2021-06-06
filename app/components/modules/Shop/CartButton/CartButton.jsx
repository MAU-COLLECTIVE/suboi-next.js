import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CartContext } from 'contexts/Cart';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './CartButton.module.scss';

function CartButton({ onClick, appearCart, openCart }) {
  const { totalCount } = useContext(CartContext);
  const { pathname } = useRouter();
  const [alwayAppearCart, setAlwayAppearCart] = useState(false);

  useEffect(() => {
    function updateSize() {
      if (pathname === '/shop/[id]' && window.innerWidth <= 1024 && window.innerWidth >= 600) {
        setAlwayAppearCart(true);
      } else {
        setAlwayAppearCart(false);
      }
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [pathname]);

  return (
    <div
      className={clsx(
        styles.cartButton,
        openCart && styles.openCart,
        appearCart && styles.appearCart,
        alwayAppearCart && styles.alwayAppearCart,
      )}
      onClick={onClick}
      id="cart"
    >
      <p className={styles.smallText}>CART ({totalCount})</p>
    </div>
  );
}

CartButton.propTypes = {
  onClick: PropTypes.func,
  appearCart: PropTypes.bool,
  openCart: PropTypes.bool,
};

export default CartButton;
