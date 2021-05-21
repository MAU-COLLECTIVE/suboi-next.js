import React from 'react';
import PropTypes from 'prop-types';
import SectionThree from 'modules/Home/SectionThree/SectionThree';

function HomePage({ songs }) {
  return <div style={{
    background: '#444',
    minHeight: '100vh',
    paddingTop: '100px',
  }}>
    <SectionThree songs={songs}/>
  </div>;
}

HomePage.propTypes = {
  songs: PropTypes.array,
};

export default HomePage;
