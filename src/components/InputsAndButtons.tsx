import React, { ReactElement } from 'react';
import a11y from '../styles/Accessibility.css';
import styles from '../styles/InputsAndButtons.css';
import { OnChangeEvent } from '../types/Events';

interface InputTextProps extends OnChangeEvent {
    value: string;
    name?: string;
    key?: string | number;
    pattern?: string;
    errorTitle?: string;
}

const InputText = (props: InputTextProps): ReactElement => {
    return (
        <input
            onChange={props.onChange}
            name={props.name}
            value={props.value}
            pattern="^\d*(\.\d{0,2})?$" // Regex to allow numbers with 2 optional decimal places.
            title="Please enter numbers only." // Message when non-numeric chars are entered.
            className={`${a11y.outline} ${styles['input-text']}`}
            type="text"
            autoComplete="off"
            required
        />
    );
};

interface InputSubmitProps {
    value: string;
}

const InputSubmit = (props: InputSubmitProps): ReactElement => {
    return (
        <input
            name="Submit"
            value={props.value}
            className={`${styles['input-submit']}`}
            type="submit"
        />
    );
};

export { InputText, InputTextProps, InputSubmit };
