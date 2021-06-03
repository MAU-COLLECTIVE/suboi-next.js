import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Cart from 'modules/Shop/Cart/Cart';
import ItemDetail from 'modules/Shop/ItemDetail/ItemDetail';
import CartButton from 'modules/Shop/CartButton/CartButton';
import Background from 'elements/Background/Background';
import Category from 'modules/Shop/Category/Category';
import { useRouter } from 'next/router';
import { CategoryContext } from 'contexts/Category';
import styles from './ShopDetail.module.scss';

function ShopDetail({ item, categories }) {
  const router = useRouter();
  const { setCategory } = useContext(CategoryContext);
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
      } else {
        setOpenCart(true);
        setAppearCart(false);
      }
    }
  };

  const handleOnClick = () => {
    if (openCate) {
      setOpenCate(false);
    } else {
      setOpenCate(true);
    }
  };

  const handleOnAddToCart = () => {
    setOpenCart(true);
  };

  const chooseCategory = (cate) => {
    setCategory(cate);
    router.push('/shop');
    setOpenCate(false);
  };

  return <div className={styles.container}>
    <Background
      url="https://crazyhood.com/wp-content/uploads/2018/12/suboi.png"
      className={styles.background}
    />
    {categories.length > 1 && <Category
      data={categories}
      openCate={openCate}
      onClick={handleOnClick}
      chooseCategory={(cate) => chooseCategory(cate)}
    />}
    <ItemDetail item={item} showPopup={handleOnAddToCart} openCart={openCart}/>
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
  categories: PropTypes.array,
};

export default ShopDetail;
