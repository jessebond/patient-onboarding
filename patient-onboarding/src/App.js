import React, { Component } from 'react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import './App.css'
import StepPersonal from './component/StepPersonal'
import App from './component/App'

const Routes = (<Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="personal" component={StepPersonal} />
    </Route>
  </Router>
)

export default Routes
