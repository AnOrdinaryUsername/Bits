import React, { ReactElement } from 'react';
import styles from '../styles/FormBox.css';
import { OnSubmitEvent } from '../types/Events';

interface FormBoxProps extends OnSubmitEvent {
    children: React.ReactNode;
}

const FormBox = (props: FormBoxProps): ReactElement => {
    return (
        <form
            onSubmit={props.onSubmit}
            className={`${styles.form} ${styles['form--bg-shadow']} 
                                ${styles['form--bg-white']} ${styles['form--border-round']}`}
        >
            <fieldset className={styles.fieldset}>{props.children}</fieldset>
        </form>
    );
};

export default FormBox;
