declare namespace CheckButtonCssNamespace {
  export interface ICheckButtonCss {
    checkbox: string;
    checkbox__input: string;
    checkbox__label: string;
    "checkbox__label--blue": string;
    fieldset__legend: string;
    "fieldset__legend--blue": string;
    form: string;
  }
}

declare const CheckButtonCssModule: CheckButtonCssNamespace.ICheckButtonCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CheckButtonCssNamespace.ICheckButtonCss;
};

export = CheckButtonCssModule;
