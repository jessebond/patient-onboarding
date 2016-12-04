import React, { Component } from 'react'

class TextField extends Component {
  constructor(props){
    super(props)

    this.state = {
      value: '',
      valid: false,
      error: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.validate = this.validate.bind(this)
  }

  handleChange(e){
    const value = e.target.value
    const valid = this.validate(value)

    this.setState({
      value: value,
      valid: valid
    })

    this.props.onUpdate(valid ? value : null)
  }

  validate(value){
    if(typeof this.props.regex !== 'undefined'){
      return this.props.regex.test(value)
    }

    return true
  }

  render(){
    const {placeholder, className, text} = this.props
    const {value, valid, error} = this.state
    const errors = valid ? null : <p>{error}</p>

    return <div>
      <p>{text}</p>
      <input
        className={className}
        type="text"
        value={value}
        placeholder={placeholder ? placeholder : ''}
        onChange={this.handleChange}
      />
      {errors}
    </div>
  }
}

export default TextField