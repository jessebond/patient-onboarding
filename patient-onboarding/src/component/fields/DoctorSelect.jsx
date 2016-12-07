import React, { Component } from 'react'
import AppStore from '../../store/AppStore'
import doctor from '../../assets/image/doctor.png'

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
    const {selected} = this.props

    return <div>
      <div className="col-md-2" onClick={this.handleClick.bind(this, DoctorOptions.PERSON)}>
        <img src={doctor} className={selected === DoctorOptions.PERSON ? "selected" : ""}/>
        <p>{DoctorOptions.PERSON}</p>
      </div>
      <div className="col-md-2" onClick={this.handleClick.bind(this, DoctorOptions.GOOD)}>
        <img src={doctor} className={selected === DoctorOptions.GOOD ? "selected" : ""}/>
        <p>{DoctorOptions.GOOD}</p>
      </div>
      <div className="col-md-2" onClick={this.handleClick.bind(this, DoctorOptions.BAD)}>
        <img src={doctor} className={selected === DoctorOptions.BAD ? "selected" : ""}/>
        <p>{DoctorOptions.BAD}</p>
      </div>
      <div className="col-md-2" onClick={this.handleClick.bind(this, DoctorOptions.SMILES)}>
        <img src={doctor} className={selected === DoctorOptions.SMILES ? "selected" : ""}/>
        <p>{DoctorOptions.SMILES}</p>
      </div>
      <div className="col-md-2" onClick={this.handleClick.bind(this, DoctorOptions.FROWNS)}>
        <img src={doctor} className={selected === DoctorOptions.FROWNS ? "selected" : ""}/>
        <p>{DoctorOptions.FROWNS}</p>
      </div>
    </div>
  }
}