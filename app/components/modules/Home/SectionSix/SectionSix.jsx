import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Background from 'elements/Background/Background';
import Button from 'elements/Button/Button';
import clsx from 'clsx';
import styles from './SectionSix.module.scss';

function SectionSix({ background, contact }) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [res, setRes] = useState({
    success: null,
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const subscribe = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    }).then((response) => response.json());

    if (subscribe.statusCode === 200) {
      localStorage.setItem('subscribed', true);
      setRes({
        success: true,
        message: 'Subsribed to newsletter!',
      });
    } else if (subscribe.statusCode === 400) {
      setRes({
        success: false,
        message: subscribe.detail,
      });
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.container}>
      <Background
        url={background}
        className={styles.background}
      />
      <form onSubmit={handleSubmit} className={styles.content}>
        <div className={styles.newsletter}>
          <div>
            <h2>Newsletter</h2>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              required
            />
            <Button
              className={styles.button}
              background="transparent"
              label="SUBSCRIBE"
              loading={isLoading}
            />
          </div>
          <p className={clsx(styles.message, !res.success && styles.messageError)}>{res.message}</p>
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
      </form>
    </div>
  );
}

SectionSix.propTypes = {
  background: PropTypes.string,
  contact: PropTypes.object,
};

export default SectionSix;
