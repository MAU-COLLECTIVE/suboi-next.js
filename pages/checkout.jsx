import React from 'react';
import PropTypes from 'prop-types';
import CheckoutLayout from 'layouts/CheckoutLayout/CheckoutLayout';
import CheckoutPage from 'templates/Checkout/Checkout';

function Checkout() {
  return <CheckoutLayout>
    <CheckoutPage/>
  </CheckoutLayout>;
}

Checkout.propTypes = {
  data: PropTypes.object,
};

export default Checkout;
