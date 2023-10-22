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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate the form data here before making the request.
      if (!formData.email || !formData.password) {
        console.error('Please fill in both email and password fields.');
        return;
      }

      const response = await axios.post('http://94.241.141.190:9091/api/login', formData);

      if (response.status === 200) {
        // Assuming a successful response means authentication is successful.
        if (formData.email === 'admin@mail.ru' && formData.password === 'admin') {
          navigate('/candidates');
        } else {
          console.log('Successful login, but not admin');
        }
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
        <button type="submit">Войти</button>
        <Link to="/registration" className={styles.link}>Зарегистрироваться</Link>
      </form>
    </div>
  );
};

export default Login;
