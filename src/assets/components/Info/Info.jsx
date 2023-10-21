import React from 'react'
import styles from './Info.module.css'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <div className={styles.container}>
        <div className={styles.info}>
            <div className={styles.title}>Как к нам попасть</div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <div className={styles.circle}>1</div>
                    <div className={styles.item__info}>
                        <div className={styles.item__title}>Заполни заявку на стажировку</div>
                        <div className={styles.item__subtitle}>Заполни анкету на сайте</div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.circle}>2</div>
                    <div className={styles.item__info}>
                        <div className={styles.item__title}>Пройди тестирование</div>
                        <div className={styles.item__subtitle}>Выполнить тестовые задание после отправки анкеты</div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.circle}>3</div>
                    <div className={styles.item__info}>
                        <div className={styles.item__title}>Получи работу в крупнейшем банке Юга России</div>
                        <div className={styles.item__subtitle}>Международные и российские рейтинги подтверждают нашу устойчивость.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.footer}>
            <div className={styles.left}>Присоединяйся к нам</div>
            <div className={styles.buttons}>
            <Link className={styles.button} to={'/personal-data'}>Подать заявку</Link>
            </div>
        </div>
    </div>
  )
}

export default Info