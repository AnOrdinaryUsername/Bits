import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';
import styles from '../styles/Loading.css';

const Loading = (): ReactElement => {
    return (
        <div className={styles['loading-container']}>
            <FontAwesomeIcon icon={faCircleNotch} className={styles['loading-svg']} spin />
            <h1>Loading...</h1>
        </div>
    );
};

export {
    Loading
};
