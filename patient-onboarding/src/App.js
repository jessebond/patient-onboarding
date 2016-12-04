import React, { Component } from 'react'
import { Router, Route, Redirect, Link, browserHistory } from 'react-router'
import './App.css'
import StepPersonal from './component/StepPersonal'
import AppComponent from './component/App'
import AppStore, {AppStoreClass} from './store/AppStore'

class App extends Component {
  render(){
    return <Router history={browserHistory}>
      <Route path="/" component={AppComponent}>
        <Route path='personal' component={StepPersonal} />
      </Route>
    </Router>
  }
}

export default App
