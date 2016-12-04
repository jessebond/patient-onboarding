import React, { Component } from 'react'
import '../App.css'
import StepPersonal from './StepPersonal'

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="app">
        <div className="nav">
          <h2>CompanyName Patient Signup</h2>
        </div>
        {this.props.children || <StepPersonal />}
      </div>
    )
  }
}

export default App