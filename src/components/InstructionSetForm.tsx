import React, { ChangeEvent, ReactElement, ReactNode } from 'react';
import uniqid from 'uniqid';
import { InstructionClassData, InstructionSet } from '../problems/InstructionSet';
import anim from '../styles/Animation.css';
import { OnChangeEvent } from '../types/Events';
import { ScientificNotation } from '../utils/ScientificNotation';
import FormBox from './FormBox';
import { InputSubmit, InputText } from './InputsAndButtons';
import { Question } from './Question';
import { Table, TableBody, TableData, TableDataCell, TableHead, TableRow } from './Table';

interface SetData {
    dynamicInstructionCount: ScientificNotation;
    clockRate: number;
    isClassCPresent: boolean;
}

const createTemplate = (setObject: SetData): string => {
    const { dynamicInstructionCount, clockRate, isClassCPresent } = setObject;

    const { significand, exponent } = dynamicInstructionCount;

    const classList = isClassCPresent ? 'A, B, and C' : 'A and B';
    const classCount = isClassCPresent ? 'three' : 'two';

    return `Suppose the implementation of an instruction 
set architecture uses ${classCount} classes of instructions: ${classList}. 
The total dynamic instruction count is ${significand} x 10^${exponent} and the 
processor's clock rate is ${clockRate} GHz. Details for the ${classCount} classes 
are given in the table below:`;
};

interface InstructionClassProps {
    classData: InstructionClassData[];
}

const TableReference = (props: InstructionClassProps): ReactElement => {
    const headData = {
        headStart: 'Class',
        headMiddle: 'CPI',
        headEnd: '% of Instructions',
    };

    return (
        <Table class={anim['text-anim-2']}>
            <TableHead objectData={headData} />
            <TableBody>
                {props.classData.map((element) => {
                    if (element.name) {
                        return <TableData key={uniqid()} objectData={element} />;
                    }
                })}
            </TableBody>
        </Table>
    );
};

const Directions = (): ReactElement => {
    return (
        <p className={anim['text-anim-3']}>
            Complete the following table.
            <strong>
                {' '}
                Express all answers in scientific notation and round to two decimal places, when
                needed.
            </strong>
        </p>
    );
};

interface InputDataCellProps extends OnChangeEvent {
    significandValue: string;
    significandName: string;
    exponentValue: string;
    exponentName: string;
}

const InputDataCell = (props: InputDataCellProps): ReactElement => {
    const scientificNotation = 'x 10^';

    return (
        <TableDataCell hasChildren={true}>
            <InputText
                name={props.significandName}
                value={props.significandValue}
                onChange={props.onChange}
            />
            <span>{scientificNotation}</span>
            <InputText
                name={props.exponentName}
                value={props.exponentValue}
                onChange={props.onChange}
            />
        </TableDataCell>
    );
};

interface InputTableProps extends OnChangeEvent {
    inputValuesAndNames: InstrSetState;
    setObject: InstructionSet;
}

