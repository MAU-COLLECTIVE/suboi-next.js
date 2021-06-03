import React from 'react';
import PropTypes from 'prop-types';
import { CartProvider } from '../app/contexts/Cart';
import { CategoryProvider } from '../app/contexts/Category';
import '../app/styles/base/_base.scss';

function App({ Component, pageProps }) {
  return <CategoryProvider>
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  </CategoryProvider>;
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default App;
