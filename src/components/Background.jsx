import React from 'react';
import styles from '../styles/Background.css';

// Svg from getwaves.io
const BackgroundSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" height="400"
            className={styles.background__svg} preserveAspectRatio="none">
            <path fill="hsl(225, 56%, 21%)" fill-opacity="1" d="M0,128L288,160L576,96L864,192L1152,128L1440,
                    64L1440,320L1152,320L864,320L576,320L288,320L0,320Z">
            </path>
        </svg>
    );
}

export default class Background extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                {/* '\u00A0' is &nbsp; in unicode */}
                <div className={`${styles['height-filler']}`}>{'\u00A0'}</div>
                <div className={styles.background}>
                    <BackgroundSvg />
                    {this.props.children}
                </div>
                <div className={`${styles['height-filler']} 
                                    ${styles['height-filler--bottom-color']}`}>
                    {'\u00A0'}
                </div>
            </React.Fragment>
        );
    }
}

