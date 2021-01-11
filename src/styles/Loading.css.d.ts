declare namespace LoadingCssNamespace {
  export interface ILoadingCss {
    "loading-container": string;
    "loading-svg": string;
  }
}

declare const LoadingCssModule: LoadingCssNamespace.ILoadingCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LoadingCssNamespace.ILoadingCss;
};

export = LoadingCssModule;
