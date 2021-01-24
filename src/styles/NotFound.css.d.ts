declare namespace NotFoundCssNamespace {
    export interface INotFoundCss {
        'page-container': string;
        shrug: string;
    }
}

declare const NotFoundCssModule: NotFoundCssNamespace.INotFoundCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: NotFoundCssNamespace.INotFoundCss;
};

export = NotFoundCssModule;
