import React, { Component } from 'react'
import AppStore, {AppStoreClass} from '../store/AppStore'

class Step extends Component {
  constructor(props){
    super(props)
  }

  handleNextStep() {
    AppStore.nextStep()
  }
  handlePrevStep() {
    AppStore.prevStep()
  }
  renderBody() { return null }
  renderFooter() {
    return <div>
      <div onClick={this.handlePrevStep}>Previous Step</div>
      <div onClick={this.handleNextStep}>Next Step</div>
    </div>
  }

  render(){
    return <div className="step-wrapper">
      {this.renderBody()}
      {this.renderFooter()}
    </div>
  }
}

export default Step