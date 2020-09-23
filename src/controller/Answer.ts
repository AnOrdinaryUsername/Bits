import Problem from "./Problem";
import UserInput from "./UserInput";

enum Base {
  Hexadecimal = 16,
  Binary = 2,
}

export default class Answer {
  public solution: string;
  private _userSolution: UserInput;
  private _randProblem: Problem;

  constructor(inputObj: UserInput, questionObj: Problem) {
    this._userSolution = inputObj;
    this._randProblem = questionObj;
  }

  public isCorrect = (): boolean => {
    this.calculateAnswer();
    // replace() has a regex that removes all whitespaces.
    return (
      this.solution.toUpperCase() ===
      this._userSolution.grabInput().replace(/\s/g, "").toUpperCase()
    );
  };

  private calculateAnswer = (): void => {
    const oldBase = this._randProblem.selection.oldBase;
    const newBase = this._randProblem.selection.newBase;
    const question = parseInt(this._randProblem.question, oldBase);

    const solution = question.toString(newBase);

    // A nibble is a 4-bit group used to denote a single hex digit.
    const NIBBLE = 4;
    if (oldBase === Base.Hexadecimal && newBase === Base.Binary) {
      if (solution.length !== question * NIBBLE) {
        // Pad missing zeros for new binary number.
        // toString(2) doesn't include leading zeros.
        this.solution = solution.padStart(Base.Hexadecimal, "0");
        return;
      }
    }

    this.solution = solution;
  };
}
