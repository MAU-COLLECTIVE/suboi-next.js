import React from 'react';
import PropTypes from 'prop-types';
import Background from 'elements/Background/Background';
import Button from 'elements/Button/Button';
import styles from './SectionSix.module.scss';

function SectionSix({ background, contact }) {
  return (
    <div className={styles.container}>
      <Background
        url={background}
        className={styles.background}
      />
      <div className={styles.content}>
        <div className={styles.newsletter}>
          <h2>Newsletter</h2>
          <input type="text" placeholder="Enter Your Email" />
          <Button
            className={styles.button}
            background="transparent"
            label="SUBSCRIBE"
            onClick={() => alert('You subscribed')}
          />
        </div>
        <div className={styles.info}>
          <div>
            <h2>Management</h2>
            <p>{contact?.businessInquiry?.manageEmail}</p>
          </div>
          <div>
            <h2>Business Inquiries</h2>
            <p>{contact?.businessInquiry?.mainEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

SectionSix.propTypes = {
  background: PropTypes.string,
  contact: PropTypes.object,
};

export default SectionSix;
