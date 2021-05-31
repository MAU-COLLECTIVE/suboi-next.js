import React from 'react';
import PropTypes from 'prop-types';
import { CartProvider } from '../app/contexts/Cart';
import '../app/styles/base/_base.scss';

function App({ Component, pageProps }) {
  return <CartProvider>
    <Component {...pageProps} />
  </CartProvider>;
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default App;
