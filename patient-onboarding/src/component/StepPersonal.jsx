import React, { Component } from 'react'
import Step from './Step'
import {
  EmailField, 
  PasswordField, 
  DoBField, 
  FirstNameField, 
  LastNameField,
  PhoneNumberField
} from './fields/TextField'
import AppActions from '../actions/AppActions'

class StepPersonal extends Step {
  constructor(props){
    super(props)
  }

  renderBody() {
    const {personal} = this.state.data

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
}

export default StepPersonal