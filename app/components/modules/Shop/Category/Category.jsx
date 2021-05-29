import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import ArrowDown from 'public/icons/arrow-down.svg';
import ArrowUp from 'public/icons/arrow-up.svg';
import Button from 'elements/Button/Button';
import styles from './Category.module.scss';

function Category({ onClick, openCate }) {
  const { pathname } = useRouter();
  const [appearArrow, setAppearArrow] = useState(false);

  useEffect(() => {
    function updateSize() {
      if (window.innerWidth <= 1920) {
        setAppearArrow(false);
      } else {
        setAppearArrow(true);
      }
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [pathname]);

  return (
    <div className={styles.category}>
      <div
        className={clsx(
          styles.categoryBtn,
          // openCart && styles.openCart,
          // appearCart && styles.appearCart,
          // alwayAppearCart && styles.alwayAppearCart,
        )}
        onClick={onClick}
      >
        <p className={styles.smallText}>CATEGORIES</p>
        { appearArrow && <div className={styles.icon}>
            {openCate ? <ArrowUp /> : <ArrowDown />}
          </div>
        }
      </div>
      <div className={clsx(styles.cateBox, openCate && styles.cateBoxOpen)}>
        <Button
          className={styles.button}
          background="transparent"
          label="ALL"
        />
        <Button
          className={styles.button}
          background="transparent"
          label="T-SHIRT"
        />
        <Button
          className={styles.button}
          background="transparent"
          label="CD"
        />
      </div>
    </div>
  );
}

Category.propTypes = {
  onClick: PropTypes.func,
  openCate: PropTypes.bool,
};

export default Category;
