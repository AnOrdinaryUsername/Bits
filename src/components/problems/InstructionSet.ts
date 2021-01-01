import { getRandomDecimal, getRandomInt } from '../../utils/utility';
import Problem from './Problem';
import Result from './Result';

interface InstructionClassData {
    [key: string]: string;
}

class InstructionClass {
    readonly className: string;
    readonly cpi: number;
    public instructionPercent: number;
    // The results
    private _clockCycles: ClockCyclesAnswer;
    private _instructionCount: InstructionCountAnswer;

    constructor(className: string) {
        this.className = className;
        this.instructionPercent = this.getRandomPercentage();
        this.cpi = this.getRandomCpi();
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


class InstructionCountAnswer implements Result {
    public answer: {
        isRight: boolean;
    };

    constructor(public solution: number = null,
        public actualSolution: number = null) {
        this.answer.isRight = null;
    }

    private createSolution = (classObject: InstructionClass, setObject: InstructionSet): void => {
        const TWO_DECIMAL_PLACE = 100;

        const decimalPercent = classObject.instructionPercent / TWO_DECIMAL_PLACE;
        this.actualSolution = setObject.dynamicInstructionCount * decimalPercent;
    };

    public checkUserAnswer = (userAnswer: number, classObject: InstructionClass,
        setObject: InstructionSet): void => {
        this.createSolution(classObject, setObject);

        this.solution = userAnswer;

        if (this.actualSolution === this.solution) {
            this.answer.isRight = true;
        } else {
            this.answer.isRight = false;
        }
    };
}


class ClockCyclesAnswer implements Result {
    public answer: {
        isRight: boolean;
    };

    constructor(public solution: number = null,
        public actualSolution: number = null) {
        this.answer.isRight = null;
    }

    private createSolution = (instrObject: InstructionClass): void => {
        this.actualSolution = instrObject.instructionCount.actualSolution * instrObject.cpi;
    };

    public checkUserAnswer = (): void => {

    };
}

/* Given the following form in scientific notation:
*                   m * 10^n
*           m = significand , n = decade
*/
interface InstructionCount {
    significand: number;
    decade: number;
}

export default class InstructionSet implements Problem {
    readonly classA: InstructionClass;
    readonly classB: InstructionClass;
    readonly classC?: InstructionClass;
    public isClassCPresent = false;

    readonly dynamicInstructionCount: InstructionCount;
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

    private getRandomInstructionCount = (): InstructionCount => {
        const [SIGNIFICAND_START, SIGNIFICAND_END] = [1, 2];
        const randomSignificand = getRandomInt(SIGNIFICAND_START, SIGNIFICAND_END);

        const [DECADE_START, DECADE_END] = [5, 7];
        const randomDecade = getRandomInt(DECADE_START, DECADE_END);

        return ({
            significand: randomSignificand,
            decade: randomDecade,
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

    public evaluateAnswer = (): void => {

    };
}