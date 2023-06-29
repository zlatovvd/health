import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './Navigation.module.css';
import logo from 'images/logo-mobile.png';

const StyledLink = styled(NavLink)`
    font-size: 14px;
    font-weight: 700;
    line-height: 1.17;
    text-transform: uppercase;
    color: #9b9faa;
    text-decoration: none;

  &.active {
    color: #212121;
  }
`;

const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <Link to="/" className={css.logo}>
        <img src={logo} />
        <span className={css.logoText}>Slim<span className={css.logoTextStyled}>Mom</span></span>
      </Link>
      <ul className={css.navigationList}>
        <li className={css.navigationItem}>
          <StyledLink to="/login">Log in</StyledLink>
        </li>
        <li className={css.navigationItem}>
          <StyledLink to="/Registration">Registration</StyledLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
