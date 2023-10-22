import React, { useState } from 'react';
import axios from 'axios';
import styles from './AdmPractice.module.css'

function FormComponent() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Отправка данных на сервер
      await axios.post('https://backend.xeonexus.su/api/practice/create', formData);
      alert('Данные успешно отправлены в базу данных!');
      // Очистка полей формы
      setFormData({
        title: '',
        subtitle: '',
      });
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

  return (
    <div className={styles.practice}>
      <h2>Создать практику</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Название:
           <br /> <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Описание:
           <br /> <textarea
              name="subtitle"
              value={formData.subtitle}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Отправить</button>
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
