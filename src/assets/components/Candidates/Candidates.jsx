import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Candidates.module.css';

function UserData() {
  const [candidates, setCandidates] = useState([]);
  const [expandedCandidate, setExpandedCandidate] = useState(null);

  useEffect(() => {
    axios.get('http://94.241.141.190:9091/api/forms')
      .then(response => {
        const data = response.data;
        setCandidates(data);
      })
      .catch(error => {
        console.error('Ошибка при выполнении запроса:', error);
      });
  }, []);

  const handleAccept = (candidate) => {
    axios.post(`http://94.241.141.190:9091/api/choise-accept/${candidate.id}`)
      .then(response => {
        // Обновите список кандидатов, исключив принятого кандидата
        const updatedCandidates = candidates.filter(c => c.id !== candidate.id);
        setCandidates(updatedCandidates);
      })
      .catch(error => {
        console.error('Ошибка при отправке запроса на прием:', error);
      });
  };
  
  const handleReject = (candidate) => {
    axios.post(`http://94.241.141.190:9091/api/choise-reject/${candidate.id}`)
      .then(response => {
        // Обновите список кандидатов, исключив отклоненного кандидата
        const updatedCandidates = candidates.filter(c => c.id !== candidate.id);
        setCandidates(updatedCandidates);
      })
      .catch(error => {
        console.error('Ошибка при отправке запроса на отказ:', error);
      });
  };
  
  

  const toggleCandidate = (candidate) => {
    if (expandedCandidate && expandedCandidate.id === candidate.id) {
      setExpandedCandidate(null);
    } else {
      setExpandedCandidate(candidate);
    }
  };

  return (
    <div className={styles.candidates}>
      {candidates.map((candidate) => (
        <div key={candidate.id} className={styles.candidate}>
          <h1 onClick={() => toggleCandidate(candidate)}>
            {`Анкета ${candidate.lastName} ${candidate.firstName} ${candidate.middleName}`}
          </h1>
          {expandedCandidate && expandedCandidate.id === candidate.id && (
            <div>
              <p>Имя: {candidate.firstName}</p>
                <p>Фамилия: {candidate.lastName}</p>
                <p>Отчество: {candidate.middleName}</p>
                <p>Дата рождения: {candidate.birthDate}</p>
                <p>Место рождения: {candidate.birthPlace}</p>
                <p>Адрес регистрации: {candidate.registrationAddress}</p>
                <p>Адрес проживания: {candidate.currentAddress}</p>
                <p>Домашний телефон: {candidate.mobilePhone}</p>
                <p>Мобильный телефон: {candidate.homePhone}</p>
                <p>Электронная почта: {candidate.email}</p>
                <p>Цель обращения: {candidate.practiceDuration}</p>
                <p>Регион: {candidate.desiredRegion}</p>
                <p>Образование: {candidate.institution}</p>
                <p>Навыки: {candidate.skills}</p>
                <p>Результат тестирования: {candidate.testingResult}</p>
              <div className={styles.buttons}>
                <button onClick={() => handleAccept(candidate)}>Принять</button>
                <button className={styles.red_btn} onClick={() => handleReject(candidate)}>Отказать</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserData;



