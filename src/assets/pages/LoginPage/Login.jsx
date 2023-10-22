import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Login.module.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const checkCredentials = async (email, password) => {
    try {
      // Здесь вам нужно выполнить запрос к вашей базе данных, чтобы проверить учетные данные.
      // Если учетные данные совпадают, возвратите true, в противном случае false.

      // Примерный код запроса к базе данных
      const response = await axios.post('https://backend.xeonexus.su/api/candidat', {
        email,
        password,
      });

      return response.data.isValid; // Предположим, что сервер возвращает isValid: true/false
    } catch (error) {
      console.error('Error checking credentials: ', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.email || !formData.password) {
        console.error('Please fill in both email and password fields.');
        return;
      }

      const isValidCredentials = await checkCredentials(formData.email, formData.password);

      if (isValidCredentials) {
        navigate('/'); // Перенаправление на '/' после успешной аутентификации
      } else {
        console.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error: ', error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
      <img src="./big-logo.png" alt="big logo" />
        <div>
          <label>Почта:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Пароль:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit"><Link to="/home" className={styles.linkr}>Войти</Link></button>
        <Link to="/registration" className={styles.link}>Зарегистрироваться</Link>
      </form>
    </div>
  );
};

export default Login;
