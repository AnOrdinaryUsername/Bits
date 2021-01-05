import React, { ReactElement, ReactNode } from 'react';
import Particles from 'react-particles-js';

class Canvas extends React.Component {
    state = { 
      width: "0px", 
      height: "0px" 
    };

    componentDidMount = (): void => {
        this.updateWindowDimensions();

        window.addEventListener("resize", this.updateWindowDimensions);
    };

    componentWillUnmount  = (): void => {
        window.removeEventListener("resize", this.updateWindowDimensions);
    };

    updateWindowDimensions = () => {
        this.setState({
            width: `${window.innerWidth}px`,
            height: `${window.innerHeight}px`
        });
    };

    render(): ReactNode {
        return (
            <Particles
            {...this.state}
            params={{
                particles: {
                number: {
                    value: 30,
                    density: {
                    enable: true,
                    value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                    width: 0,
                    color: "#000000"
                    },
                    image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                    }
                },
                opacity: {
                    value: 0.4,
                    random: true,
                    anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 100,
                    color: "#fff",
                    opacity: 1,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                    }
                }
                },
                interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                    enable: false
                    },
                    onclick: {
                    enable: false
                    },
                    resize: true
                }
                },
                retina_detect: true
            }}
            />
        );
  }
}



const Home = (): ReactElement => {
    return (
        <>
            <Canvas />
            <div>This is home :)</div>
        </>
    );
};

export {
    Home
};
