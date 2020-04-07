import React, { Fragment } from 'react';
import { Route,Redirect } from 'react-router-dom';

import Auth from "../../config/Auth";
// DASHBOARDS

import BasicDashboard from './Basic/';

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';

const Dashboards = ({ match }) => {
    if (!sessionStorage.getItem('is_login')) {
     return <Redirect to='/login' />
    }
    return (
        <Fragment>
            <AppHeader />
            <div className="app-main">
                <AppSidebar />
                <div className="app-main__outer">
                    <div className="app-main__inner">
                        <Route path={`${match.url}/basic`} component={BasicDashboard} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Dashboards;