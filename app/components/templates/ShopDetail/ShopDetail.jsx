import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Cart from 'modules/Shop/Cart/Cart';
import ItemDetail from 'modules/Shop/ItemDetail/ItemDetail';
import CartButton from 'modules/Shop/CartButton/CartButton';
import styles from './ShopDetail.module.scss';

function ShopDetail({ item }) {
  const [openCart, setOpenCart] = useState(false);
  const [appearCart, setAppearCart] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.innerWidth <= 1024 && window.innerWidth >= 600) {
        if (!openCart) {
          if (this.prev < window.pageYOffset) {
            setAppearCart(true);
          } else {
            setAppearCart(false);
          }
          this.prev = window.pageYOffset;
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [openCart]);

  const handleOnClose = (event) => {
    const { id } = event.target;
    if (id === 'cart' || id === 'box' || id === 'btn') {
      if (openCart) {
        setOpenCart(false);
        document.body.style.overflow = 'auto';
      } else {
        setOpenCart(true);
        setAppearCart(false);
        document.body.style.overflow = 'hidden';
      }
    }
  };

  return <div className={styles.container}>
    <div className={styles.background}/>
    <ItemDetail item={item}/>
    <CartButton
      openCart={openCart}
      appearCart={appearCart}
      onClick={handleOnClose}
    />
    <Cart
      openCart={openCart}
      onClick={handleOnClose}
    />
  </div>;
}

ShopDetail.propTypes = {
  item: PropTypes.object,
};

export default ShopDetail;
