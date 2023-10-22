import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'

function Navigation() {
  return (
    <div className={styles.nav_admin}>
      <Link className={styles.link} to="/candidates">Кандидаты</Link>
      <Link className={styles.link} to="/accepted">Принятые кандидаты</Link>
      <Link className={styles.link} to="/practice-management">Управление практиками</Link>
      <Link className={styles.link} to="/internship-management">Управление стажировками</Link>
    </div>
  );
}

export default Navigation;
