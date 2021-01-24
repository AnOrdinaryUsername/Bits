declare namespace AnimationCssNamespace {
    export interface IAnimationCss {
        'text-anim-1': string;
        'text-anim-2': string;
        'text-anim-3': string;
        'text-anim-4': string;
        'text-enter': string;
    }
}

declare const AnimationCssModule: AnimationCssNamespace.IAnimationCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: AnimationCssNamespace.IAnimationCss;
};

export = AnimationCssModule;
