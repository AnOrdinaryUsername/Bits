import Problem from './Result';

export default class BinaryAddition extends Problem {
    private _topBit: string;
    private _bottomBit: string;

    constructor() {
        super();
        this._topBit = '';
        this._bottomBit = '';
    }

    protected getRandomDigit = (): string => {
        const chance = Math.floor(Math.random() * 100);

        // Don't want overflow problems to be common so '0' bits are more common than '1' bits
        // (0 has a 60% chance while 1 has a 40% chance).
        return chance < 60 ? '0' : '1';
    };

    public generateProblem = (amount = 4): void => {
        const randomQuestion = ['unsigned', 'signed'];

        for (let i = 0; i < amount; ++i) {
            this._topBit += this.getRandomDigit();
            this._bottomBit += this.getRandomDigit();
        }
    };
}
