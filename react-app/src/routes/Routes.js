import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../constants/routesNames';
import TodoContainer from '../pages/TodoPage/containers/TodoPageContainer';
import HomePage from '../pages/HomePage/HomePage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route exact path={ROUTES.TODO_PAGE} component={TodoContainer} />
            <Redirect from='*' to='/' />
        </Switch>
    )
}

export default Routes;
