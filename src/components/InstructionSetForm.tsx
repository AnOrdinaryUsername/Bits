import React, { ChangeEvent, ReactElement, ReactNode } from 'react';
import anim from '../styles/Animation.css';
import { OnChangeEvent } from '../types/Events';
import FormBox from './FormBox';
import { InputText } from './InputsAndButtons';
import InstructionSet from './problems/InstructionSet';
import { Question } from './Question';
import { Table, TableBody, TableData, TableDataCell, TableHead, TableRow } from './Table';


interface TemplateQuestionProps {
    dynamicInstructionCount: {
        significand: number;
        decade: number;
    };
    clockRate: number;
    isClassCPresent: boolean;
}

const createTemplate = (props: TemplateQuestionProps): string => {
    const { dynamicInstructionCount, clockRate, isClassCPresent } = props;
    const { significand, decade } = dynamicInstructionCount;

    const classList = isClassCPresent ? "A, B, and C" : "A and B";
    const classCount = isClassCPresent ? "three" : "two";

    return (`Suppose the implementation of an instruction 
set architecture uses ${classCount} classes of instructions: ${classList}. 
The total dynamic instruction count is ${significand} x 10^${decade} and the 
processor's clock rate is ${clockRate} GHz. Details for the three classes 
are given in the table below:`);
};


interface InstructionClassProps extends Partial<OnChangeEvent> {
    classHolder: InstructionSet;
}

const TableReference = (props: InstructionClassProps): ReactElement => {
    const headData= {
        headStart: "Class",
        headMiddle: "CPI",
        headEnd: "% of Instructions",
    };

    return (
        <Table class={anim['text-anim-2']}>
            <TableHead objectData={headData} />
            <TableBody>
                <TableData objectData={props.classHolder.classA.grabData()} />
                <TableData objectData={props.classHolder.classB.grabData()} />
                {props.classHolder.isClassCPresent &&
                    <TableData objectData={props.classHolder.classC.grabData()} />
                }
            </TableBody>
        </Table>
    );
};


const Directions = (): ReactElement => {
    return (
        <p className={anim['text-anim-3']}>Complete the following table.
            <strong> Express all answers in scientific notation and round to two decimal places, 
                when needed.
            </strong>
        </p>
    );
};

const InputTable = (props: InstructionClassProps): ReactElement => {
    const headData = {
        headStart: "Class",
        headMiddle: "Instruction Count",
        headEnd: "Number of Clock Cycles",
    };

    const InputDataCell = (props: OnChangeEvent): ReactElement => {
        const scientificNotation = "x 10^";

        return (
            <TableDataCell hasChildren={true}>
                <InputText onChange={props.onChange} />
                <span>{scientificNotation}</span>
                <InputText onChange={props.onChange} />
            </TableDataCell>
        )
    };

    return (
        <Table class={anim['text-anim-4']}>
            <TableHead objectData={headData} />
            <TableBody>
                <TableRow>
                    <TableDataCell text={props.classHolder.classA.className} />
                    <InputDataCell onChange={props.onChange} />
                    <InputDataCell onChange={props.onChange} />
                </TableRow>
                <TableRow>
                    <TableDataCell text={props.classHolder.classB.className} />
                    <InputDataCell onChange={props.onChange} />
                    <InputDataCell onChange={props.onChange} />
                </TableRow>
                {props.classHolder.isClassCPresent &&
                    <TableRow>
                        <TableDataCell text={props.classHolder.classC.className} />
                        <InputDataCell onChange={props.onChange} />
                        <InputDataCell onChange={props.onChange} />
                    </TableRow>
                }
            </TableBody>
        </Table>
    );
};


interface InstrSetState {
    problem: InstructionSet;
    storage: InstructionSet[];
}

export default class InstructionSetForm extends React.Component<unknown, InstrSetState> {
    state: InstrSetState = { 
        problem: new InstructionSet(),
        storage: [],
    };

    grabUserInput = (event: ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();
    };

    processInput = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        this.state.problem.evaluateAnswer();
    };

    render(): ReactNode {
        const { dynamicInstructionCount, clockRate, isClassCPresent } = this.state.problem;

        return (
            <FormBox onSubmit={this.processInput}>
                <Question questionNumber="2" 
                            text={createTemplate({dynamicInstructionCount, clockRate, isClassCPresent})}>
                     <TableReference classHolder={this.state.problem} />           
                    <Directions />
                    <InputTable classHolder={this.state.problem} onChange={this.grabUserInput} />
                </Question>
            </FormBox>
        );
    }
}