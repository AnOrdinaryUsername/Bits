declare namespace ResourcesCssNamespace {
  export interface IResourcesCss {
    content: string;
    "content-container": string;
    "group-name": string;
    resource: string;
    resource__description: string;
    resource__link: string;
    resource__title: string;
    suggestion: string;
    suggestion__button: string;
    "suggestion__button--bottom": string;
    suggestion__text: string;
    title: string;
    "title--shadow": string;
    title__description: string;
    title__heading: string;
  }
}

declare const ResourcesCssModule: ResourcesCssNamespace.IResourcesCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ResourcesCssNamespace.IResourcesCss;
};

export = ResourcesCssModule;
