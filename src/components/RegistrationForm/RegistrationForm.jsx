import { useState } from 'react';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const [regname, setRegname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'regname':
        setRegname(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
    }
  };

  const handleLoginBtn = () => {};

  const handleRegisteBtn = () => {};

  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} className={css.registerForm}>
      <h2 className={css.title}>Register</h2>
      <label className={css.formLabel}>
        "Name*
        <input
          type="text"
          className={css.regname}
          name="regname"
          value={regname}
          onChange={handleOnChange}
        />
      </label>
      <label className={css.formLabel}>
        Email*
        <input
          type="text"
          className={css.email}
          name="email"
          value={email}
          onChange={handleOnChange}
        />
      </label>
      <label className={css.formLabel}>
        Password*
        <input
          type="password"
          className={css.password}
          name="password"
          value={password}
          onChange={handleOnChange}
        />
      </label>

      <div>
        <button className={css.button} onClick={handleRegisteBtn}>
          Register
        </button>
        <button className={css.button} onClick={handleLoginBtn}>
          Log in
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
