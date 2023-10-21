import React, { useState } from 'react';
import styles from './PersonalData.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const initialFormData = {
  lastName: '',
  firstName: '',
  middleName: '',
  birthDate: '',
  birthPlace: '',
  registrationAddress: '',
  currentAddress: '',
  mobilePhone: '',
  homePhone: '',
  email: '',
  practiceDuration: '',
  desiredRegion: 'Регион 1',
  appliedBefore: false,
  institution: '',
  enrollmentYear: '',
  faculty: '',
  specialty: '',
  skills: '',
};

const PersonalData = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://94.241.141.190:9091/api/forms', formData);
      alert('Данные успешно отправлены в базу данных!');
      setFormData(initialFormData); // Очистить форму
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

  

  return (
   <>
    <Header/>
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Личные данные:</h2>
        <div className={styles.personal_data}>
          <label>
            <span>Фамилия:</span> <br />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
          </label>
          <label>
            <span>Имя:</span><br />
            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
          </label>
          <label>
            <span>Отчество:</span><br />
            <input type="text" name="middleName" value={formData.middleName} onChange={handleInputChange} />
          </label>
          <label>
            <span>Дата рождения:</span><br />
            <input type="date" name="birthDate" value={formData.birthDate} onChange={handleInputChange} />
          </label>
          <label>
            <span>Место рождения:</span><br />
            <input type="text" name="birthPlace" value={formData.birthPlace} onChange={handleInputChange} />
          </label>
          <label>
            <span>Адрес регистрации:</span><br />
            <input type="text" name="registrationAddress" value={formData.registrationAddress} onChange={handleInputChange} />
          </label>
          <label>
            <span>Адрес проживания:</span><br />
            <input type="text" name="currentAddress" value={formData.currentAddress} onChange={handleInputChange} />
          </label>
        </div>

        <div className={styles.contacts}>
          <h2>Контактные данные</h2>
          <label>
            <span>Мобильный телефон:</span>  <br />
            <input type="text" name="mobilePhone" value={formData.mobilePhone} onChange={handleInputChange} />
          </label><br />
          <label> 
            <span> Домашний телефон:</span> <br />
            <input type="text" name="homePhone" value={formData.homePhone} onChange={handleInputChange} />
          </label><br />
          <label>
            <span>Электронная почта:</span><br />
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </label>
        </div>

        <div className={styles.way}>
          <h2>Направление обращения</h2>
          <label>
            <span>Сроки практики:</span><br />
            <input type="text" name="practiceDuration" value={formData.practiceDuration} onChange={handleInputChange} />
          </label>
          <label><br />
            <span>Желаемый регион прохождения практики:</span>
            <select name="desiredRegion" value={formData.desiredRegion} onChange={handleInputChange}>
              <option value="Регион 1">Регион 1</option>
              <option value="Регион 2">Регион 2</option>
              <option value="Регион 3">Регион 3</option>
              {/* Добавьте остальные регионы */}
            </select><br />
          </label>
          <label><br />
            Вы подали документы ранее?
            <input
              type="checkbox"
              name="appliedBefore"
              checked={formData.appliedBefore}
              onChange={handleCheckboxChange}
            />
          </label>
        </div>

        <h2>Образование</h2>
        <div className={styles.education}>
          <label>
            <span>Наименование учебного учреждения:</span>
            <br /><input
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleInputChange}
            />
          </label>
          <label><br />
            <span>Год поступления:</span>
            <br /> <input
              type="text"
              name="enrollmentYear"
              value={formData.enrollmentYear}
              onChange={handleInputChange}
            />
          </label>
          <label><br />
            <span>Факультет:</span>
            <br /><input
              type="text"
              name="faculty"
              value={formData.faculty}
              onChange={handleInputChange}
            />
          </label>
          <label><br />
            <span>Специальность:</span>
            <br /> <input
              type="text"
              name="specialty"
              value={formData.specialty}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <h2>Личные навыки</h2>
        <label>
          <span>Расскажите о своих навыках, опыте работы:</span>
          <br /> <textarea
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit" className={styles.btn}>Отправить</button>
      </form>
    </div>
   </>
  );
}

export default PersonalData;
