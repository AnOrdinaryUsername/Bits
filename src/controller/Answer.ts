import Problem from "./Problem";
import UserInput from "./UserInput";

const HEXADECIMAL = 16;

export default class Answer {
  public solution: string;
  private userSolution: UserInput;
  private randProblem: Problem;

  constructor(inputObj: UserInput, questionObj: Problem) {
    this.userSolution = inputObj;
    this.randProblem = questionObj;
  }

  public isCorrect = (): boolean => {
    this.calculateAnswer();
    return this.solution === this.userSolution.grabInput().replace(/\s/g, "");
  };

  // toString(2) doesn't have leading zeros, so this method adds the rest of them.
  private adjustHexSolution = (answer: string, amount: number): string => {
    const stringArray = answer.split(""); // Create array for old solution.
    const remainingZeros = HEXADECIMAL - amount;

    for (let i = 0; i < remainingZeros; ++i) {
      stringArray.unshift("0"); // Push remaining zeros to the front.
    }

    return stringArray.join(""); // Concatenate elements in array to new answer string.
  };

  private calculateAnswer = (): void => {
    const oldBase = this.randProblem.selection.oldBase;
    const newBase = this.randProblem.selection.newBase;
    const question = parseInt(this.randProblem.getQuestion(), oldBase);

    const solution = question.toString(newBase);

    // A nibble is a 4-bit group used to denote a single hex digit.
    const NIBBLE = 4;
    if (oldBase === HEXADECIMAL) {
      if (solution.length !== question * NIBBLE) {
        // Yes I know I can use String.prototype.padStart(), but that's in ES2017.
        // Gotta support the bros with browsers only supporting ES5.
        this.solution = this.adjustHexSolution(solution, solution.length);
      }
    }

    this.solution = solution;
  };
}
