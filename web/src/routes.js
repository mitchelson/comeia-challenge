import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Stores from './pages/Stores';
import NewStore from './pages/Stores/NewStore';
import NewTicket from './pages/Stores/NewTicket';
import Users from './pages/Users';
import NewUsers from './pages/Users/NewUsers';
import Reports from './pages/Reports';
import Header from './components/Header';

const Routes = () => (
    <>
        <Header />
        <Switch>
            <Route exact path="/stores" component={Stores} />
            <Route exact path="/stores/newstore" component={NewStore} />
            <Route exact path="/stores/newticket" component={NewTicket} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/newusers" component={NewUsers} />
            <Route exact path="/reports" component={Reports} />
        </Switch>
    </>
);

export default Routes;