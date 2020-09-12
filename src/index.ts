import Problem from "./view/problem";
import UserInput from "./view/user-input";

const main = (): void => {
  const test: Problem = new Problem();
  const a: UserInput = new UserInput();

  test.generateProblem(4, 16);
  console.log(test.getQuestion());
  a.onSubmit(test);
};

main();
