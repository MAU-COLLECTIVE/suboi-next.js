import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Cart from 'modules/Shop/Cart/Cart';
import Items from 'modules/Shop/Items/Items';
import CartButton from 'modules/Shop/CartButton/CartButton';
import Background from 'elements/Background/Background';
import Category from 'modules/Shop/Category/Category';
import { CategoryContext } from 'contexts/Category';
import { urlFor } from 'utils/sanity';
import styles from './ShopListing.module.scss';

function ShopListing({ items, categories, background }) {
  const { currentCategory } = useContext(CategoryContext);
  const [openCart, setOpenCart] = useState(false);
  const [openCate, setOpenCate] = useState(false);
  const [appearCart, setAppearCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(items);

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

  const chooseCategory = (cate) => {
    if (cate === 'all') {
      setSelectedCategory(items);
    } else {
      const data = [];
      for (let i = 0; i < items.length; i += 1) {
        if (items[i].productCategory.slug.current === cate) {
          data.push(items[i]);
        }
      }
      setSelectedCategory(data);
    }
    setOpenCate(false);
  };

  useEffect(() => {
    chooseCategory(currentCategory);
  }, [currentCategory]);

  return <div className={styles.container}>
    <Background
      url={urlFor(background.shopBackground).url()}
      className={styles.background}
    />
    <div className={styles.items}>
      <Items data={selectedCategory} />
      {(categories.length > 1 && !openCart) && <Category
        data={categories}
        openCate={openCate}
        onClick={handleOnClick}
        chooseCategory={(cate) => chooseCategory(cate)}
      />}
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
  background: PropTypes.object,
};

export default ShopListing;
