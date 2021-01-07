declare namespace AccessibilityCssNamespace {
  export interface IAccessibilityCss {
    outline: string;
  }
}

declare const AccessibilityCssModule: AccessibilityCssNamespace.IAccessibilityCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AccessibilityCssNamespace.IAccessibilityCss;
};

export = AccessibilityCssModule;
