import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import './App.css';
import Routes from "./routes";

const App = () => (
  //<PrivateRoute path="/" component={Routes} /> COLOCAR COMO QUANDO FINALIZAR
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/" component={Routes} />
    </Switch>
  </BrowserRouter>
);

export default App;