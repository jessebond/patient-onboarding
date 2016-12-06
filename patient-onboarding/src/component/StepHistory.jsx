import React from 'react'
import Step from './Step'
import HistorySelection from './fields/HistorySelection'
import '../assets/css/bootstrap.css'

export default class StepHistory extends Step {
  renderBody() {
    const history = this.props.data

    return <div>
      <h1>Dental History</h1>
      <div className="row">
        <HistorySelection 
          text="Have you had your wisdom teeth removed?" 
          selection={history.wisdomTeeth} 
          field="wisdomTeeth" 
        />
        <HistorySelection 
          text="Do you have any crowns or fillings?" 
          selection={history.crowns} 
          field="crowns" 
        />
        <HistorySelection 
          text="Do you have any loose teeth?" 
          selection={history.looseTeeth} 
          field="looseTeeth" 
        />
        <HistorySelection 
          text="Do you have any decaying teeth?" 
          selection={history.decayingTeeth} 
          field="decayingTeeth" 
        />
      </div>
    </div>
  }
}