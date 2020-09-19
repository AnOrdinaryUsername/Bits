import Problem from "./controller/Problem";
import UserChoice from "./controller/UserChoice";
import UserInput from "./controller/UserInput";

((): void => {
  const choices: UserChoice = new UserChoice();
  const problem: Problem = new Problem(choices);

  const input: UserInput = new UserInput(problem);

  choices.confirmChoice(problem);
  input.onSubmit();
  input.showNextQuestion();
})();
