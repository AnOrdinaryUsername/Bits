import React, { ReactElement } from 'react';
import styles from '../styles/Background.css';

// Svg from getwaves.io
const BackgroundSvg = () => {
    return (
        <div className={styles['svg-wrapper']}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                height="400"
                preserveAspectRatio="none"
            >
                <path
                    fill="hsl(209, 75%, 20%)"
                    fillOpacity="1"
                    d="M0,128L288,160L576,96L864,192L1152,128L1440,
                        64L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
                ></path>
            </svg>
        </div>
    );
};

interface BackgroundProps {
    children: React.ReactNode;
}

const Background = (props: BackgroundProps): ReactElement => {
    return (
        <React.Fragment>
            {/* '\u00A0' is &nbsp; in unicode */}
            <div className={`${styles.background} ${styles['background--color']}`}>
                <BackgroundSvg />
                {props.children}
            </div>
            <div className={`${styles['height-filler']} ${styles['height-filler--bottom-color']}`}>
                {'\u00A0'}
            </div>
        </React.Fragment>
    );
};

export default Background;
