import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
      <div className={styles.left}>
        <Link className={styles.logo} to={'/home'}>
          <img src="./logo.png" alt="Logo" />
        </Link>
      </div>

      <div>
        <Link className={styles.button} to={'/personal-data'}>Подать заявку</Link>
      </div>
    </header>
    </div>
  );
};

export default Header;
