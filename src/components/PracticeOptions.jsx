import React from 'react';
import Background from '../components/Background';
import styles from "../styles/PracticeOptions.css";

const CheckboxButton = (props) => {
    return (
        <React.Fragment>
            <input type="checkbox" name="practice-problem"
                value={props.buttonValue} id={props.buttonId}
                className={styles.checkbox__input}>
            </input>
            <label htmlFor={props.buttonId}
                className={`${styles.checkbox__label} ${styles['checkbox__label--blue']}`}>
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
    )
};

const Legend = (props) => {
    return (
        <legend className={`${styles.fieldset__legend} ${styles['fieldset__legend--blue']}`}>
            {props.caption}
        </legend>
    );
};

export default class PracticeOptions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Background>
                <form className={styles.form}>
                    <fieldset>
                        <Legend caption="What do you want to practice?" />
                        <Options />
                    </fieldset>
                </form>
            </Background>
        );
    }
}