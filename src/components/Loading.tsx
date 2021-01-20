import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';
import styles from '../styles/Loading.css';

const Loading = (): ReactElement => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let loadingIcon = null;

    if (reducedMotion) {
        loadingIcon = <FontAwesomeIcon icon={faCircleNotch} 
                                                className={styles['loading-svg']} />
    } else {
        loadingIcon = <FontAwesomeIcon icon={faCircleNotch} 
                                                className={styles['loading-svg']} 
                                                spin />
    }


    return (
        <div className={styles['loading-container']}>
            {loadingIcon}
            <h1>Loading...</h1>
        </div>
    );
};

export {
    Loading
};

