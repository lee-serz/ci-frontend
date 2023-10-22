import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Test.module.css';

function Test() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://94.241.141.190:9091/api/tests')
            .then(response => {
                setQuestions(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (selectedOption && questions[currentQuestion].correctAnswer) {
            if (selectedOption.toLowerCase() === questions[currentQuestion].correctAnswer.toLowerCase()) {
                setScore(score + 1);
                console.log("Score:", score); // Логи для отслеживания значения score
            }
        }

        setSelectedOption(null);
        setCurrentQuestion(currentQuestion + 1);
    };

    if (loading) return <div>Загрузка...</div>;

    if (error) return <div>Ошибка: {error}</div>;

    return (
        <div className={styles.container}>
            <div className={styles.test}>
                <h1>Теоретический тест</h1>
                {currentQuestion < questions.length ? (
                    <div>
                        <h2>Вопрос {currentQuestion + 1}:</h2>
                        <p className={styles.question}>{questions[currentQuestion].question}</p>
                        <ul>
                            {questions[currentQuestion].options.map((option, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleOptionSelect(option)}
                                    className={selectedOption === option ? styles.selected : ''}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                        {selectedOption && (
                            <button onClick={handleNextQuestion}>Следующий вопрос</button>
                        )}
                    </div>
                ) : (
                    <div>
                        <h2>Результаты теста</h2>
                        <p>Вы правильно ответили на {score} из {questions.length} вопросов.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Test;
