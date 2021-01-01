import React, { ReactElement } from 'react';
import styles from '../styles/Table.css';


interface TableChildrenProps {
    children: React.ReactNode;
    class?: string;
    inTableHead?: boolean;
}

const TableRow = (props: TableChildrenProps): ReactElement => {
    return (
        <tr className={`${props.inTableHead ? null: styles.table__row}`}>
            {props.children}
        </tr>
    );
}

interface TableTextProps {
    text: string;
}

const TableHeaderCell = (props: TableTextProps): ReactElement => {
    return <th className={styles['table__header-cell']}>{props.text}</th>;
}

interface TableDataCellProps extends Partial<TableTextProps> {
    hasChildren?: boolean;
    children?: React.ReactNode;
}

const TableDataCell = (props: TableDataCellProps): ReactElement => {
    if (props.hasChildren) {
        return <td className={styles.table__cell}>{props.children}</td>;
    }

    return <td className={styles.table__cell}>{props.text}</td>;
};


interface TableDataProps {
    objectData: { [key: string]: string };
}

const TableHead = (props: TableDataProps): ReactElement => {
    const data = Object.values(props.objectData);

    return (
        <thead>
            <TableRow inTableHead={true}>
                {data.map((element, index) => 
                    <TableHeaderCell key={index} text={element}></TableHeaderCell>
                )}
            </TableRow>
        </thead>
    );
};

const TableBody = (props: TableChildrenProps): ReactElement => {
    return (
        <tbody>
            {props.children}
        </tbody>
    );
};

const TableData = (props: TableDataProps): ReactElement => {
    const data = Object.values(props.objectData);

    return (
        <TableRow class={styles.table__row}>
            {data.map((element, index) =>
                    <TableDataCell key={index} text={element}></TableDataCell>
            )}
        </TableRow>
    )
};

const Table = (props: TableChildrenProps): ReactElement => {
    return (
        <div className={`${styles['table-container']} ${props.class}`}>
            <table className={styles.table}>
                {props.children}
            </table>
        </div>
    );
};

export {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableDataCell,
    TableData
};

/**
 * const Table = (...rest: Array<{ [key: string]: string }>): ReactElement => {
    const keys = rest.map(element => Object.keys(element));

    const cellArray = [];
    for (let i = 0; i < rest.length; ++i) {
        for (let j = 0; j < keys.length; ++j) {
            const propertyValues = keys[i][j];
            const data = rest[i][propertyValues];

            if (i === 0) {
                cellArray.push(
                    <TableHead>
                        <TableHeaderCell text={data} />
                    </TableHead>
                );
            }
        }
    }
 */