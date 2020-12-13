
export default class UserInput {

  public grabInput = (): string => {
    // Cast HTMLElement to HTMLInputElement to use value property
    return (<HTMLInputElement>document.getElementById("user-input")).value;
  };
}
