import React, { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/NotFound.css';

const NotFound = (): ReactElement => {
    document.title = "🤷 Page Not Found | Bits";
    const path = useLocation().pathname;

    return (
        <div className={styles['page-container']}>
            <h1 className={styles.shrug}>¯\_(ツ)_/¯</h1>
            <p>Sorry, the page <code>{path}</code> does not exist.</p>
        </div>
    );
};

export {
    NotFound
};
