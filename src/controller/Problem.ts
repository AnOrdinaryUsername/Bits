import UserChoice from "./UserChoice";

export default class Problem {
  private question: string;
  public selection: UserChoice;

  constructor(select: UserChoice) {
    this.question = "";
    this.selection = select;
  }

  private getRandomDigit = (base = 10): string => {
    const randNum = Math.floor(Math.random() * Math.floor(base));

    return randNum.toString(base).toUpperCase();
  };

  public generateProblem = (amount = 4, base = 10): void => {
    for (let i = 0; i < amount; ++i) {
      this.question += this.getRandomDigit(base);
    }
    document.getElementById("question").textContent = this.question;
  };

  public getQuestion = (): string => {
    return this.question;
  };
}
