import React from 'react'
import styles from './Main.module.css';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className={styles.main}>
        <div className={styles.container}>
            <h1>Практика / Стажировка в устойчивом банке</h1>
            <Link className={styles.btn} to={'/personal-data'}>Подать заявку</Link>
        </div>
    </div>
  )
}

export default Main