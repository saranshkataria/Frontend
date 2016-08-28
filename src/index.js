import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
// Styles and Components
import './index.css';
import Login from './components/login';
import Events from './components/events';
import NotFound from './pages/404';



const appRoutes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login}></Route>
    <Route path="events" component={Events}>

    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

ReactDOM.render(
  appRoutes,
  document.getElementById('root')
);
