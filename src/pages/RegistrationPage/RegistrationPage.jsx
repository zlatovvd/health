import css from './RegistrationPage.module.css';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <div className={css.registrationPage}>
      <h2>Register</h2>
      {<RegistrationForm />}
    </div>
  );
};

export default RegistrationPage;
