import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import styles from './LanguageSelection.module.scss';

function LanguageSelection() {
  const { pathname, ...router } = useRouter();
  return (
    <div className={clsx(styles.language,
      (pathname === '/' || pathname === '/[id]' || pathname === '/video') && styles.languageWhite)
    }>
      <h4
        className={styles.languageText}
        onClick={() => router.push(pathname, router.query, { locale: 'vi_VN' })}
      >VN</h4>
      <p>/</p>
      <h4
        className={styles.languageText}
        onClick={() => router.push(pathname, router.query, { locale: 'en_US' })}
      >EN</h4>
    </div>
  );
}

export default LanguageSelection;
