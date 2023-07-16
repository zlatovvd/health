import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
    font-size: 18px;
    line-height: 1.22;
    text-transform: uppercase;
    color: #9b9faa;
    text-decoration: none;

  &.active {
    color: #ffffff;
  }
`;

const Navigation = () => {
    return (
        <nav className={css.nav}>
            <ul className={css.navList}>
                <li className={css.navItem}><StyledLink to ='/diary'>Diary</StyledLink></li>
                <li className={css.navItem}><StyledLink to='/calculator'>Calculator</StyledLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;