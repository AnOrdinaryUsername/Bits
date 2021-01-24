declare namespace HomeCssNamespace {
    export interface IHomeCss {
        'canvas-wrapper': string;
        hero: string;
        'hero-buttons': string;
        'hero-container': string;
        'hero-content': string;
        'link-btn': string;
        'link-btn--dark': string;
        'link-btn--light': string;
        'link-btn--primary': string;
        'link-btn--secondary': string;
        svg: string;
    }
}

declare const HomeCssModule: HomeCssNamespace.IHomeCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: HomeCssNamespace.IHomeCss;
};

export = HomeCssModule;
