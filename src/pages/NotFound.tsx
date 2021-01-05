import React, { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = (): ReactElement => {
    return (
        <div>
            <h1>¯\_(ツ)_/¯</h1>
            <p>Sorry, the page
                <code> {useLocation().pathname} </code>
                does not exist.
            </p>
        </div>
    );
};

export {
    NotFound
};
