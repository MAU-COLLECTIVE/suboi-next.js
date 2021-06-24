import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import * as gtag from 'utils/gtag';
import { CartProvider } from '../app/contexts/Cart';
import { CategoryProvider } from '../app/contexts/Category';
import '../app/styles/base/_base.scss';

function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
