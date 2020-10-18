export default abstract class Problem {
  protected _wrongAnswers: string[];
  protected _question: string;

  constructor() {
    this._wrongAnswers = [];
    this._question = "";
  }

  protected abstract getRandomDigit(): string;

  public abstract generateProblem(): void;

  public erasePreviousQuestion = (): void => {
    this._question = "";
  };

  public get question(): string {
    return this._question;
  }
}
