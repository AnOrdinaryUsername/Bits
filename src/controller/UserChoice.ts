export default class UserChoice {
  public amount: number;
  public oldBase: number; // The base that we want to convert.
  public newBase: number; // The new base converted from the old base.

  // Binary, Octal, Decimal, Hexadecimal
  constructor() {
    this.amount = 4;
    this.oldBase = 0;
    this.newBase = 0;
  }

  public confirmChoice = (): void => {
    document.getElementById("confirm-choices").addEventListener("click", () => {
      const unconvertedBase = <HTMLSelectElement>(
        document.getElementById("base-select-1")
      );
      const convertedBase = <HTMLSelectElement>(
        document.getElementById("base-select-2")
      );

      this.oldBase = parseInt(unconvertedBase.value);
      this.newBase = parseInt(convertedBase.value);

      document
        .getElementById("choose-practice")
        .classList.toggle("hide-display");

      document
        .getElementById("practice-problems")
        .classList.toggle("hide-display");
    });
  };
}
