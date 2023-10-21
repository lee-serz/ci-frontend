import React from 'react'
import styles from './About.module.css'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <div className={styles.left}>
           <img src="./about.png" alt="ci" />
        </div>
        <div className={styles.right}>
          <div className={styles.top}>ЕСЛИ ТЫ ИНТЕРЕСУЕШЬСЯ ТРЕНДАМИ IT, НЕ БОИШЬСЯ ВЫЗОВОВ, МЕЧТАЕШЬ РАБОТАТЬ В КРУПНОЙ ТЕХНОЛОГМЧНОЙ КОМПАНИИ И РАЗВИВАТЬ ПРОДУКТЫ ДЛЯ МИЛЛИОНОВ ПОЛЬЗОВАТЕЛЕЙ - ТЕБЕ С НАМИ ТОЧНО ПО ПУТИ</div>
          <div className={styles.bot}>
            <div className={styles.item}>
              <div className={styles.item__title}>Знания и навыки</div>
              <div className={styles.item__subtitle}>Для каждого направления - свои требования.
Скиллы оцениваются в процессе отбора</div>
            </div>
            <div className={styles.item}>
              <div className={styles.item__title}>Знания и навыки</div>
              <div className={styles.item__subtitle}>Для каждого направления - свои требования.
Скиллы оцениваются в процессе отбора</div>
            </div>
            <div className={styles.item}>
              <div className={styles.item__title}>Знания и навыки</div>
              <div className={styles.item__subtitle}>Для каждого направления - свои требования.
Скиллы оцениваются в процессе отбора</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default About