import Problem from "./Problem";

export default class UserChoice {
  private _amount: number;
  private _oldBase: number; // The base that we want to convert.
  private _newBase: number; // The new base converted from the old base.

  // Binary, Octal, Decimal, Hexadecimal
  constructor() {
    this._amount = 4;
    this._oldBase = 0;
    this._newBase = 0;
  }

  public confirmChoice = (firstQuestion: Problem): void => {
    document.getElementById("confirm-choices").addEventListener("click", () => {
      const unconvertedBase = (<HTMLSelectElement>(
        document.getElementById("base-select-1")
      )).value;

      const convertedBase = (<HTMLSelectElement>(
        document.getElementById("base-select-2")
      )).value;

      if (unconvertedBase === convertedBase) {
        console.log("bro");
        return;
      }

      firstQuestion.selection._oldBase = parseInt(unconvertedBase);
      firstQuestion.selection._newBase = parseInt(convertedBase);

      document
        .getElementById("choose-practice")
        .classList.toggle("hide-display");

      firstQuestion.generateProblem();

      document
        .getElementById("practice-problems")
        .classList.toggle("hide-display");
    });
  };

  public get oldBase(): number {
    return this._oldBase;
  }

  public get newBase(): number {
    return this._newBase;
  }
}
