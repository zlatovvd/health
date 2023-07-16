import { useState } from 'react';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { authLogIn } from 'redux/auth/authSlice';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleOnChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
  };

  const handleLoginBtn = () => {
    dispatch(authLogIn({email, password}));
  };

  const handleRegisteBtn = () => {};

  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} className={css.loginForm}>
      <input
        type="text"
        className={css.email}
        name="email"
        value={email}
        onChange={handleOnChange}
        placeholder="Email*"
      />
      <input
        type="password"
        className={css.password}
        name="password"
        value={password}
        onChange={handleOnChange}
        placeholder="Password*"
      />
      <div>
        <button className={css.button} onClick={handleLoginBtn}>
          Log in
        </button>
        <button className={css.button} onClick={handleRegisteBtn}>
          Register
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
