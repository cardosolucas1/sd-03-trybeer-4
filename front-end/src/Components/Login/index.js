import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import validateInput from '../../utils/validate';
import { getUserFromAPI } from '../../services/api_endpoints';
import './login.css';

function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [logged, setLogged] = useState({ redirect: false, role: '' });
  const { email, password } = form;
  const { redirect, role } = logged;

  const handleInput = (e) => {
    const { name, value } = e.target;
    return validateInput(name, value)
      ? setForm({ ...form, [name]: value })
      : setForm({ ...form, [name]: '' });
  };

  const getUserData = async () => {
    const { data } = await getUserFromAPI(email, password);
    // console.log('O QUE VEM ? POST REQUEST LOGIN', data);
    if (data.token) {
      localStorage.setItem('user', JSON.stringify(data));
      setLogged({ redirect: true, role: data.role });
    }
    return true;
  };
  if (redirect) {
    return (role === 'client'
      ? <Redirect to="/products" />
      : <Redirect to="/admin/orders" />);
  }
  return (
    <div className="form">
      <label htmlFor="email">
        Email
        <input
          id="email"
          className="text-box"
          name="email"
          data-testid="email-input"
          onChange={ (event) => handleInput(event) }
          type="email"
          required
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          id="password"
          className="text-box"
          data-testid="password-input"
          onChange={ (event) => handleInput(event) }
          name="password"
          required
          type="password"
        />
      </label>
      <button
        className="login-btn"
        disabled={ email === '' || password === '' }
        type="button"
        data-testid="signin-btn"
        onClick={ () => getUserData(email, password) }
      >
        ENTRAR
      </button>
      <Link to="./register">
        <button
          className="register-btn"
          type="button"
          data-testid="no-account-btn"
        >
          Ainda não tenho conta
        </button>
      </Link>
    </div>
  );
}

export default LoginPage;