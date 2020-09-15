import Answer from "./Answer";
import Problem from "./Problem";

export default class UserInput {
  public onSubmit = (question: Problem): void => {
    document.getElementById("user-answer").addEventListener("submit", (e) => {
      // once submitted, check if answer is correct + display box with feedback
      e.preventDefault();
      const a: Answer = new Answer(this, question);
      const tip = document.querySelector(".tip");

      if (this.grabInput() === null) {
        tip.textContent = "You didn't enter a value! >:(";
        return;
      }

      if (a.isCorrect()) tip.textContent = "Woah epic move!";
      else tip.textContent = "Sadge not right";

      document.querySelector(".test").textContent = a.solution;
      document.querySelector(
        ".test2"
      ).textContent = a.solution.length.toString();
    });
  };

  public grabInput = (): string => {
    // Cast HTMLElement to HTMLInputElement to use value property
    return (<HTMLInputElement>document.getElementById("user-input")).value;
  };
}
