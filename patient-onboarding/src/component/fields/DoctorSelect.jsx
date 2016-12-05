import React, { Component } from 'react'
import AppStore from '../../store/AppStore'

export const DoctorOptions = {
  NONE: 0,
  PERSON: 'Dr. Person',
  GOOD: 'Dr. Good',
  BAD: 'Dr. Bad',
  SMILES: 'Dr. Smiles',
  FROWNS: 'Dr. Frowns'
}

export default class DoctorSelection extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(value){
    AppStore.updateDoctor(value)
  }

  render(){
    return <ul>
      <li onClick={this.handleClick.bind(this, DoctorOptions.PERSON)}>
        <img src=""/>
        <p>{DoctorOptions.PERSON}</p>
      </li>
      <li onClick={this.handleClick.bind(this, DoctorOptions.GOOD)}>
        <img src=""/>
        <p>{DoctorOptions.GOOD}</p>
      </li>
      <li onClick={this.handleClick.bind(this, DoctorOptions.BAD)}>
        <img src=""/>
        <p>{DoctorOptions.BAD}</p>
      </li>
      <li onClick={this.handleClick.bind(this, DoctorOptions.SMILES)}>
        <img src=""/>
        <p>{DoctorOptions.SMILES}</p>
      </li>
      <li onClick={this.handleClick.bind(this, DoctorOptions.FROWNS)}>
        <img src=""/>
        <p>{DoctorOptions.FROWNS}</p>
      </li>
      <li>{this.props.selection}</li>
    </ul>
  }
}