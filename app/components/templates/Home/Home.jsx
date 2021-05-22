import React from 'react';
import PropTypes from 'prop-types';
import SectionThree from 'modules/Home/SectionThree/SectionThree';
import SectionFive from 'modules/Home/SectionFive/SectionFive';

function HomePage({ songs, photos }) {
  return <div style={{
    background: '#444',
    minHeight: '100vh',
    paddingTop: '100px',
  }}>
    <SectionThree songs={songs}/>
    <SectionFive photos={photos}/>
  </div>;
}

HomePage.propTypes = {
  songs: PropTypes.array,
  photos: PropTypes.array,
};

export default HomePage;
