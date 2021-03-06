import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { groq } from 'next-sanity';
import { getClient, urlFor } from 'utils/sanity';
import Default from 'layouts/Default/Default';
import ShopDetail from 'templates/ShopDetail/ShopDetail';

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
    },
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

export async function getStaticProps({ preview = false, params }) {
  const data = await getClient(preview).fetch(query, { slug: params.id });
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths({ preview = false, locales }) {
  const data = await getClient(preview).fetch(query, { slug: '' });
  const paths = [];
  data.products.map((item) => (
    locales.map((item2) => (
      paths.push(
        {
          params: { id: String(item.slug.current) }, locale: item2,
        },
      )
    ))
  ));
  return {
    paths,
    fallback: false,
  };
}

function Shop({ data }) {
  const { locale } = useRouter();
  const title = locale === 'en_US'
    ? `Checkout ${data.product?.name.toUpperCase()} merchandise at Suboi Shop`
    : `Sản phẩm ${data.product?.name.toUpperCase()} | Suboi Shop`;
  return <Default social={data.contact.social}>
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
