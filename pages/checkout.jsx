import React from 'react';
import PropTypes from 'prop-types';
import CheckoutLayout from 'layouts/CheckoutLayout/CheckoutLayout';
import CheckoutPage from 'templates/Checkout/Checkout';
import { groq } from 'next-sanity';
import { getClient } from 'utils/sanity';

const query = groq`
  {
    "contact": * [_type == 'contact'][0] {
      businessInquiry {
        mainEmail,
        manageEmail
      },
      social {
        appleMusic,
        facebook,
        instagram,
        spotify,
        youtube
      }
    },
  }
`;

export async function getStaticProps({ preview = false }) {
  const data = await getClient(preview).fetch(query);
  return {
    props: {
      data,
    },
  };
}
function Checkout({ data }) {
  return <CheckoutLayout social={data.contact.social}>
    <CheckoutPage/>
  </CheckoutLayout>;
}

Checkout.propTypes = {
  data: PropTypes.object,
};

export default Checkout;
