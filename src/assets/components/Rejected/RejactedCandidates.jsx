import React, { useState } from 'react';
import styles from './Rejacted.module.css';

function RejactedCandidates({ candidates }) {
  const [expandedCandidate, setExpandedCandidate] = useState(null);

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
                {/* Здесь можно добавить кнопки или действия для принятия или отказа */}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default RejactedCandidates;
