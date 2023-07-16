import AuthNav from 'components/AuthNav/AuthNav';
import css from './Header.module.css';
import UserInfo from 'components/UserInfo/UserInfo';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelector';
import { useState } from 'react';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [isMenu, setIsMenu] = useState(false);

  const handleMenuClick = () => {
    setIsMenu(!isMenu);
  };

  return (
    <>
      <header className={css.header}>
        {<Logo />}
        {/* {isLoggedIn && <Navigation />} */}
        {isLoggedIn ? <UserInfo /> : <AuthNav />}
        <button
          className={`${!isMenu ? css.menuBtn : css.closeBtn}`}
          onClick={handleMenuClick}
        ></button>
      </header>
      {isMenu && <Navigation/>}
    </>
  );
};

export default Header;
