import React from 'react';
import Background from 'elements/Background/Background';
import Button from 'elements/Button/Button';
import styles from './SectionSix.module.scss';

function SectionTwo() {
  return (
    <div className={styles.container}>
      <Background
        url="https://viethiphop.vn/wp-content/uploads/2020/10/Untitled-26-1536x782.jpg"
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
            <p>kiwi@mau.network</p>
          </div>
          <div>
            <h2>Business Inquiries</h2>
            <p>suboibooking@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
