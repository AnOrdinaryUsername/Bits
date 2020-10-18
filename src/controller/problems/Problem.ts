import UserChoice from "./UserChoice";

export default class Problem {
  private _wrongAnswers: string[];
  private _question: string;
  public selection: UserChoice;

  constructor(select: UserChoice) {
    this._wrongAnswers = [];
    this._question = "";
    this.selection = select;
  }

  private getRandomDigit = (): string => {
    const randNum = Math.floor(Math.random() * this.selection.oldBase);

    return randNum.toString(this.selection.oldBase).toUpperCase();
  };

  public erasePreviousQuestion = (): void => {
    this._question = "";
  };

  public generateProblem = (amount = 4): void => {
    for (let i = 0; i < amount; ++i) {
      this._question += this.getRandomDigit();
    }

    const oldBase = this.selection.oldBase.toString();
    const newBase = this.selection.newBase.toString();

    document.getElementById("question").textContent = "";
    document.getElementById("question").textContent = this.question;
    document.getElementById("base-1").textContent = oldBase;
    document.getElementById("base-2").textContent = newBase;
  };

  public pushQuestionGotWrong = (question: string): void => {
    this._wrongAnswers.push(question);
    console.log(this._wrongAnswers);
  };

  public get question(): string {
    return this._question;
  }
}
