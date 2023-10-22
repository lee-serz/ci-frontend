import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AcceptedCandidates from './AcceptedCandidates.jsx'; // импортируйте компонент AcceptedCandidates
import styles from './AcceptedCandidates1.module.css'; // создайте свои стили для страницы
function AcceptedCandidatesPage() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios.get('https://backend.xeonexus.su/api/accepted')
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
      <AcceptedCandidates candidates={candidates} />
      {/* AcceptedCandidates принимает список candidates через пропсы */}
    </div>
  );
}

export default AcceptedCandidatesPage;
