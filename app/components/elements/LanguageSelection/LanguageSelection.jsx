import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import styles from './LanguageSelection.module.scss';

function LanguageSelection() {
  const { pathname } = useRouter();
  return (
    <div className={clsx(styles.language,
      (pathname === '/' || pathname === '/music/[id]') && styles.languageWhite)
    }>
      <h4 className={styles.languageText}>VN</h4>
      <p>/</p>
      <h4 className={styles.languageText}>EN</h4>
    </div>
  );
}

export default LanguageSelection;
