import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement, ReactNode } from 'react';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.css';

class Canvas extends React.Component {
    state = {
        width: '0px',
        height: '0px',
    };

    componentDidMount = (): void => {
        this.updateWindowDimensions();

        window.addEventListener('resize', this.updateWindowDimensions);
    };

    componentWillUnmount = (): void => {
        window.removeEventListener('resize', this.updateWindowDimensions);
    };

    updateWindowDimensions = (): void => {
        this.setState({
            width: `${window.innerWidth}px`,
            height: `${window.innerHeight}px`,
        });
    };

    render(): ReactNode {
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const speedMode = reducedMotion ? 0 : 1;

        return (
            <Particles
                {...this.state}
                params={{
                    particles: {
                        number: {
                            value: 80,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: '#88c8ff',
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 0,
                                color: '#000000',
                            },
                            polygon: {
                                nb_sides: 5,
                            },
                            image: {
                                src: 'img/github.svg',
                                width: 100,
                                height: 100,
                            },
                        },
                        opacity: {
                            value: 0,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        size: {
                            value: 0,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false,
                            },
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: 'hsl(208, 100%, 77%)', // #88c8ff, the blue lines
                            opacity: 1,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: speedMode,
                            direction: 'none',
                            random: false,
                            straight: false,
                            out_mode: 'out',
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            },
                        },
                    },
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {
                                enable: false,
                                mode: 'repulse',
                            },
                            onclick: {
                                enable: false,
                                mode: 'push',
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1,
                                },
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                            push: {
                                particles_nb: 4,
                            },
                            remove: {
                                particles_nb: 2,
                            },
                        },
                    },
                    retina_detect: true,
                }}
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'hsl(273, 22%, 8%)', // Black background #151019
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 50%',
                    backgroundRepeat: 'no-repeat',
                }}
                className={styles['canvas-wrapper']}
            />
        );
    }
}

const Home = (): ReactElement => {
    document.title = 'Bits';

    return (
        <section className={styles.hero}>
            <Canvas />
            <div className={styles['hero-container']}>
                <div className={styles['hero-content']}>
                    <h1>Learn to Speak the Language of Computers</h1>
                    <p>
                        Explore the history and nature of the binary system with engaging,
                        interactive elements.
                    </p>
                    <div className={styles['hero-buttons']}>
                        <Link
                            className={`${styles['link-btn']} ${styles['link-btn--dark']} ${styles['link-btn--primary']}`}
                            to="/how-it-works"
                        >
                            Get Started
                        </Link>
                        <a
                            className={`${styles['link-btn']} ${styles['link-btn--light']} ${styles['link-btn--secondary']}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/AnOrdinaryUsername/Bits"
                        >
                            <FontAwesomeIcon icon={faGithub} className={styles.svg} />
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Home };
