import React, { Component } from 'react'

export const StepConst = {
  PERSONAL: 0,
  IMAGE: 1,
  HISTORY: 2,
  GOALS: 3,
  DOCTOR: 4,
  INSURANCE: 5,
  SUBMIT: 6
}

class Step extends Component {
  constructor(props){
    super(props)
  }

  renderBody() { return null }
  validate() { return true }

  render(){
    return <div className="step-wrapper">
      {this.renderBody()}
    </div>
  }
}

export default Step