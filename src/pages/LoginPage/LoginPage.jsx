import css from './LoginPage.module.css';
import LoginForm from "components/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <div className={css.loginPage}>
            <h2>Log in</h2>
            {<LoginForm/>}
        </div>
    )
}

export default LoginPage;