import React, { ReactElement } from 'react';
import styles from '../styles/InputsAndButtons.css';
import { OnChangeEvent } from '../types/Events';


const InputText = (props: OnChangeEvent): ReactElement => {
    return <input onChange={props.onChange}
                    className={styles['input-text']} 
                    type="text" 
                    autoComplete="off"
            />
};

export {
    InputText
};
