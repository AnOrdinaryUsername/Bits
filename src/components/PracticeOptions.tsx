import React, { ReactElement } from 'react';
import styles from '../styles/PracticeOptions.css';
import Background from './Background';
import FormBox from './FormBox';

interface CheckboxButtonProps {
    buttonValue: string;
    buttonId: string;
    buttonName: string;
}

const CheckboxButton = (props: CheckboxButtonProps): ReactElement => {
    return (
        <React.Fragment>
            <input
                type="checkbox"
                name="practice-problem"
                value={props.buttonValue}
                id={props.buttonId}
                className={styles.checkbox__input}
            ></input>
            <label
                htmlFor={props.buttonId}
                className={`${styles.checkbox__label} ${styles['checkbox__label--blue']}`}
            >
                {props.buttonName}
            </label>
        </React.Fragment>
    );
};

const Options = () => {
    return (
        <div className={styles.checkbox}>
            <CheckboxButton buttonValue="" buttonId="section-1.7" buttonName="Section 1.6-1.7" />
            <CheckboxButton buttonValue="" buttonId="section-2.1" buttonName="Section 2.1" />
            <CheckboxButton buttonValue="" buttonId="section-4.2" buttonName="Section 4.2" />
            <CheckboxButton buttonValue="" buttonId="section-4.3" buttonName="Section 4.3" />
            <CheckboxButton buttonValue="" buttonId="section-4.4" buttonName="Section 4.4" />
            <CheckboxButton buttonValue="" buttonId="section-4.5" buttonName="Section 4.5" />
        </div>
    );
};

interface LegendProps {
    caption: string;
}

const Legend = (props: LegendProps): ReactElement => {
    return (
        <legend className={`${styles.fieldset__legend} ${styles['fieldset__legend--blue']}`}>
            {props.caption}
        </legend>
    );
};

const PracticeOptions = (): ReactElement => {
    return (
        <Background>
            <FormBox>
                <Legend caption="What do you want to practice?" />
                <Options />
            </FormBox>
        </Background>
    );
};

export default PracticeOptions;
