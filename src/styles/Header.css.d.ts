declare namespace HeaderCssNamespace {
  export interface IHeaderCss {
    container: string;
    header: string;
    header__left: string;
    "header__left--logo": string;
    header__right: string;
    "light-bulb": string;
    nav__link: string;
    nav__list: string;
    "nav__list-item": string;
    navigation: string;
  }
}

declare const HeaderCssModule: HeaderCssNamespace.IHeaderCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderCssNamespace.IHeaderCss;
};

export = HeaderCssModule;
