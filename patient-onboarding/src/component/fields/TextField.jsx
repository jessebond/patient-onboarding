import React, { Component } from 'react'
import AppStore from '../../store/AppStore'

export class TextField extends Component {
  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    const value = e.target.value

    this.props.onUpdate(value)
  }

  render(){
    const {placeholder, className, text, field} = this.props
    const errors = field.error ? <p>{field.error}</p> : null
    const infos = field.info ? <p>{field.info}</p> : null
    return <div>
      <p>{text}</p>
      <input
        className={className}
        type="text"
        value={field.value}
        placeholder={placeholder ? placeholder : ''}
        onChange={this.handleChange}
      />
      {errors}
      {infos}
    </div>
  }
}


export class EmailField extends Component {
  onUpdate(value){
    AppStore.updatePersonalField('email', value)
  }

  render(){
    return <TextField 
      text="Email"
      onUpdate={this.onUpdate}
      placeholder='great@teeth.com'
      className=''
      field={this.props.field}
    />
  }
}


export class PasswordField extends Component {
  onUpdate(value){
    AppStore.updatePersonalField('password', value)
  }

  render(){
    return <TextField 
      text="Password"
      onUpdate={this.onUpdate}
      placeholder='qwerty12'
      className=''
      field={this.props.field}
    />
  }
}


export class DoBField extends Component {
  onUpdate(value){
    AppStore.updatePersonalField('dob', value)
  }

  handleChange(e){
    let value = e.target.value
    const valid = this.validate(value)

    if(value.length === 2 || value.length === 5){
      value += '/'
    } else if(value.length === 3 || value.length === 6){
      value = value.substring(0, value.length -1)
    }

    this.props.onUpdate(value)
  }

  render(){
    return <TextField 
      text="Date of birth"
      onUpdate={this.onUpdate}
      placeholder='MM/DD/YYYY'
      className=''
      field={this.props.field}
    />
  }
}

export class FirstNameField extends Component {
  onUpdate(value){
    AppStore.updatePersonalField('firstName', value)
  }

  render(){
    return <TextField 
      text="First Name"
      onUpdate={this.onUpdate}
      placeholder='John'
      className=''
      field={this.props.field}
    />
  }
}

export class LastNameField extends Component {
  onUpdate(value){
    AppStore.updatePersonalField('lastName', value)
  }

  render(){
    return <TextField 
      text="Last Name"
      onUpdate={this.onUpdate}
      placeholder='Smith'
      className=''
      field={this.props.field}
    />
  }
}

export class PhoneNumberField extends Component {
  onUpdate(value){
    AppStore.updatePersonalField('phoneNumber', value)
  }

  render(){
    return <TextField 
      text="Phone Number"
      onUpdate={this.onUpdate}
      placeholder='555-123-4567'
      className=''
      field={this.props.field}
    />
  }
}

