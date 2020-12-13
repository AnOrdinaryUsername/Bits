import Problem from "./Problem";

export default class BaseConversion extends Problem {
  private _oldBase: number; // The base that we want to convert.
  private _newBase: number; // The new base converted from the old base.
  private _question: string;

  constructor() {
    super();
    this._oldBase = 16;
    this._newBase = 2;
  }

  protected getRandomDigit = (): string => {
    const randNum = Math.floor(Math.random() * this._oldBase);

    return randNum.toString(this._oldBase).toUpperCase();
  };

  public generateProblem = (amount = 4): void => {
    for (let i = 0; i < amount; ++i) {
      this._question += this.getRandomDigit();
    }

    const oldBase = this._oldBase.toString();
    const newBase = this._newBase.toString();

  };
}