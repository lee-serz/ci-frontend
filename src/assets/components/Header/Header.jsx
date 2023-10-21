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

        <nav>
          <div className={styles.link}><a href="/">Направления</a></div>
          <div className={styles.link}><a href="/">Отбор</a></div>
          <div className={styles.link}><a href="/">Условия</a></div>
        </nav>
      </div>

      <div>
        <button className={styles.button}>Подать заявку</button>
      </div>
    </header>
    </div>
  );
};

export default Header;
