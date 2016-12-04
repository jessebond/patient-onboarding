import React, { Component } from 'react'
import Step from './Step'
import TextField from './fields/TextField'
import DoBField from './fields/DoBField'

class StepPersonal extends Step {
  constructor(props){
    super(props)

    this.state = {
      data: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        dob: '',
        phoneNumber: ''
      }
    }
    
    this.onUpdate = this.onUpdate.bind(this)
  }

  onUpdate(field, value){
    let state = Object.assign({}, this.state)
    state.data[field] = value
    this.setState = {state: state}
    console.log(field, value, state)
  }

  renderBody() {
    return <div>
      <h1>Personal Information</h1>
      <div>
        <TextField 
          text="Email"
          onUpdate={this.onUpdate.bind(this, 'email')}
          placeholder='great@teeth.com'
          className=''
          regex={EMAIL_REGEX}
        />
        <TextField 
          text="Password"
          onUpdate={this.onUpdate.bind(this, 'password')}
          placeholder='qwerty12'
          className=''
        />
        <TextField 
          text="First name"
          onUpdate={this.onUpdate.bind(this, 'firstName')}
          placeholder='John'
          className=''
          regex={NAME_REGEX}
        />
        <TextField 
          text="Last Name"
          onUpdate={this.onUpdate.bind(this, 'lastName')}
          placeholder='Smith'
          className=''
          regex={NAME_REGEX}
        />
        <DoBField 
          text="Date of birth"
          onUpdate={this.onUpdate.bind(this, 'dob')}
          placeholder='MM/DD/YYYY'
          className=''
          regex={DOB_REGEX}
        />
        <TextField 
          text="Phone number"
          onUpdate={this.onUpdate.bind(this, 'phoneNumber')}
          placeholder='555-123-4567'
          className=''
        />
      </div>
    </div>
  }
}

export default StepPersonal