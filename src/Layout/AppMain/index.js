import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import React, { Suspense, lazy, Fragment } from 'react';

import { ToastContainer } from 'react-toastify';

import Login from '../../DemoPages/Login';

const Dashboards = lazy(() => import('../../DemoPages/Dashboards'));
const Mechanic = lazy(() => import('../../DemoPages/Mechanic'));

const Widgets = lazy(() => import('../../DemoPages/Widgets'));
const Elements = lazy(() => import('../../DemoPages/Elements'));
const Components = lazy(() => import('../../DemoPages/Components'));
const Charts = lazy(() => import('../../DemoPages/Charts'));
const Forms = lazy(() => import('../../DemoPages/Forms'));
const Tables = lazy(() => import('../../DemoPages/Tables'));

const AppMain = () => {

    return (
        <Fragment>
            {/* LOGIN */}
            <Suspense fallback={
                <div></div>
            }>
                <Route path="/login" component={Login} />
            </Suspense>
            {/* Components */}
            <Suspense fallback={
                <div></div>
            }>
                <Route path="/components" component={Components} />
            </Suspense>

            {/*  Mechanic Accept View */}
            <Suspense fallback={
                <div></div>
            }>
                <Route path="/mechanic" component={Mechanic} />
            </Suspense>
            {/* Forms*/}

            <Suspense fallback={
                <div></div>
            }>
                <Route path="/forms" component={Forms} />
            </Suspense>
            {/* Charts */}

            <Suspense fallback={
                <div></div>
            }>
                <Route path="/charts" component={Charts} />
            </Suspense>
            {/* Tables */}

            <Suspense fallback={
                <div></div>
            }>
                <Route path="/tables" component={Tables} />
            </Suspense>
            {/* Elements */}

            <Suspense fallback={
                <div></div>
            }>
                <Route path="/elements" component={Elements} />
            </Suspense>
            {/* Dashboard Widgets */}


            <Suspense fallback={
                <div></div>
            }>
                <Route path="/widgets" component={Widgets} />
            </Suspense>
            {/* Dashboards */}

            <Suspense fallback={
                <div></div>
            }>
                <Route path="/dashboards" component={Dashboards} />
            </Suspense>

            <Route exact path="/" render={() => (
                <Redirect to="/dashboards/basic" />
            )} />
            <ToastContainer />

        </Fragment>
    )
};

export default AppMain;