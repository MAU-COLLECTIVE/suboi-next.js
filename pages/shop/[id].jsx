import React from 'react';
import PropTypes from 'prop-types';
import Default from 'layouts/Default/Default';
import ShopDetail from 'templates/ShopDetail/ShopDetail';
import { groq } from 'next-sanity';
import { getClient } from 'utils/sanity';

const query = groq`
  {
    "products": * [_type == 'product'] {
      slug,
    },
    "product": * [slug.current == $slug][0] {
      name,
      slug,
      productImage,
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
  return <Default>
    <ShopDetail item={data.product} categories={data.categories}/>
  </Default>;
}

Shop.propTypes = {
  data: PropTypes.object,
};

export default Shop;
