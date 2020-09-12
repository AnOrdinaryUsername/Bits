import Problem from "./problem";
import UserInput from "./user-input";

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

  private calculateAnswer = (): void => {
    this.solution = parseInt(this.randProblem.getQuestion(), 16).toString(2); // TODO: allow different bases
  };
}
