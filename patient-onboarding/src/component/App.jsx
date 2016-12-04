import React, { Component } from 'react'
import '../App.css'
import StepPersonal from './StepPersonal'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      state: null
    }
  }

  render() {
    return (
      <div className="app">
        <div className="nav">
          <h2>CompanyName Patient Signup</h2>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default App