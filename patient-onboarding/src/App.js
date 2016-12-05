import React, { Component } from 'react'
import './App.css'
import StepPersonal from './component/StepPersonal'
import StepDoctor from './component/StepDoctor'
import StepGoals from './component/StepGoals'
import StepHistory from './component/StepHistory'
import StepImage from './component/StepImage'
import StepInsurance from './component/StepInsurance'
import StepSubmit from './component/StepSubmit'
import AppStore, { Steps } from './store/AppStore'

class App extends Component {
  constructor(props){
    super(props)

    this.state = AppStore.getState()

    this.onStoreUpdate = this.onStoreUpdate.bind(this)
    this.renderStep = this.renderStep.bind(this)
  }
  
  componentWillMount(){
    window.addEventListener('StoreUpdate', this.onStoreUpdate)
  }

  componentWillUnMount(){
    window.removeEventListener('StoreUpdate', this.onStoreUpdate)
  }

  onStoreUpdate(){
    this.setState(AppStore.getState())
  }

  renderStep(){
    console.log('state', this.state)
    switch(this.state.step){
      case Steps.PERSONAL:
        return <StepPersonal data={this.state.personal} />
      case Steps.IMAGE:
        return <StepImage data={this.state.image} />
      case Steps.HISTORY:
        return <StepHistory data={this.state.history} />
      case Steps.GOALS:
        return <StepGoals data={this.state.goals} />
      case Steps.DOCTOR:
        return <StepDoctor data={this.state.doctor} />
      case Steps.INSURANCE:
        return <StepInsurance data={this.state.insurance} />
      case Steps.SUBMIT:
        return <StepSubmit data={null} />
      default:
        return <div>Bad step</div>
    }
  }

  render() {
    return (
      <div className="app">
        <div className="nav">
          <h2>CompanyName Patient Signup</h2>
        </div>
        {this.renderStep()}
      </div>
    )
  }
}

export default App