declare namespace QuestionCssNamespace {
  export interface IQuestionCss {
    fieldset__legend: string;
    legend: string;
    question: string;
    "question-container": string;
  }
}

declare const QuestionCssModule: QuestionCssNamespace.IQuestionCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: QuestionCssNamespace.IQuestionCss;
};

export = QuestionCssModule;
