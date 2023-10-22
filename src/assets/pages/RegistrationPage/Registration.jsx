// Registration.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Regoster.module.css'

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://backend.xeonexus.su/api/register', formData);
      // Обработайте успешную регистрацию здесь
    } catch (error) {
      console.error('Registration error: ', error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
      <img src="./big-logo.png" alt="big logo" />
      <div>
          <label>Имя:</label>
          <input
            type="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Почта:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Пароль:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
        <Link to="/home" className={styles.link}>Войти</Link>
      </form>
      
    </div>
  );
};

export default Registration;
