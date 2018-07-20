import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
import DashboardPage from '../components/dashboard';
import SettingsPage from '../components/settings-page';
import UsersPage from '../components/users-page';
import UsersAddPage from "../components/users-add-page";
import NotFoundPage from '../components/not-found';
import LoginPage from '../components/login';
import PrivateRoute from "./private-route";
import PublicRoute from "./public-route";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>    
                <PrivateRoute path="/dashboard" component={DashboardPage}/>
                <PrivateRoute path="/settings" component={SettingsPage}/>
                <PrivateRoute path="/users" component={UsersPage} exact={true}/>
                <PrivateRoute path="/users/add" component={UsersAddPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;