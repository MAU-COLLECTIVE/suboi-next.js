import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Cart from 'modules/Shop/Cart/Cart';
import Items from 'modules/Shop/Items/Items';
import CartButton from 'modules/Shop/CartButton/CartButton';
import Background from 'elements/Background/Background';
import Category from 'modules/Shop/Category/Category';
import styles from './ShopListing.module.scss';

function ShopListing({ items, categories }) {
  const [openCart, setOpenCart] = useState(false);
  const [openCate, setOpenCate] = useState(false);
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

  const handleOnClick = () => {
    if (openCate) {
      setOpenCate(false);
      document.body.style.overflow = 'auto';
    } else {
      setOpenCate(true);
      document.body.style.overflow = 'hidden';
    }
  };

  return <div className={styles.container}>
    <Background
      url="https://crazyhood.com/wp-content/uploads/2018/12/suboi.png"
      className={styles.background}
    />
    <div className={styles.items}>
      <Items data={items}/>
      <Category
        data={categories}
        openCate={openCate}
        onClick={handleOnClick}
      />
      <CartButton
        openCart={openCart}
        appearCart={appearCart}
        onClick={handleOnClose}
      />
      <Cart
        openCart={openCart}
        onClick={handleOnClose}
      />
    </div>
  </div>;
}

ShopListing.propTypes = {
  items: PropTypes.array,
  categories: PropTypes.array,
};

export default ShopListing;
