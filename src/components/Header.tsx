import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import a11y from '../styles/Accessibility.css';
import styles from '../styles/Header.css';
import { OnClickEvent } from '../types/Events';

interface NavItemProps {
    // Optional properties for mobile navigation only.
    tabIndex?: number;
    onEnterNewPage?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    route: string;
    text: string;
}

const NavItem = (props: NavItemProps): ReactElement => {
    return (
        <li className={styles['nav__list-item']}>
            <Link
                className={`${a11y.outline} ${styles.nav__link}`}
                to={props.route}
                tabIndex={props.tabIndex}
                onClick={props.onEnterNewPage}
            >
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

// Buttons container with a Dark Mode button and Lock button for sticky header.
const HeaderButtons = (): ReactElement => {
    return (
        <div className={styles.header__right}>
            <input className={`${a11y.outline} ${styles['light-bulb']}`} type="checkbox" />
        </div>
    );
};

interface MobileTogglerProps extends OnClickEvent {
    iconToggle: boolean;
}

// Hamburger menu for mobile navigation.
const MobileNavToggler = (props: MobileTogglerProps): ReactElement => {
    return (
        <button
            aria-label={props.iconToggle ? 'Close menu' : 'Open menu'}
            onClick={props.onClick}
            className={`${a11y.outline} ${styles['mobile-nav-toggler']}`}
        >
            <FontAwesomeIcon icon={props.iconToggle ? faTimes : faBars} />
        </button>
    );
};

interface NavData {
    route: string;
    text: string;
}
interface HeaderProps extends MobileTogglerProps {
    item: NavData[];
}

const Header = (props: HeaderProps): ReactElement => {
    const item = props.item;

    return (
        <div className={styles.container}>
            <div className={styles.navigation}>
                <header className={styles.header}>
                    <div className={styles.header__left}>
                        <TextLogo />
                        <nav>
                            <MobileNavToggler
                                onClick={props.onClick}
                                iconToggle={props.iconToggle}
                            />
                            {/* Non-mobile navigation */}
                            <ul className={styles.nav__list}>
                                {item.map((element, index) => (
                                    <NavItem
                                        key={index}
                                        route={element.route}
                                        text={element.text}
                                    />
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <HeaderButtons />
                </header>
            </div>
        </div>
    );
};

interface MobileNavbarState {
    isToggled: boolean;
}

class MobileNavbar extends React.Component<{}, MobileNavbarState> {
    state = {
        isToggled: false,
    };

    private navData = {
        item: [
            {
                route: '/how-it-works',
                text: 'How it works',
            },
            {
                route: '/practice',
                text: 'Practice',
            },
            {
                route: '/resources',
                text: 'Resources',
            },
        ],
    };

    toggleNavigation = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.stopPropagation();

        setTimeout(() => {
            this.setState(
                (prevState) => ({
                    isToggled: !prevState.isToggled,
                }),
                () => {
                    if (this.state.isToggled) {
                        document.body.classList.add(styles['hide-scrollbar']);
                    } else {
                        document.body.classList.remove(styles['hide-scrollbar']);
                    }
                }
            );
        }, 10);
    };

    removeMobileNavigation = (event: React.MouseEvent<HTMLAnchorElement>): void => {
        event.stopPropagation();

        this.setState(
            (prevState) => ({
                isToggled: !prevState.isToggled,
            }),
            () => {
                if (this.state.isToggled) {
                    document.body.classList.add(styles['hide-scrollbar']);
                } else {
                    document.body.classList.remove(styles['hide-scrollbar']);
                }
            }
        );
    };

    render(): ReactNode {
        const items = this.navData.item;
        const { isToggled } = this.state;

        return (
            <>
                <nav
                    className={`${styles['mobile-nav']} 
                                    ${isToggled ? styles['mobile-nav--open'] : ''}`}
                    aria-label="Mobile navigation"
                >
                    <ul className={styles['items-container']}>
                        {items.map((element, index) => {
                            return (
                                <NavItem
                                    key={index}
                                    route={element.route}
                                    text={element.text}
                                    onEnterNewPage={this.removeMobileNavigation}
                                    tabIndex={isToggled ? 0 : -1}
                                />
                            );
                        })}
                        <HeaderButtons />
                    </ul>
                </nav>
                <Header item={items} iconToggle={isToggled} onClick={this.toggleNavigation} />
            </>
        );
    }
}

export default MobileNavbar;
