import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import React, { useState } from 'react';
import css from './LoginForm.module.css';

export const LoginForm = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const form = e.currentTarget;
    dispatch(
      logIn({
        email,
        password
      })
    );
    setEmail('');
    setPassword('');
    // form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input
          className={css.label}
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.label}
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={handleChange}
        />
      </label>

      <button className={css.formBtn} type="submit">
        Log In
      </button>
    </form>
  );
};
