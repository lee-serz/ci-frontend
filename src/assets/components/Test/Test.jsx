// import React, { useState } from 'react';
// import styles from './Test.module.css'

// function Test() {
//   const questions = [
//     {
//       id: 1,
//       question: 'Что такое ООП?',
//       options: ['Объектно-ориентированное программирование — методология программирования, основанная на представлении программы в виде совокупности объектов, каждый из которых является экземпляром определенного класса, а классы образуют иерархию наследования', 
//                 'Объектно-ориентированное программирование — так называют любой тип программирования, в котором используются понятия высокого уровня и, в отличие от Assembler, в котором не работают напрямую с ячейками памяти ПК.', 
//                 'Объектно-ориентированное программирование — просто красивое понятие. Если вдуматься, оно не несет дополнительной смысловой нагрузки, просто программисты любят аббревиатуры, так области их знаний выглядят сложнее.', 
//                 'Очень одинокий программист.'],
//       correctAnswer: 'Объектно-ориентированное программирование — методология программирования, основанная на представлении программы в виде совокупности объектов, каждый из которых является экземпляром определенного класса, а классы образуют иерархию наследования',
//     },
//     {
//       id: 2,
//       question: 'Что такое класс в Java?',
//       options: ['Уровень сложности программы. Все операторы делятся на классы в зависимости от сложности их использования.', 
//                 'Базовый элемент объектно-ориентирован­ного программирования в языке Java.', 
//                 'Просто одно из возможных названий переменной.', 
//                 'Такое понятие есть только в C++, в Java такого понятия нет.'],
//       correctAnswer: 'Базовый элемент объектно-ориентирован­ного программирования в языке Java.',
//     },
//     {
//       id: 3,
//       question: 'Как объявить класс в коде?',
//       options: ['class MyClass {}', 
//                 'new class MyClass {}', 
//                 'select * from class MyClass {}', 
//                 'MyClass extends class {}'],
//       correctAnswer: 'class MyClass {}',
//     },
//   ];

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [score, setScore] = useState(0);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };

//   const handleNextQuestion = () => {
//     if (selectedOption === questions[currentQuestion].correctAnswer) {
//       setScore(score + 1);
//     }

//     setSelectedOption(null);
//     setCurrentQuestion(currentQuestion + 1);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.test}>
//         <h1>Теоретический тест</h1>
//         {currentQuestion < questions.length ? (
//             <div>
//             <h2>Вопрос {currentQuestion + 1}:</h2>
//             <p className={styles.question}>{questions[currentQuestion].question}</p>
//             <ul>
//                 {questions[currentQuestion].options.map((option, index) => (
//                 <li
//                     key={index}
//                     onClick={() => handleOptionSelect(option)}
//                     className={selectedOption === option ? styles.selected : ''}
//                 >
//                     {option}
//                 </li>
//                 ))}
//             </ul>
//             {selectedOption && (
//                 <button onClick={handleNextQuestion}>Следующий вопрос</button>
//             )}
//             </div>
//         ) : (
//             <div>
//             <h2>Результаты теста</h2>
//             <p>Вы правильно ответили на {score} из {questions.length} вопросов.</p>
//             </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Test;

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
        axios.get('URL_СЕРВЕРА_ДЛЯ_ВОПРОСОВ') // Замените на ваш URL
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
        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
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