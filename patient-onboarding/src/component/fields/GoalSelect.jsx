import React, { Component } from 'react'
import AppStore from '../../store/AppStore'

export const GoalOptions = {
  NONE: 0,
  MINOR: 1,
  MODERATE: 2,
  MAJOR: 3
}

export default class GoalSelection extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(value){
    AppStore.updateGoal(value)
  }

  render(){
    return <ul>
      <li onClick={this.handleClick.bind(this, GoalOptions.MINOR)}>
        <img src=""/>
        <p>Fix minor crowding</p>
      </li>
      <li onClick={this.handleClick.bind(this, GoalOptions.MODERATE)}>
        <img src=""/>
        <p>Fix moderate crowding</p>
      </li>
      <li onClick={this.handleClick.bind(this, GoalOptions.MAJOR)}>
        <img src=""/>
        <p>Fix major crowding</p>
      </li>
    </ul>
  }
}
