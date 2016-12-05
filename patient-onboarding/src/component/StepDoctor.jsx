import React from 'react'
import Step from './Step'
import DoctorSelect from './fields/DoctorSelect'

class StepDoctor extends Step {


  renderBody() {
    return <div>
      <h1>Select Your Doctor</h1>
      <DoctorSelect selection={this.props.data} />
    </div>
  }
}

export default StepDoctor