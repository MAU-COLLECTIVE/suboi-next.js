import Header from '@module/Header/Header';
import styles from './Default.module.scss';

function Default({ children }) {
  return (
    <div className={styles.default}>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Default;
