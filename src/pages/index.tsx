import loadable from '@loadable/component';
import React, { ReactElement } from 'react';
import { Loading } from '../components/Loading';


const LoadableHome = loadable(() => import(/* webpackChunkName: "home" */ './Home'), {
   resolveComponent: (components) => components.Home,
   fallback: <Loading />, 
});

const Home = (): ReactElement => {
    return <LoadableHome />
};


const LoadableHowItWorks = loadable(() => import(/* webpackChunkName: "how-it-works",
    webpackPrefetch: 3 */ './HowItWorks'), {
    resolveComponent: (components) => components.HowItWorks,
    fallback: <Loading />,
});

const HowItWorks = (): ReactElement => {
    return <LoadableHowItWorks />
};


const LoadableNotFound = loadable(() => import(/* webpackChunkName: "not-found",
    webpackPrefetch: 0 */ './NotFound'), {
    resolveComponent: (components) => components.NotFound,
    fallback: <Loading />,
});

const NotFound = (): ReactElement => {
    return <LoadableNotFound />
};


const LoadablePractice = loadable(() => import(/* webpackChunkName: "practice",
    webpackPrefetch: 2 */ './Practice'), {
    resolveComponent: (components) => components.Practice,
    fallback: <Loading />,
});

const Practice = (): ReactElement => {
    return <LoadablePractice />
};


const LoadableResources = loadable(() => import(/* webpackChunkName: "resources",
     webpackPrefetch: 1 */ './Resources'), {
    resolveComponent: (components) => components.Resources,
    fallback: <Loading />,
});

const Resources = (): ReactElement => {
    return <LoadableResources />
};

export {
    Home,
    HowItWorks,
    Practice,
    Resources,
    NotFound,
};

