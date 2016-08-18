import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import { PageContent } from './Components/PageContent';
import { Login } from './Components/Login';
import { PageSetting } from './Components/PageSetting';
import './index.css';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="page" component={PageContent} />
    <Route path="login" component={Login} />
    <Route path="setting" component={PageSetting} />
  </Router>,
  document.getElementById('root')
);
