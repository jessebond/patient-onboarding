import React from 'react'
import { Link } from 'react-router'
import Step from './Step'
import AppStore from '../store/AppStore'

import {
  EmailField, 
  PasswordField, 
  DoBField, 
  FirstNameField, 
  LastNameField,
  PhoneNumberField
} from './fields/TextField'

class StepPersonal extends Step {
  constructor(props){
    super(props)

    this.renderBody = this.renderBody.bind(this)
    this.renderFooter = this.renderFooter.bind(this)
    this.handleNextStep = this.handleNextStep.bind(this) 
  }

  handleNextStep(){
    const personal = this.props.data
    let validData = true
    for(let prop in personal){
      validData = validData && personal[prop].valid
    }

    if(validData || true){
      AppStore.nextStep()
    }
  }

  renderBody() {
    const personal = this.props.data
    console.log('props', this.props)

    return <div>
      <h1>Personal Information</h1>
      <div>
        <EmailField field={personal.email} />
        <PasswordField field={personal.password} />
        <FirstNameField field={personal.firstName} />
        <LastNameField field={personal.lastName} />
        <DoBField field={personal.dob} />
        <PhoneNumberField field={personal.phoneNumber} />
      </div>
    </div>
  }

  renderFooter(){
    return <div onClick={this.handleNextStep}>Next Step</div>
  }
}

export default StepPersonal