import React from 'react'
import Step from './Step'
import '../assets/css/bootstrap.css'

class StepSubmit extends Step {
  renderBody() {
    const { personal, history, goal, doctor, insurance } = this.props.data

    return <div>
      <h1>Submit Information</h1>
      <dl>
        <dt>Email</dt>
        <dd>{personal.email.value}</dd>
      </dl>
      <dl>
        <dt>First Name</dt>
        <dd>{personal.firstName.value}</dd>
      </dl>
      <dl>
        <dt>Last Name</dt>
        <dd>{personal.lastName.value}</dd>
      </dl>
      <dl>
        <dt>Date of Birth</dt>
        <dd>{personal.dob.value}</dd>
      </dl>
      <dl>
        <dt>Phone Number</dt>
        <dd>{personal.phoneNumber.value}</dd>
      </dl>
      <dl>
        <dt>Have you had your wisdom teeth removed?</dt>
        <dd>{history.wisdomTeeth}</dd>
      </dl>
      <dl>
        <dt>Do you have any crowns or fillings?</dt>
        <dd>{history.crowns}</dd>
      </dl>
      <dl>
        <dt>Do you have any loose teeth?</dt>
        <dd>{history.looseTeeth}</dd>
      </dl>
      <dl>
        <dt>Do you have any decaying teeth?</dt>
        <dd>{history.decayingTeeth}</dd>
      </dl>
      <dl>
        <dt>Goal</dt>
        <dd>{goal}</dd>
      </dl>
      <dl>
        <dt>Doctor</dt>
        <dd>{doctor}</dd>
      </dl>
      <dl>
        <dt>Insurance</dt>
        <dd>{insurance}</dd>
      </dl>
      
    </div>
  }
}

export default StepSubmit