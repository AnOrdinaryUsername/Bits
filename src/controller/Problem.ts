import UserChoice from "./UserChoice";

export default class Problem {
  private _question: string;
  public selection: UserChoice;

  constructor(select: UserChoice) {
    this._question = "";
    this.selection = select;
  }

  private getRandomDigit = (): string => {
    const randNum = Math.floor(Math.random() * this.selection.oldBase);

    return randNum.toString(this.selection.oldBase).toUpperCase();
  };

  public generateProblem = (amount = 4): void => {
    for (let i = 0; i < amount; ++i) {
      this._question += this.getRandomDigit();
    }
    document.getElementById("question").textContent = this.question;
  };

  public get question(): string {
    return this._question;
  }
}
