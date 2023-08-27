
import Container from 'components/Container/Container';
import css from './LoginPage.module.css';
import LoginForm from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectAuthStatus } from 'redux/auth/authSelector';
import Loader from 'components/Loader/Loader';

const LoginPage = () => {

  const status = useSelector(selectAuthStatus);

  return (
    <div className={css.loginPage}>
      <Container>
        <LoginForm />
      </Container>
      {status === 'loading' && <Loader/>}
    </div>
  );
};

export default LoginPage;
