import { getRandomDecimal, getRandomInt } from '../../utils/RandomNumGen';
import { ScientificNotation, ScientificNotationConverter } from '../../utils/ScientificNotation';
import { StateLiteralData } from '../InstructionSetForm';
import Problem from './Problem';
import Result from './Result';

export interface InstructionClassData {
    [key: string]: string;
}

class InstructionClass {
    readonly className: string;
    readonly cpi: number;
    public instructionPercent: number;
    // The results
    private _instructionCount: InstructionCountAnswer;
    private _clockCycles: ClockCyclesAnswer;

    constructor(className: string) {
        this.className = className;
        this.instructionPercent = this.getRandomPercentage();
        this.cpi = this.getRandomCpi();

        this._instructionCount = new InstructionCountAnswer();
        this._clockCycles = new ClockCyclesAnswer();
    }

    private getRandomCpi = (): number => {
        const [MIN_CPI, MAX_CPI] = [1, 3];

        return getRandomDecimal(MIN_CPI, MAX_CPI);
    };

    public getRandomPercentage = (min = 5, max = 16): number => {
        const MULTIPLE = 5;
        // Grab a random multiple of 5 in the range from 25-80
        return getRandomInt(min, max) * MULTIPLE;
    };

    public grabData = (): InstructionClassData => {
        return ({
            name: this.className,
            cpi: this.cpi.toString(),
            instructionPercent: this.instructionPercent.toString() + "%",
        });
    };

    public get instructionCount(): InstructionCountAnswer {
        return this._instructionCount;
    }

    public get clockCycles(): ClockCyclesAnswer {
        return this._clockCycles;
    }
}

interface Solutions {
    userSolution: ScientificNotation;
    actualSolution: ScientificNotation;
}

class InstructionCountAnswer implements Result, Solutions {
    public answer: {
        isRight: boolean;
    };

    public userSolution: ScientificNotation;
    public actualSolution: ScientificNotation;

    constructor() {
        this.answer = {
            isRight: false,
        };

        this.userSolution = {
            significand: undefined,
            exponent: undefined,
        };

        this.actualSolution = {
            significand: undefined,
            exponent: undefined,
        };
    }

    private createSolution = (classObject: InstructionClass, setObject: InstructionSet): void => {
        const TWO_DECIMAL_PLACE = 100;
        const BASE = 10;
        const ROUND_AMOUNT = 2;

        const decimalPercent = classObject.instructionPercent / TWO_DECIMAL_PLACE;

        // Convert scientific notation to decimal notation for calculations
        const { significand, exponent } = setObject.dynamicInstructionCount;
        const decimalDynamicInstructionCount = significand * (BASE ** exponent)

        const decimalInstructionCount = decimalDynamicInstructionCount * decimalPercent;

        const converter = new ScientificNotationConverter();
        this.actualSolution = converter.generateForm(decimalInstructionCount, ROUND_AMOUNT);
    };

    public checkUserAnswer = (userInput: ScientificNotation, classObject: InstructionClass,
        setObject: InstructionSet): void => {
        this.createSolution(classObject, setObject);

        this.userSolution = userInput;

        // JSON.stringify is good enough for this job, otherwise create a more robust check for more
        // complex objects. Remember, order is important here.
        if (JSON.stringify(this.actualSolution) === JSON.stringify(this.userSolution)) {
            this.answer.isRight = true;
        } else {
            this.answer.isRight = false;
        }
    };
}


class ClockCyclesAnswer implements Result, Solutions {
    public answer: {
        isRight: boolean;
    };

    public userSolution: ScientificNotation;
    public actualSolution: ScientificNotation;

    constructor() {
        this.answer = {
            isRight: false,
        };

        this.userSolution = {
            significand: undefined,
            exponent: undefined,
        };

        this.actualSolution = {
            significand: undefined,
            exponent: undefined,
        };
    }

    private createSolution = (instrObject: InstructionClass): void => {
        const { significand, exponent } = instrObject.instructionCount.actualSolution;
        const BASE = 10;
        const ROUND_AMOUNT = 2;

        const decimalInstructionCount = significand * (BASE ** exponent);
        const decimalClockCycles = decimalInstructionCount * instrObject.cpi;

        const converter = new ScientificNotationConverter();
        this.actualSolution = converter.generateForm(decimalClockCycles, ROUND_AMOUNT);
    };

    public checkUserAnswer = (userInput: ScientificNotation, classObject: InstructionClass,): void => {
        this.createSolution(classObject);

        this.userSolution = userInput;

        if (JSON.stringify(this.actualSolution) === JSON.stringify(this.userSolution)) {
            this.answer.isRight = true;
        } else {
            this.answer.isRight = false;
        }
    };
}


export interface InstructionSetData {
    dynamicInstructionCount: ScientificNotation;
    clockRate: number;
    isClassCPresent: boolean;
}

export class InstructionSet implements Problem, InstructionSetData {
    readonly classA: InstructionClass;
    readonly classB: InstructionClass;
    readonly classC?: InstructionClass;
    public isClassCPresent = false;

    readonly dynamicInstructionCount: ScientificNotation;
    readonly clockRate: number;

    constructor() {
        this.classA = new InstructionClass("A");
        this.classB = new InstructionClass("B");

        if (getRandomInt(0, 1) === 1) {
            this.classC = new InstructionClass("C");
            this.isClassCPresent = true;
        }

        this.dynamicInstructionCount = this.getRandomInstructionCount();
        this.clockRate = this.getRandomClockRate();

        this.generateProblem();
    }

    private getRandomInstructionCount = (): ScientificNotation => {
        const [SIGNIFICAND_START, SIGNIFICAND_END] = [1, 2];
        const randomSignificand = getRandomInt(SIGNIFICAND_START, SIGNIFICAND_END);

        const [exponent_START, exponent_END] = [5, 7];
        const randomexponent = getRandomInt(exponent_START, exponent_END);

        return ({
            significand: randomSignificand,
            exponent: randomexponent,
        });
    };

    private getRandomClockRate = (): number => {
        const [START, END] = [2, 3];

        return getRandomDecimal(START, END);
    };

    public generateProblem = (): void => {
        if (!this.isClassCPresent) {
            this.classB.instructionPercent = 100 - this.classA.instructionPercent;
            return;
        }

        const MULTIPLE = 5;
        const startPercentage = (this.classA.instructionPercent / MULTIPLE) - 2;
        this.classB.instructionPercent = this.classB.getRandomPercentage(undefined, startPercentage);


        const remainingPercent = 100 - (this.classA.instructionPercent + this.classB.instructionPercent);
        this.classC.instructionPercent = remainingPercent;
    };

    public evaluateAnswer = (userInput: StateLiteralData): void => {
        const { classA, classB, classC } = userInput;

        this.classA.instructionCount.checkUserAnswer(classA.instructionCount, this.classA, this);
        this.classA.clockCycles.checkUserAnswer(classA.clockCycles, this.classA);

        this.classB.instructionCount.checkUserAnswer(classB.instructionCount, this.classB, this);
        this.classB.clockCycles.checkUserAnswer(classB.clockCycles, this.classB);

        if (this.isClassCPresent) {
            this.classC.instructionCount.checkUserAnswer(classC.instructionCount, this.classC, this);
            this.classC.clockCycles.checkUserAnswer(classC.clockCycles, this.classC);
        }
    };
}