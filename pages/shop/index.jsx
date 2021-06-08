import React from 'react';
import PropTypes from 'prop-types';
import Default from 'layouts/Default/Default';
import ShopListing from 'templates/ShopListing/ShopListing';
import { groq } from 'next-sanity';
import { getClient, urlFor } from 'utils/sanity';
import Head from 'next/head';

const query = groq`
  {
    "products": * [_type == 'product'] {
      name,
      slug,
      productImage,
      price,
      productCategory -> {
        name,
        slug
      }
    },
    "categories": * [_type == 'productCategory'] {
      name,
      slug,
      description,
    },
    "background": * [_type == 'background'][0] {
      shopBackground,
    }
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

function Shop({ data }) {
  return <Default>
    <Head>
      <meta property="og:title" content="Checkout the latest merchandise from Suboi shop"/>
      <meta property="og:image" content={urlFor(data.background?.shopBackground?.asset?._ref)}/>
    </Head>
    <ShopListing items={data.products} categories={data.categories} background={data.background}/>
  </Default>;
}

Shop.propTypes = {
  data: PropTypes.object,
};

export default Shop;
