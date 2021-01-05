import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import a11y from '../styles/Accessibility.css';
import styles from '../styles/Header.css';


interface NavItemProps {
    route: string;
    text: string;
}

const NavItem = (props: NavItemProps): ReactElement => {
    return ( 
            <li className={styles['nav__list-item']}>
                <Link className={`${a11y.outline} ${styles.nav__link}`} to={props.route}>
                                        {props.text}
                </Link>
            </li>
    );
};

const TextLogo = (): ReactElement => {
    return (
        <Link className={`${a11y.outline} ${styles['header__left--logo']}`} to="/">
            <span>Bits</span>
        </Link>
    );
};

const Header = (): ReactElement => {
    const navData = {
        item: [
            {
                route: "/how-it-works",
                text: "How it works",
            },
            {
                route: "/practice",
                text: "Practice",
            },
            {
                route: "/resources",
                text: "Resources",
            }
        ]
    };

    return (
        <div className={styles.container}>
            <div className={styles.navigation}>
                <header className={styles.header}>
                    <div className={styles.header__left}>
                        <TextLogo />
                        <nav>
                            <ul className={styles.nav__list}>
                                {navData.item.map((element, index) =>
                                    <NavItem key={index} 
                                                route={element.route} 
                                                text={element.text} />
                                )}
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.header__right}>
                        <input className={`${a11y.outline} ${styles['light-bulb']}`} 
                                type="checkbox" />
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Header;