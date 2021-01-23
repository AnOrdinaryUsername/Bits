import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement, ReactNode } from 'react';
import uniqid from 'uniqid';
import svgStyles from '../styles/Home.css';
import styles from '../styles/Resources.css';


interface ResourceGroupingProps {
    groupName: string;
    children: ReactNode;
}

const ResourceGrouping = (props: ResourceGroupingProps) => {
    return (
        <section>
            <h2 className={styles['group-name']}>{props.groupName}</h2>
            {props.children}
        </section>
    );
};

interface ResourceContainerProps {
    name: string;
    link: string;
    description: string;
}

const ResourceContainer = (props: ResourceContainerProps): ReactElement => {
    return (
        <div className={styles.resource}>
            <a href={props.link} className={styles.resource__link}
                 target="_blank" rel="noopener noreferrer">
                <h3 className={styles.resource__title}>{props.name}</h3>
            </a>
            <p className={styles.resource__description}>{props.description}</p>
        </div>
    );
};

const Resources = (): ReactElement => {
    document.title = "Resources | Bits";

    const groupData =
        [
            {
                groupName: "Education",
                resource: [
                    {
                        name: "Central Connecticut State University",
                        link: "https://chortle.ccsu.edu/assemblytutorial/index.html",
                        description: "A detailed introductory course that teaches MIPS using SPIM."
                    },
                ],
            },
            {
                groupName: "Tools",
                resource: [
                    {
                        name: "MIPS Converter",
                        link: "https://www.eg.bucknell.edu/~csci320/mips_web/",
                        description: "Convert MIPS instructions to hexadecimal and vice versa."
                    },
                    {
                        name: "IEEE-754 Floating Point Converter",
                        link: "https://www.h-schmidt.net/FloatConverter/IEEE754.html",
                        description: "Convert decimals to floating point."
                    },
                    {
                        name: "Exploring Binary",
                        link: "https://www.exploringbinary.com/converters-and-calculators/",
                        description: "A site with many types of useful converters and calculators."
                    },
                ],
            },
        ];
    
    return (
        <>
            <div className={`${styles.title} ${styles['title--shadow']}`}>
                <h1 className={styles.title__heading}>Resources</h1>
                <p className={styles.title__description}>
                    A small collection of related sites to further your learning.
                </p>
            </div>
            <div className={styles.suggestion}>
                <p className={styles.suggestion__text}>Want to add a resource to the list? Open an issue on GitHub and make a suggestion!</p>
                <a href="https://github.com/AnOrdinaryUsername/Bits/issues"
                    target="_blank" rel="noopener noreferrer" 
                    className={styles.suggestion__button}>
                    <FontAwesomeIcon icon={faGithub} className={svgStyles.svg} />GitHub
                </a>
            </div>
            <div className={styles['content-container']}>
                <div className={styles.content}>
                    {groupData.map((element) => {
                        return (
                            <ResourceGrouping groupName={element.groupName} key={uniqid()}>
                                {element.resource.map((element) => {
                                    return (
                                        <ResourceContainer name={element.name}
                                                                link={element.link}
                                                                description={element.description}
                                                                key={uniqid()}
                                        />
                                    );
                                })}
                            </ResourceGrouping>
                        );
                    })}
                    <a href="https://github.com/AnOrdinaryUsername/Bits/issues"
                        target="_blank" rel="noopener noreferrer" 
                        className={`${styles.suggestion__button} ${styles['suggestion__button--bottom']}`}>
                        <FontAwesomeIcon icon={faGithub} className={svgStyles.svg} />
                            Suggest a Resource
                    </a>
                </div>
            </div>
        </>
    );
};

export {
    Resources
};

