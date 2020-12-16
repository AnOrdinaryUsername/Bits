import { random } from '../../utils/utility';
import Problem from './Problem';

class InstructionClass {
    private _instructionPercent: number;
    private _cpi: number;
    private static MULTIPLE = 5;

    constructor() {
        this._instructionPercent = this.getRandomPercentage();
        this._cpi = this.getRandomCpi();
    }

    public getRandomCpi = (): number => {
        const MAX_CPI = 4;
        const ONE_DECIMAL_PLACE = 10;

        // Grab random floating-point number between 0 and 4
        const randomDecimal = Math.random() * MAX_CPI;
        // Round the result to 1 decimal place
        return Math.round(randomDecimal * ONE_DECIMAL_PLACE) / ONE_DECIMAL_PLACE;
    };

    public getRandomPercentage = (min: number = 5, max: number = 16): number => {
        // Grab a random multiple of 5 in the range from 25-80
        return Math.floor(Math.random() * (max - min + 1) + min) * InstructionClass.MULTIPLE;
    };

    public get cpi(): number {
        return this._cpi;
    }

    public get instructionPercent(): number {
        return this._instructionPercent;
    }

    public set instructionPercent(percent: number) {
        this._instructionPercent = this.getRandomPercentage(undefined, percent);
    }
}


export default class InstructionSet extends Problem {
    private _classA: InstructionClass;
    private _classB: InstructionClass;
    private _classC?: InstructionClass;

    constructor() {
        super();
        this._classA = new InstructionClass();
        this._classB = new InstructionClass();

        if (random(0, 1) === 1) {
            this._classC = new InstructionClass();
        }
    }

    public generateProblem = (): void => {

    };

    protected checkAnswer = (): void => {

    };
}