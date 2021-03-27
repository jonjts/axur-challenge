import React, { ElementType } from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
    RouteProps,
} from 'react-router-dom';

import DefaultLayout from '../layouts/Default';

import Inspections from '../pages/Inspections';
import NewInspection from '../pages/Inspections/New';

const AppRoute: React.FC<RouteProps> = ({ component, ...rest }) => {
    const Component = component as ElementType;

    return (
        <Route
            {...rest}
            render={props => (
                <DefaultLayout>
                    <Component {...props} />
                </DefaultLayout>
            )}
        />
    );
};


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <AppRoute path="/inspections" exact component={Inspections} />
            <AppRoute path="/inspections/new" exact component={NewInspection} />
            <Redirect from="/" to="/inspections" />
        </Switch>
    </BrowserRouter>
);

export default Routes;