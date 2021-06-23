import React from 'react';
import PropTypes from 'prop-types';
import { groq } from 'next-sanity';
import { getClient } from 'utils/sanity';
import Default from 'layouts/Default/Default';
import VideoTemplate from 'templates/Video/Video';
import { useRouter } from 'next/router';
import Head from 'next/head';

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
    "video": * [_type == 'video'] {
      _id,
      title,
      thumbnail,
      youtubeEmbedLink
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

function Video({ data }) {
  const { locale } = useRouter();
  const title = locale === 'en_US'
    ? 'Checkout lastest video from Suboi'
    : 'Xem các video mới nhất từ Suboi';

  return <Default social={data.contact.social}>
    <Head>
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="SUBOI" />
    </Head>
    <VideoTemplate video={data.video} />
  </Default>;
}

Video.propTypes = {
  data: PropTypes.object,
};

export default Video;
