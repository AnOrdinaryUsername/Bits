import { getRandomDecimal, getRandomInt } from '../../utils/RandomNumGen';
import { ClockCyclesAnswer, InstructionCountAnswer } from './InstructionSetAnswers';

export interface InstructionClassData {
    [key: string]: string;
}

export class InstructionClass {
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

    public getRandomPercentage = (min = 5, max = 14): number => {
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