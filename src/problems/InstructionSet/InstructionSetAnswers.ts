import Result from '../../types/Result';
import { ScientificNotation, ScientificNotationConverter } from '../../utils/ScientificNotation';
import { InstructionClass } from './InstructionClass';
import { InstructionSet } from './InstructionSet';

interface Solutions {
    userSolution: ScientificNotation;
    actualSolution: ScientificNotation;
}

export class InstructionCountAnswer implements Result, Solutions {
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
        const decimalDynamicInstructionCount = significand * BASE ** exponent;

        const decimalInstructionCount = decimalDynamicInstructionCount * decimalPercent;

        const converter = new ScientificNotationConverter();
        this.actualSolution = converter.generateForm(decimalInstructionCount, ROUND_AMOUNT);
    };

    public checkUserAnswer = (
        userInput: ScientificNotation,
        classObject: InstructionClass,
        setObject: InstructionSet
    ): void => {
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

export class ClockCyclesAnswer implements Result, Solutions {
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

        const decimalInstructionCount = significand * BASE ** exponent;
        const decimalClockCycles = decimalInstructionCount * instrObject.cpi;

        const converter = new ScientificNotationConverter();
        this.actualSolution = converter.generateForm(decimalClockCycles, ROUND_AMOUNT);
    };

    public checkUserAnswer = (
        userInput: ScientificNotation,
        classObject: InstructionClass
    ): void => {
        this.createSolution(classObject);

        this.userSolution = userInput;

        if (JSON.stringify(this.actualSolution) === JSON.stringify(this.userSolution)) {
            this.answer.isRight = true;
        } else {
            this.answer.isRight = false;
        }
    };
}
