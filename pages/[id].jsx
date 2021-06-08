import React from 'react';
import PropTypes from 'prop-types';
import Default from 'layouts/Default/Default';
import MusicDetail from 'templates/MusicDetail/MusicDetail';
import { groq } from 'next-sanity';
import { getClient, urlFor } from 'utils/sanity';
import Head from 'next/head';

const query = groq`
  {
    "songs": * [_type == 'song'] {
      slug,
    },
    "song": * [slug.current == $slug][0] {
      name,
      coverImage,
      background,
      slug,
      lyric,
      album -> {
        name,
        releaseDate
      }
    },
  }
`;

export async function getStaticProps({ preview = false, params }) {
  const data = await getClient(preview).fetch(query, { slug: params.id });
  return {
    props: {
      data: data.song,
    },
  };
}

export async function getStaticPaths({ preview = false }) {
  const data = await getClient(preview).fetch(query, { slug: '' });

  const paths = data.songs.map((item) => (
    {
      params: { id: String(item.slug.current) },
    }
  ));
  return {
    paths,
    fallback: false,
  };
}

function Music({ data }) {
  const title = `Checkout ${data.name} at Suboi official website`;
  return <Default>
    <Head>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content=""/>
      <meta property="og:image" content={urlFor(data.background.asset._ref) || urlFor(data.coverImage.asset._ref)} />
    </Head>
    <MusicDetail item={data}/>
  </Default>;
}

Music.propTypes = {
  data: PropTypes.object,
};

export default Music;
