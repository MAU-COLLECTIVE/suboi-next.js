import React from 'react';
import SectionOne from 'modules/Home/SectionOne/SectionOne';

function HomePage() {
  return (
    <React.Fragment>
      <SectionOne />
    </React.Fragment>
  );
}

HomePage.propTypes = {
  songs: PropTypes.array,
  photos: PropTypes.array,
};

export default HomePage;
