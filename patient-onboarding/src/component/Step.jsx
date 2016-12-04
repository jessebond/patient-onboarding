import React, { Component } from 'react'
import AppStore, {AppStoreClass} from '../store/AppStore'

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

    this.onStoreUpdate = this.onStoreUpdate.bind(this)
    this.state = {
      data: AppStore.getState()
    }
    this.renderBody = this.renderBody.bind(this)
    this.renderFooter = this.renderFooter.bind(this)
  }

  componentWillMount(){
    window.addEventListener(AppStoreClass.StoreUpdate, this.onStoreUpdate)
  }

  componentWillUnMount(){
    window.removeEventListener(AppStoreClass.StoreUpdate, this.onStoreUpdate)
  }

  onStoreUpdate(){
    this.setState({data: AppStore.getState()})
  }

  renderBody() { return null }
  renderFooter() { return null }

  render(){
    return <div className="step-wrapper">
      {this.renderBody()}
      {this.renderFooter()}
    </div>
  }
}

export default Step