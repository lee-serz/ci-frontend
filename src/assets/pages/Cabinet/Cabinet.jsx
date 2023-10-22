import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import styles from './Cabinet.module.css';
import axios from 'axios';

const Cabinet = () => {
    const [score, setScore] = useState(null);
    const [applicationStatus, setApplicationStatus] = useState(null);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        // Получение "Результата тестирования" из сервера
        axios.get('http://94.241.141.190:9091/api/user')
            .then(response => {
                setScore(response.data.score);
            })
            .catch(error => {
                console.error('Ошибка при получении результата тестирования:', error);
            });

        // Получение "Статуса заявки" из сервера
        axios.get('http://94.241.141.190:9091/api/user')
            .then(response => {
                setApplicationStatus(response.data.applicationStatus);
            })
            .catch(error => {
                console.error('Ошибка при получении статуса заявки:', error);
            });

        // Получение имени пользователя из сервера
        axios.get('http://94.241.141.190:9091/api/user')
            .then(response => {
                setUsername(response.data.username);
            })
            .catch(error => {
                console.error('Ошибка при получении имени пользователя:', error);
            });
    }, []);

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.cabinet}>
                    <h1>Личный кабинет</h1>
                    <div>
                        <h2>Hello, </h2>
                        <p>{username !== null ? `${username}` : 'Имя не доступно'}</p>
                    </div>
                    <div>
                        <h2>Результат тестирования: </h2>
                        <p>{score !== null ? `Ваш результат: ${score}` : 'Результат не доступен'}</p>
                    </div>
                    <div>
                        <h2>Статус заявки:</h2>
                        <p>{applicationStatus !== null ? `Статус вашей заявки: ${applicationStatus}` : 'Статус не доступен'}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cabinet;
