import Problem from "./controller/Problem";
import UserChoice from "./controller/UserChoice";
import UserInput from "./controller/UserInput";

const main = (): void => {
  const choices: UserChoice = new UserChoice();
  const input: UserInput = new UserInput();

  const problem: Problem = new Problem(choices);

  choices.confirmChoice(problem);
  input.onSubmit(problem);
};

main();
