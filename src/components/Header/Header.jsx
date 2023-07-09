import AuthNav from "components/AuthNav/AuthNav";
import css from './Header.module.css';
import UserInfo from "components/UserInfo/UserInfo";
import Logo from "components/Logo/Logo";
import Navigation from "components/Navigation/Navigation";

const Header = () => {

    const user = {
        username: 'vasyl',
        password: '1111'
    }

    return (
        <header className={css.header}>
            {<Logo/>}
            { user && <Navigation/>}
            { user ? <UserInfo/> : <AuthNav/>}
        </header>
    )

}

export default Header;