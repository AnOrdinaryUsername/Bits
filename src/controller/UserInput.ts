import Answer from "./Answer";
import Problem from "./Problem";
import Score from "./Score";

export default class UserInput {
  private _currentProblem: Problem;
  private _userScore: Score;
  private _submitState: boolean; // Boolean to check if user has submitted already.

  constructor(problem: Problem) {
    this._currentProblem = problem;
    this._userScore = new Score();
    this._submitState = false;
  }

  public onSubmit = (): void => {
    document.getElementById("user-answer").addEventListener("submit", (e) => {
      // once submitted, check if answer is correct + display box with feedback
      e.preventDefault();

      // If user has submitted already, prevent another submittal
      if (this._submitState) return;

      const a: Answer = new Answer(this, this._currentProblem);
      const tip = document.querySelector(".tip");

      if (this.grabInput() === null) {
        tip.textContent = "You didn't enter a value! >:(";
        return;
      }

      if (a.isCorrect()) {
        tip.textContent = "Woah epic move!";
        this._userScore.incrementRightCount();
      } else {
        tip.textContent = "Sadge not right";
        this._userScore.incrementWrongCount();
        this._currentProblem.pushQuestionGotWrong(
          this._currentProblem.question
        );
      }

      document.querySelector(".test").textContent = a.solution;
      document.querySelector(
        ".test2"
      ).textContent = a.solution.length.toString();

      document
        .querySelector(".result button")
        .classList.toggle("hide-visibility");

      this._submitState = true;
    });
  };

  public showNextQuestion = (): void => {
    document.querySelector(".result button").addEventListener("click", () => {
      this._submitState = false;

      this._currentProblem.erasePreviousQuestion();
      this._currentProblem.generateProblem();
      document
        .querySelector(".result button")
        .classList.toggle("hide-visibility");
    });
  };

  public grabInput = (): string => {
    // Cast HTMLElement to HTMLInputElement to use value property
    return (<HTMLInputElement>document.getElementById("user-input")).value;
  };
}
