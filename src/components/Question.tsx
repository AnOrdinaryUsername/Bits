import React, { ReactElement, ReactNode } from 'react';
import anim from '../styles/Animation.css';
import styles from '../styles/Question.css';


interface QuestionProps {
    children: ReactNode;
    questionNumber: string;
    text: string;
}

const Question = (props: QuestionProps): ReactElement => {
    return (
        <div className={styles['question-container']}>
            <div className={styles.legend}>
                <legend className={styles.fieldset__legend}>Question {props.questionNumber}</legend>
            </div>
            <p className={`${styles.question} ${anim['text-anim-1']}`}>{props.text}</p>
            {props.children}
        </div>
    );
};

export {
    Question
};
