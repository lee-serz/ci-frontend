import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RejactedCandidates from './RejactedCandidates.jsx'; // импортируйте компонент AcceptedCandidates
import styles from './RejactedCandidates.module.css'; // создайте свои стили для страницы
function RejactedCandidatesPage() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios.get('http://94.241.141.190:9091/api/rejected')
      .then(response => {
        const data = response.data;
        setCandidates(data);
      })
      .catch(error => {
        console.error('Ошибка при выполнении запроса:', error);
      });
  }, []);

  return (
    <div className={styles.page}>
      <h1>Принятые кандидаты</h1>
      <RejactedCandidates candidates={candidates} />
      {/* AcceptedCandidates принимает список candidates через пропсы */}
    </div>
  );
}

export default RejactedCandidatesPage;
