interface Result {
  isRight: boolean;
}

export default abstract class Problem {
  protected answer: Result;
  protected solution: Problem;
  protected userSolution: Problem;

  constructor() {
    this.answer = { isRight: null };
    this.solution = null;
    this.userSolution = null;
  }

  public abstract generateProblem(): void;

  protected abstract checkAnswer(): void;

}
