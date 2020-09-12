import Answer from "./answer";
import Problem from "./problem";

export default class UserInput {
  public onSubmit = (question: Problem): void => {
    document.getElementById("question").addEventListener("submit", (e) => {
      // once submitted, check if answer is correct + display box with feedback
      const a: Answer = new Answer(this, question);
      const tip = document.querySelector(".tip");

      if (this.grabInput() === null) {
        tip.textContent = "You didn't enter a value! >:(";
        e.preventDefault();
        return;
      }

      if (a.isCorrect()) tip.textContent = "Woah epic move!";
      else tip.textContent = "Sadge not right";

      document.querySelector(".test").textContent = a.solution;
      document.querySelector(
        ".test2"
      ).textContent = a.solution.length.toString();
      e.preventDefault();
    });
  };

  public grabInput = (): string => {
    // Cast HTMLElement to HTMLInputElement to use value property
    return (<HTMLInputElement>document.getElementById("user-input")).value;
  };
}