const InputTable = (props: InputTableProps): ReactElement => {
    const headData = {
        headStart: 'Class',
        headMiddle: 'Instruction Count',
        headEnd: 'Number of Clock Cycles',
    };

    const stateValue = props.inputValuesAndNames;
    const { classA, classB } = props.setObject;

    return (
        <Table class={anim['text-anim-4']}>
            <TableHead objectData={headData} />
            <TableBody>
                <TableRow>
                    <TableDataCell text={classA.className} />
                    <InputDataCell
                        significandValue={stateValue.classAInstructionCountSignificand}
                        significandName="classAInstructionCountSignificand"
                        exponentValue={stateValue.classAInstructionCountExponent}
                        exponentName="classAInstructionCountExponent"
                        onChange={props.onChange}
                    />
                    <InputDataCell
                        significandValue={stateValue.classAClockCyclesSignificand}
                        significandName="classAClockCyclesSignificand"
                        exponentValue={stateValue.classAClockCyclesExponent}
                        exponentName="classAClockCyclesExponent"
                        onChange={props.onChange}
                    />
                </TableRow>
                <TableRow>
                    <TableDataCell text={classB.className} />
                    <InputDataCell
                        significandValue={stateValue.classBInstructionCountSignificand}
                        significandName="classBInstructionCountSignificand"
                        exponentValue={stateValue.classBInstructionCountExponent}
                        exponentName="classBInstructionCountExponent"
                        onChange={props.onChange}
                    />
                    <InputDataCell
                        significandValue={stateValue.classBClockCyclesSignificand}
                        significandName="classBClockCyclesSignificand"
                        exponentValue={stateValue.classBClockCyclesExponent}
                        exponentName="classBClockCyclesExponent"
                        onChange={props.onChange}
                    />
                </TableRow>
                {props.setObject.isClassCPresent && (
                    <TableRow>
                        <TableDataCell text="C" />
                        <InputDataCell
                            significandValue={stateValue.classCInstructionCountSignificand}
                            significandName="classCInstructionCountSignificand"
                            exponentValue={stateValue.classCInstructionCountExponent}
                            exponentName="classCInstructionCountExponent"
                            onChange={props.onChange}
                        />
                        <InputDataCell
                            significandValue={stateValue.classCClockCyclesSignificand}
                            significandName="classCClockCyclesSignificand"
                            exponentValue={stateValue.classCClockCyclesExponent}
                            exponentName="classCClockCyclesExponent"
                            onChange={props.onChange}
                        />
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};

interface InstrSetState {
    isSubmitted?: boolean;
    classAInstructionCountSignificand: string;
    classAInstructionCountExponent: string;
    classAClockCyclesSignificand: string;
    classAClockCyclesExponent: string;
    classBInstructionCountSignificand: string;
    classBInstructionCountExponent: string;
    classBClockCyclesSignificand: string;
    classBClockCyclesExponent: string;
    classCInstructionCountSignificand?: string;
    classCInstructionCountExponent?: string;
    classCClockCyclesSignificand?: string;
    classCClockCyclesExponent?: string;
}

export interface StateLiteralData {
    classA: {
        instructionCount: ScientificNotation;
        clockCycles: ScientificNotation;
    };
    classB: {
        instructionCount: ScientificNotation;
        clockCycles: ScientificNotation;
    };
    classC: {
        instructionCount: ScientificNotation;
        clockCycles: ScientificNotation;
    };
}

export class InstructionSetForm extends React.Component<null, InstrSetState> {
    private problem: InstructionSet;

    constructor(props: null) {
        super(props);
        this.problem = new InstructionSet();

        // nested state is bad kids
        this.state = {
            isSubmitted: false,
            // Class A Properties
            classAInstructionCountSignificand: '',
            classAInstructionCountExponent: '',
            classAClockCyclesSignificand: '',
            classAClockCyclesExponent: '',
            // Class B Properties
            classBInstructionCountSignificand: '',
            classBInstructionCountExponent: '',
            classBClockCyclesSignificand: '',
            classBClockCyclesExponent: '',
            // Optional Class C Properties
            ...(this.problem.isClassCPresent && {
                classCInstructionCountSignificand: '',
                classCInstructionCountExponent: '',
                classCClockCyclesSignificand: '',
                classCClockCyclesExponent: '',
            }),
        };
    }

    createStateLiteral = (): StateLiteralData => {
        // Value returns a string and want a float/int so we pass it to the Number constructor.
        const stateLiteral = {
            classA: {
                instructionCount: {
                    significand: Number(this.state.classAInstructionCountSignificand),
                    exponent: Number(this.state.classAInstructionCountExponent),
                },
                clockCycles: {
                    significand: Number(this.state.classAClockCyclesSignificand),
                    exponent: Number(this.state.classAClockCyclesExponent),
                },
            },
            classB: {
                instructionCount: {
                    significand: Number(this.state.classBInstructionCountSignificand),
                    exponent: Number(this.state.classBInstructionCountExponent),
                },
                clockCycles: {
                    significand: Number(this.state.classBClockCyclesSignificand),
                    exponent: Number(this.state.classBClockCyclesExponent),
                },
            },
            ...(this.problem.isClassCPresent && {
                classC: {
                    instructionCount: {
                        significand: Number(this.state.classCInstructionCountSignificand),
                        exponent: Number(this.state.classCInstructionCountExponent),
                    },
                    clockCycles: {
                        significand: Number(this.state.classCClockCyclesSignificand),
                        exponent: Number(this.state.classCClockCyclesExponent),
                    },
                },
            }),
        };

        return stateLiteral;
    };

    grabUserInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;

        this.setState(
            (prevState) => ({
                ...prevState,
                [name]: value,
            }),
            () => console.log(`${name}: ${this.state[name]}`)
        );
    };

    processInput = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        this.setState({
            isSubmitted: true,
        });

        const userInputValues = this.createStateLiteral();
        this.problem.evaluateAnswer(userInputValues);

        console.log('all good!');

        console.log(
            `classAInstructionCount is right? = ${this.problem.classA.instructionCount.answer.isRight}`
        );
        console.log(
            `classAClockCycles is right? = ${this.problem.classA.clockCycles.answer.isRight}`
        );
    };

    render(): ReactNode {
        const { classA, classB, classC } = this.problem;

        const classes = [classA.grabData(), classB.grabData()];

        if (classC) {
            classes.push(classC.grabData());
        }

        return (
            <FormBox onSubmit={this.processInput}>
                <Question questionNumber="2" text={createTemplate(this.problem)}>
                    <TableReference classData={classes} />
                    <Directions />
                    <InputTable
                        inputValuesAndNames={this.state}
                        setObject={this.problem}
                        onChange={this.grabUserInput}
                    />
                    {this.state.isSubmitted ? (
                        <button>Next Question</button>
                    ) : (
                        <InputSubmit value={'Submit'} />
                    )}
                </Question>
            </FormBox>
        );
    }
}
