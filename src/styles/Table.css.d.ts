declare namespace TableCssNamespace {
    export interface ITableCss {
        table: string;
        'table-container': string;
        table__cell: string;
        'table__header-cell': string;
        table__row: string;
    }
}

declare const TableCssModule: TableCssNamespace.ITableCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: TableCssNamespace.ITableCss;
};

export = TableCssModule;
