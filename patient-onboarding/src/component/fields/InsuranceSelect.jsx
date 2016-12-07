import React, { Component } from 'react'
import AppStore from '../../store/AppStore'
import insurance from '../../assets/image/insurance.png'
import '../../App.css'

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
    const {selected} = this.props

    return <div>
      <div className="col-md-2" onClick={this.handleClick.bind(this, InsuranceOptions.NO_INSURANCE)}>
        <img src={insurance} className={selected === InsuranceOptions.NO_INSURANCE ? "selected" : ""}/>
        <p>{InsuranceOptions.NO_INSURANCE}</p>
      </div>
      <div className="col-md-2" onClick={this.handleClick.bind(this, InsuranceOptions.BLUE_CROSS)}>
        <img src={insurance} className={selected === InsuranceOptions.BLUE_CROSS ? "selected" : ""}/>
        <p>{InsuranceOptions.BLUE_CROSS}</p>
      </div>
      <div className="col-md-2" onClick={this.handleClick.bind(this, InsuranceOptions.KAISER)}>
        <img src={insurance} className={selected === InsuranceOptions.KAISER ? "selected" : ""}/>
        <p>{InsuranceOptions.KAISER}</p>
      </div>
      <div className="col-md-2" onClick={this.handleClick.bind(this, InsuranceOptions.DELTA_DENTAL)}>
        <img src={insurance} className={selected === InsuranceOptions.DELTA_DENTAL ? "selected" : ""}/>
        <p>{InsuranceOptions.DELTA_DENTAL}</p>
      </div>
      <div className="col-md-2" onClick={this.handleClick.bind(this, InsuranceOptions.HUMANA)}>
        <img src={insurance} className={selected === InsuranceOptions.HUMANA ? "selected" : ""}/>
        <p>{InsuranceOptions.HUMANA}</p>
      </div>
    </div>
  }
}