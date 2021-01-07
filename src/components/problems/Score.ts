export default class Score {
  private _rightCount: number;
  private _wrongCount: number;

  constructor() {
    this._rightCount = 0;
    this._wrongCount = 0;
  }

  public incrementRightCount = (): void => {
    this._rightCount += 1;
  };

  public incrementWrongCount = (): void => {
    this._wrongCount += 1;
  };

  public resetScore = (): void => {
    this._rightCount = 0;
    this._wrongCount = 0;
  };
}
