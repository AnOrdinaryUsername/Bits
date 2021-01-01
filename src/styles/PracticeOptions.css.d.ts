declare namespace PracticeOptionsCssNamespace {
  export interface IPracticeOptionsCss {
    checkbox: string;
    checkbox__input: string;
    checkbox__label: string;
    "checkbox__label--blue": string;
    fieldset__legend: string;
    "fieldset__legend--blue": string;
  }
}

declare const PracticeOptionsCssModule: PracticeOptionsCssNamespace.IPracticeOptionsCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PracticeOptionsCssNamespace.IPracticeOptionsCss;
};

export = PracticeOptionsCssModule;
