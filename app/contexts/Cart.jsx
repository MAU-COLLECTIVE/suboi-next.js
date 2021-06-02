import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      setCartItems(JSON.parse(localStorage.getItem('cart')));
    }
  }, []);

  useEffect(() => {
    let total = 0;
    let total2 = 0;
    for (let i = 0; i < cartItems.length; i += 1) {
      total += cartItems[i].count;
      total2 += (cartItems[i].count * cartItems[i].price);
    }
    setTotalPrice(total2);
    setTotalCount(total);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const clearCart = () => {
    setCartItems([]);
  };

  const isSlugExists = (arr, item) => {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].slug.current === item) {
        return true;
      }
    }
    return false;
  };

  const isSizeExists = (arr, slug, size) => {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].slug.current === slug && arr[i].size === size) {
        return i;
      }
    }
    return false;
  };

  const addToCart = (item) => {
    const slug = item.slug.current;
    if (cartItems.length > 0) {
      if (isSlugExists(cartItems, slug)) {
        if (typeof (isSizeExists(cartItems, slug, item.size)) === 'number') {
          const index = isSizeExists(cartItems, slug, item.size);
          const newData = [...cartItems];
          newData.splice(index, 1, { ...item, count: cartItems[index].count + 1 });
          setCartItems(newData);
        } else {
          setCartItems((prev) => [...prev, { ...item, count: 1 }]);
        }
      } else {
        setCartItems((prev) => [...prev, { ...item, count: 1 }]);
      }
    } else {
      setCartItems((prev) => [...prev, { ...item, count: 1 }]);
    }
  };

  const minusCart = (item) => {
    const slug = item.slug.current;
    const { size } = item;
    if (item.count > 1) {
      for (let i = 0; i < cartItems.length; i += 1) {
        if (cartItems[i].slug.current === slug) {
          if (cartItems[i].size === size) {
            const newData = [...cartItems];
            newData.splice(i, 1, { ...item, count: cartItems[i].count - 1 });
            setCartItems(newData);
          }
        }
      }
    }
  };

  const plusCart = (item) => {
    const slug = item.slug.current;
    const { size } = item;
    for (let i = 0; i < cartItems.length; i += 1) {
      if (cartItems[i].slug.current === slug) {
        if (cartItems[i].size === size) {
          const newData = [...cartItems];
          newData.splice(i, 1, { ...item, count: cartItems[i].count + 1 });
          setCartItems(newData);
        }
      }
    }
  };

  const removeCartItem = (item) => {
    const slug = item.slug.current;
    const { size } = item;
    for (let i = 0; i < cartItems.length; i += 1) {
      if (cartItems[i].slug.current === slug) {
        if (cartItems[i].size === size) {
          const newData = [...cartItems];
          newData.splice(i, 1);
          setCartItems(newData);
        }
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        totalCount,
        minusCart,
        plusCart,
        removeCartItem,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.any,
};
