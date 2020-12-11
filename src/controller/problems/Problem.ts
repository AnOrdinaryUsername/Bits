export default abstract class Problem {
  protected _wrongAnswers: Problem[];

  constructor() {
    this._wrongAnswers = [];
  }

  protected abstract getRandomDigit(): string;

  public abstract generateProblem(): void;

  public pushQuestionsGotWrong = (question: Problem): void => {
    this._wrongAnswers.push(question);
  };
}
