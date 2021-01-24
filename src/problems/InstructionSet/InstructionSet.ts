import { StateLiteralData } from '../../components/InstructionSetForm';
import Problem from '../../types/Problem';
import { getRandomDecimal, getRandomInt } from '../../utils/RandomNumGen';
import { ScientificNotation } from '../../utils/ScientificNotation';
import { InstructionClass } from './InstructionClass';

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
        this.classA = new InstructionClass('A');
        this.classB = new InstructionClass('B');

        if (getRandomInt(0, 1) === 1) {
            this.classC = new InstructionClass('C');
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

        return {
            significand: randomSignificand,
            exponent: randomexponent,
        };
    };

    private getRandomClockRate = (): number => {
        const [START, END] = [2, 3];

        return getRandomDecimal(START, END);
    };

    public generateProblem = (): void => {
        const { classA, classB, classC } = this;
        const MAX_PERCENT = 100;

        if (!this.isClassCPresent) {
            classB.instructionPercent = MAX_PERCENT - this.classA.instructionPercent;
            return;
        }

        const MULTIPLE = 5;
        const LOWER_BOUND = 2; // aka 10%
        const CLASS_B_LIMIT = 12 * MULTIPLE;

        let upperBound = null;
        if (classA.instructionPercent > CLASS_B_LIMIT) {
            upperBound = 3;
            classB.instructionPercent = classB.getRandomPercentage(LOWER_BOUND, upperBound);
        } else {
            upperBound = 5;
            classB.instructionPercent = classB.getRandomPercentage(LOWER_BOUND, upperBound);
        }

        const remainingPercent =
            MAX_PERCENT - (classA.instructionPercent + classB.instructionPercent);
        classC.instructionPercent = remainingPercent;
    };

    public evaluateAnswer = (userInput: StateLiteralData): void => {
        const { classA, classB, classC } = userInput;

        this.classA.instructionCount.checkUserAnswer(classA.instructionCount, this.classA, this);
        this.classA.clockCycles.checkUserAnswer(classA.clockCycles, this.classA);

        this.classB.instructionCount.checkUserAnswer(classB.instructionCount, this.classB, this);
        this.classB.clockCycles.checkUserAnswer(classB.clockCycles, this.classB);

        if (this.isClassCPresent) {
            this.classC.instructionCount.checkUserAnswer(
                classC.instructionCount,
                this.classC,
                this
            );
            this.classC.clockCycles.checkUserAnswer(classC.clockCycles, this.classC);
        }
    };
}
