import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Stores from './pages/Stores';
import Users from './pages/Users';
import Reports from './pages/Reports';
import Header from './components/Header';

const Routes = () => (
    <>
        <Header/>
        <Switch>
            <Route path="/stores" component={Stores} />
            <Route path="/users" component={Users} />
            <Route path="/reports" component={Reports} />
        </Switch>
    </>
);

export default Routes;