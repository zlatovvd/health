import AuthNav from "components/AuthNav/AuthNav";
import css from './Header.module.css';
import UserInfo from "components/UserInfo/UserInfo";
import Logo from "components/Logo/Logo";

const Header = () => {

    return (
        <header className={css.header}>
            {<Logo/>}
            {<AuthNav/>}
            {/* {<UserInfo/>} */}
        </header>
    )

}

export default Header;