import React from 'react'
import Step from './Step'
import InsuranceSelect from './fields/InsuranceSelect'

class StepInsurance extends Step {
  renderBody() {
    return <div>
      <h1>Insurance Information</h1>
      <InsuranceSelect selection={this.props.data} />
    </div>
  }
}

export default StepInsurance