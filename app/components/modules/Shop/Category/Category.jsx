import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import ArrowDown from 'public/icons/arrow-down.svg';
import ArrowUp from 'public/icons/arrow-up.svg';
import Button from 'elements/Button/Button';
import Close from 'public/icons/close.svg';
import styles from './Category.module.scss';

function Category({
  onClick,
  openCate,
  data,
  chooseCategory,
}) {
  const { pathname } = useRouter();
  const [appearArrow, setAppearArrow] = useState(false);
  const [sizeChanged, setSizeChanged] = useState(false);

  useEffect(() => {
    function updateSize() {
      setSizeChanged(!sizeChanged);
    }
    if (window.innerWidth < 1919) {
      setAppearArrow(false);
    } else {
      setAppearArrow(true);
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [pathname, sizeChanged]);

  return (
    <div className={styles.category}>
      <div
        className={styles.categoryBtn}
        onClick={onClick}
      >
        <p className={styles.smallText}>CATEGORIES</p>
        { !appearArrow && <div className={styles.icon}>
            {openCate ? <ArrowUp /> : <ArrowDown />}
          </div>
        }
      </div>
      <div className={clsx(styles.cateBox, openCate && styles.cateBoxOpen)}>
        <div className={styles.closeIcon} onClick={onClick}>
          <Close/>
        </div>
        <Button
          className={styles.button}
          background="transparent"
          label="ALL"
          onClick={() => chooseCategory('all')}
        />
        {data.map((item) => <Button
          key={item.slug.current}
          className={styles.button}
          background="transparent"
          label={item.name}
          onClick={() => chooseCategory(item.slug.current)}
        />)}
      </div>
    </div>
  );
}

Category.propTypes = {
  onClick: PropTypes.func,
  openCate: PropTypes.bool,
  data: PropTypes.array,
  chooseCategory: PropTypes.func,
};

export default Category;
