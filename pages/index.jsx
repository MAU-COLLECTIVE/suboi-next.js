import React from 'react';
import PropTypes from 'prop-types';
import HomeLayout from 'layouts/HomeLayout/HomeLayout';
import HomePage from 'templates/Home/Home';
import { groq } from 'next-sanity';
import { getClient } from 'utils/sanity';

const query = groq`
  {
    "songs": * [_type == 'song'] {
      name,
      coverImage,
      background,
      slug,
      album -> {
        name,
        releaseDate
      }
    },
    "photos": * [_type == 'photo'] {
      photoName,
      image,
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

function Home({ data }) {
  return (
    <HomeLayout >
      <HomePage songs={data.songs} photos={data.photos}/>
    </HomeLayout>
  );
}

Home.propTypes = {
  data: PropTypes.object,
};

export default Home;
