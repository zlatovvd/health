
import Container from 'components/Container/Container';
import css from './LoginPage.module.css';
import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className={css.loginPage}>
      <Container><LoginForm /></Container>
    </div>
  );
};

export default LoginPage;
