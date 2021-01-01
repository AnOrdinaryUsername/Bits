import React, { ReactElement } from 'react';
import styles from '../styles/Header.css';

const Header = (): ReactElement => {
    return (
        <div className={styles.container}>
            <div className={styles.navigation}>
                <header className={styles.header}>
                    <div className={styles.header__left}>
                        <a className={styles['header__left--logo']} href="/home">
                            <span>Bits</span>
                        </a>
                        <nav>
                            <ul className={styles.nav__list}>
                                <li className={styles['nav__list-item']}>
                                    <a className={styles.nav__link} href="">How it works</a>
                                </li>
                                <li className={styles['nav__list-item']}>
                                    <a className={styles.nav__link} href="">Practice</a>
                                </li>
                                <li className={styles['nav__list-item']}>
                                    <a className={styles.nav__link} href="">Resources</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.header__right}>
                        <input className={styles['light-bulb']} type="checkbox" />
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Header;