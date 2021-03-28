import React, { ElementType } from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
    RouteProps,
} from 'react-router-dom';

import DefaultLayout from '../layouts/Default';

import Home from '../pages/Home'
import ShowInspections from '../pages/Inspections/Show';
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
            <AppRoute path='/home' exact component={Home} />
            <AppRoute path='/inspections/show/:id' exact component={ShowInspections} />
            <AppRoute path='/inspections/show/' exact component={ShowInspections} />
            <AppRoute path='/inspections/new' exact component={NewInspection} />
            <Redirect from='/' to='/home' />
        </Switch>
    </BrowserRouter>
);

export default Routes;