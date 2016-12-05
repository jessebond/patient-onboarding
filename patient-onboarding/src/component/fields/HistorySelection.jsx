import React, { Component } from 'react'
import AppStore from '../../store/AppStore'

export const HistoryOptions = {
  YES: 'Yes',
  NO: 'No',
  UNSURE: 'Unsure'
}

export default class HistorySelection extends Component {
  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    const {handleChange, field} = this.props
    AppStore.updateHistory(field, e.target.value)
  }

  render(){
    return <div>
      <p>{this.props.text}</p>
      <select value={this.props.selection} onChange={this.handleChange}>
        <option value={HistoryOptions.YES}>{HistoryOptions.YES}</option>
        <option value={HistoryOptions.NO}>{HistoryOptions.NO}</option>
        <option value={HistoryOptions.UNSURE}>{HistoryOptions.UNSURE}</option>
      </select>
    </div>
  }
}