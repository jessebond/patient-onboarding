import React, { Component } from 'react'
import AppStore from '../../store/AppStore'

export const InsuranceOptions = {
  NONE: 0,
  BLUE_CROSS: 'Blue Cross',
  KAISER: 'Kaiser',
  DELTA_DENTAL: 'Delta Dental',
  HUMANA: 'Humana',
  NO_INSURANCE: 'No dental insurance'
}

export default class InsuranceSelection extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(value){
    AppStore.updateInsurance(value)
  }

  render(){
    return <ul>
      <li onClick={this.handleClick.bind(this, InsuranceOptions.NO_INSURANCE)}>
        <img src=""/>
        <p>{InsuranceOptions.NO_INSURANCE}</p>
      </li>
      <li onClick={this.handleClick.bind(this, InsuranceOptions.BLUE_CROSS)}>
        <img src=""/>
        <p>{InsuranceOptions.BLUE_CROSS}</p>
      </li>
      <li onClick={this.handleClick.bind(this, InsuranceOptions.KAISER)}>
        <img src=""/>
        <p>{InsuranceOptions.KAISER}</p>
      </li>
      <li onClick={this.handleClick.bind(this, InsuranceOptions.DELTA_DENTAL)}>
        <img src=""/>
        <p>{InsuranceOptions.DELTA_DENTAL}</p>
      </li>
      <li onClick={this.handleClick.bind(this, InsuranceOptions.HUMANA)}>
        <img src=""/>
        <p>{InsuranceOptions.HUMANA}</p>
      </li>
      <li>{this.props.selection}</li>
    </ul>
  }
}