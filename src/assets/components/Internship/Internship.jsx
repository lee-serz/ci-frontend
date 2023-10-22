import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import styles from './Internship.module.css';

function Internship() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://backend.xeonexus.su/api/internships')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  return (
    <div className={styles.container}>
      <div className={styles.practices}>
        <div className={styles.info}>
          <h2 className={styles.title}>Направления стажировок</h2>
          <p className={styles.subtitle}>Выбирай подходящее направление и подавай заявку</p>
        </div>

        <div className={styles.cards}>
          {data.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.card__title}>{item.title}</div>
              <div className={styles.card__subtitle}>{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Internship;
