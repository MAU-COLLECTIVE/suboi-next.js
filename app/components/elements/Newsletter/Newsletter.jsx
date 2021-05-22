import React, { useState } from 'react';
import Button from 'elements/Button/Button';
import Close from 'public/icons/close.svg';
import clsx from 'clsx';
import styles from './Newsletter.module.scss';

function Newsletter() {
  const [isShown, setIsShown] = useState(true);

  return (
    <div className={clsx(styles.newsletter,
      isShown ? styles.showNewsletter : styles.hideNewsletter)}>
      <button
        type="button"
        className={styles.btnClose}
        onClick={() => setIsShown(false)}>
          <Close />
      </button>
      <div className={styles.content}>
        <h2>Newsletter</h2>
        <input type="text" placeholder="Enter Your Email" />
        <Button
          background="transparent"
          label="SUBSCRIBE"
          onClick={() => alert('You subscribed')}
        />
      </div>
    </div>
  );
}

export default Newsletter;
