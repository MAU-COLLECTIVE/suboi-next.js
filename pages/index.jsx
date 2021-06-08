import React from 'react';
import PropTypes from 'prop-types';
import HomeLayout from 'layouts/HomeLayout/HomeLayout';
import HomePage from 'templates/Home/Home';
import { groq } from 'next-sanity';
import { getClient } from 'utils/sanity';

const query = groq`
  {
    "promote": * [_type == 'promote'][0] {
      albumAndSong-> {
        name,
        lyric,
        background,
        albumImage
      },
      ctaLink {
        buyAlbum,
        playVideo
      }
    },
    "about": * [_type == 'about'][0] {
      biography {
        lang
      }
    },
    "songs": * [_type == 'song'] {
      name,
      coverImage,
      background,
      slug,
      album -> {
        name,
        releaseDate
      },
      "albumReleaseDate": album -> releaseDate
    } | order(albumReleaseDate desc),
    "photos": * [_type == 'photo'] {
      photoName,
      image,
    },
    "tourName": * [_type == 'tourName'][0] {
      name
    },
    "tour": * [_type == 'tour'] | order(tourDate asc) {
      _id,
      venue,
      city,
      tourDate,
      tourTicket
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
    "background": * [_type == 'background'][0] {
      topBackground,
      aboutBackground,
      musicBackground,
      tourBackground,
      photoBackground,
      contactBackground
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
    <HomeLayout social={data.contact.social}>
      <HomePage
        background={data.background}
        tour={{
          tourName: data.tourName.name,
          tour: data.tour,
        }}
        about={data.about}
        promote={data.promote}
        songs={data.songs}
        photos={data.photos}
        contact={data.contact}
      />
    </HomeLayout>
  );
}

Home.propTypes = {
  data: PropTypes.object,
};

export default Home;
