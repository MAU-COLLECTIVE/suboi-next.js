import React from 'react';
import PropTypes from 'prop-types';
import Default from 'layouts/Default/Default';
import ShopDetail from 'templates/ShopDetail/ShopDetail';
import { groq } from 'next-sanity';
import { getClient, urlFor } from 'utils/sanity';
import Head from 'next/head';

const query = groq`
  {
    "products": * [_type == 'product'] {
      slug,
    },
    "product": * [slug.current == $slug][0] {
      name,
      slug,
      productImage,
      description,
      price,
      productVariant[] {
        name,
        price
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

export async function getStaticProps({ preview = false, params }) {
  const data = await getClient(preview).fetch(query, { slug: params.id });
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths({ preview = false }) {
  const data = await getClient(preview).fetch(query, { slug: '' });

  const paths = data.products.map((item) => (
    {
      params: { id: String(item.slug.current) },
    }
  ));
  return {
    paths,
    fallback: false,
  };
}

function Shop({ data }) {
  const title = `Checkout ${data.product?.name.toUpperCase()} merchandise at Suboi Shop`;
  return <Default>
    <Head>
      <meta property="og:title" content={title}/>
      <meta property="og:image" content={urlFor(data.product?.productImage[0]?.asset?._ref)}/>
    </Head>
    <ShopDetail
      item={data.product}
      categories={data.categories}
      items={data.products}
      background={data.background}
    />
  </Default>;
}

Shop.propTypes = {
  data: PropTypes.object,
};

export default Shop;
