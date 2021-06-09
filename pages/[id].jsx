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
      streamLink,
      slug,
      lyric,
      album -> {
        name,
        releaseDate
      }
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
  const title = `Checkout ${data.song?.name?.toUpperCase()} at Suboi official website`;
  return <Default social={data.contact.social}>
    <Head>
      <meta property="og:title" content={title}/>
      <meta property="og:image" content={urlFor(data.song.background?.asset?._ref) || urlFor(data.song.coverImage?.asset?._ref)} />
    </Head>
    <MusicDetail item={data.song}/>
  </Default>;
}

Music.propTypes = {
  data: PropTypes.object,
};

export default Music;
