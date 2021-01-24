declare namespace BackgroundCssNamespace {
    export interface IBackgroundCss {
        background: string;
        'background--color': string;
        'height-filler': string;
        'height-filler--bottom-color': string;
        'svg-wrapper': string;
    }
}

declare const BackgroundCssModule: BackgroundCssNamespace.IBackgroundCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: BackgroundCssNamespace.IBackgroundCss;
};

export = BackgroundCssModule;
