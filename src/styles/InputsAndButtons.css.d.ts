declare namespace InputsAndButtonsCssNamespace {
  export interface IInputsAndButtonsCss {
    "input-text": string;
  }
}

declare const InputsAndButtonsCssModule: InputsAndButtonsCssNamespace.IInputsAndButtonsCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: InputsAndButtonsCssNamespace.IInputsAndButtonsCss;
};

export = InputsAndButtonsCssModule;
