import React from 'react';
import PropTypes from 'prop-types';
import { groq } from 'next-sanity';
import { getClient } from 'utils/sanity';
import Default from 'layouts/Default/Default';
import VideoTemplate from 'templates/Video/Video';

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
  return <Default social={data.contact.social}>
    <VideoTemplate video={data.video} />
  </Default>;
}

Video.propTypes = {
  data: PropTypes.object,
};

export default Video;
