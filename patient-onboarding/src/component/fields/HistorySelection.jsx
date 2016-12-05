import React, { Component } from 'react'
import AppStore from '../../store/AppStore'

export const HistoryOptions = {
  NONE: 0,
  YES: 1,
  NO: 2,
  UNSURE: 3
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
        <option value={HistoryOptions.YES}>Yes</option>
        <option value={HistoryOptions.NO}>No</option>
        <option value={HistoryOptions.UNSURE}>Unsure</option>
      </select>
    </div>
  }
}