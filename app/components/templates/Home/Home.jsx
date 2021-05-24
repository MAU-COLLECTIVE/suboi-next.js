import React from 'react';
import PropTypes from 'prop-types';
import SectionOne from 'modules/Home/SectionOne/SectionOne';
import SectionTwo from 'modules/Home/SectionTwo/SectionTwo';
import SectionThree from 'modules/Home/SectionThree/SectionThree';
import SectionFour from 'modules/Home/SectionFour/SectionFour';
import SectionFive from 'modules/Home/SectionFive/SectionFive';
import SectionSix from 'modules/Home/SectionSix/SectionSix';

function HomePage({ songs, photos }) {
  return (
    <React.Fragment>
      <SectionOne />
      <SectionTwo />
      <SectionThree songs={songs}/>
      <SectionFour />
      <SectionFive photos={photos}/>
      <SectionSix />
    </React.Fragment>
  );
}

HomePage.propTypes = {
  songs: PropTypes.array,
  photos: PropTypes.array,
};

export default HomePage;
