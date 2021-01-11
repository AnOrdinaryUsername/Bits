import React, { ReactElement } from 'react';
import Background from '../components/Background';
import { InstructionSetForm } from '../components/InstructionSetForm';


const Practice = (): ReactElement => {
    return (
        <Background>
            <InstructionSetForm />
        </Background>
    );
};

export {
    Practice
};

