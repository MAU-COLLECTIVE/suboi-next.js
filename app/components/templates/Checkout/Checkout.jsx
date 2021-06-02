import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from 'contexts/Cart';
import CheckoutStepOne from 'modules/CheckoutSection/CheckoutStepOne/CheckoutStepOne';
import { useRouter } from 'next/router';
import CheckoutStepTwo from 'modules/CheckoutSection/CheckoutStepTwo/CheckoutStepTwo';
import CheckoutStepThree from 'modules/CheckoutSection/CheckoutStepThree/CheckoutStepThree';

function CheckoutSection() {
  const router = useRouter();
  const [checkoutStep, setCheckoutStep] = useState(0);
  const {
    cartItems,
    clearCart,
  } = useContext(CartContext);

  useEffect(() => {
    setTimeout(() => {
      if (cartItems.length === 0) router.push('/shop');
    }, 500);
  }, []);

  const handleOnClick = (step) => {
    setCheckoutStep(step);
    clearCart();
  };

  return (
    <React.Fragment>
      { checkoutStep === 0 && <CheckoutStepOne onClick={(step) => handleOnClick(step)}/>}
      { checkoutStep === 1 && <CheckoutStepTwo onClick={(step) => handleOnClick(step)}/>}
      { checkoutStep === 2 && <CheckoutStepThree onClick={(step) => handleOnClick(step)}/>}
    </React.Fragment>
  );
}

CheckoutSection.propTypes = {
  onClick: PropTypes.func,
};
export default CheckoutSection;
