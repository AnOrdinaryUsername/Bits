declare namespace FormBoxCssNamespace {
  export interface IFormBoxCss {
    fieldset: string;
    form: string;
    "form--bg-shadow": string;
    "form--bg-white": string;
    "form--border-round": string;
  }
}

declare const FormBoxCssModule: FormBoxCssNamespace.IFormBoxCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FormBoxCssNamespace.IFormBoxCss;
};

export = FormBoxCssModule;
