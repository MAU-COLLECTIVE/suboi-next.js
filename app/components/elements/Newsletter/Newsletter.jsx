import React, { useState, useEffect } from 'react';
import Button from 'elements/Button/Button';
import Close from 'public/icons/close-light.svg';
import clsx from 'clsx';
import styles from './Newsletter.module.scss';

function Newsletter() {
  const [isShown, setIsShown] = useState(true);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [res, setRes] = useState({
    success: null,
    message: '',
  });

  useEffect(() => {
    const subscribed = localStorage.getItem('subscribed');
    if (subscribed) setIsShown(false);
    else localStorage.setItem('subscribed', true);
  }, []);

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
    <form onSubmit={handleSubmit} className={clsx(styles.newsletter,
      isShown ? styles.showNewsletter : styles.hideNewsletter)}>
      <button
        type="button"
        className={styles.btnClose}
        onClick={() => setIsShown(false)}>
        <Close style={{ fill: 'green' }}/>
      </button>
      <div className={styles.content}>
        <div className={styles.form}>
          <h2>Newsletter</h2>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
          />
          <Button
            background="transparent"
            label="SUBSCRIBE"
            loading={isLoading}
          />
        </div>
        <p className={clsx(styles.message, !res.success && styles.messageError)}>{res.message}</p>
      </div>
    </form>
  );
}

export default Newsletter;
