import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import SectionOne from 'modules/Home/SectionOne/SectionOne';
import SectionTwo from 'modules/Home/SectionTwo/SectionTwo';
import SectionThree from 'modules/Home/SectionThree/SectionThree';
import SectionFour from 'modules/Home/SectionFour/SectionFour';
import SectionFive from 'modules/Home/SectionFive/SectionFive';
import SectionSix from 'modules/Home/SectionSix/SectionSix';
import Header from 'modules/Header/Header';
import { urlFor } from 'utils/sanity';
import styles from './Home.module.scss';

function HomePage({ background, promote, about, songs, photos, tour, contact }) {
  const anchors = ['home', 'about', 'music', 'tour', 'photos', 'footer'];
  const router = useRouter();
  const moveSection = (id, name) => {
    if (name === 'shop') {
      router.push('/shop');
    } else {
      // eslint-disable-next-line no-undef
      fullpage_api.moveTo(id, 0);
    }
  };

  return (
    <div className={styles.app}>
      <Header onChangeSection={(id, name) => { moveSection(id, name); }}/>
      <ReactFullpage
        anchors={anchors}
        navigation={false}
        render={() => <ReactFullpage.Wrapper>
            <div className="section">
              <SectionOne
                background={urlFor(background.topBackground).url()}
                promote={promote}
              />
            </div>
            <div className="section">
              <SectionTwo
                background={urlFor(background.aboutBackground).url()}
                about={about}
              />
            </div>
            <div className="section">
              <SectionThree
                background={urlFor(background.musicBackground).url()}
                songs={songs}
              />
            </div>
            <div className="section">
              <SectionFour
                background={urlFor(background.tourBackground).url()}
                tour={tour}
              />
            </div>
            <div className="section">
              <SectionFive
                background={urlFor(background.photoBackground).url()}
                photos={photos}
              />
            </div>
            <div className="section">
              <SectionSix
                background={urlFor(background.contactBackground).url()}
                contact={contact}
              />
            </div>
          </ReactFullpage.Wrapper>
        }
      />
    </div>
  );
}

HomePage.propTypes = {
  background: PropTypes.object,
  promote: PropTypes.object,
  about: PropTypes.object,
  songs: PropTypes.array,
  photos: PropTypes.array,
  tour: PropTypes.object,
  contact: PropTypes.object,
};

export default HomePage;
