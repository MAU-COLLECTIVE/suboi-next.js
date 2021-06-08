import React from 'react';
import PropTypes from 'prop-types';
import Default from 'layouts/Default/Default';
import MusicDetail from 'templates/MusicDetail/MusicDetail';
import { groq } from 'next-sanity';
import { getClient } from 'utils/sanity';

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
  return <Default>
    <MusicDetail item={data}/>
  </Default>;
}

Music.propTypes = {
  data: PropTypes.object,
};

export default Music;
