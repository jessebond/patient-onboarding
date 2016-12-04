import React, { Component } from 'react'

class TextField extends Component {
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
    const errors = field.error ? null : <p>{field.error}</p>

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
    </div>
  }
}

export default TextField