import css from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={css.nav}>
            <ul className={css.navList}>
                <li className={css.navItem}>Diary</li>
                <li className={css.navItem}>Calculator</li>
            </ul>
        </nav>
    )
}

export default Navigation;