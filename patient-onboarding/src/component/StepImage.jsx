import React from 'react'
import { Link } from 'react-router'
import Step from './Step'
import ImageUploader from './ImageUploader'
import AppStore from '../store/AppStore'

export default class StepImage extends Step {
  constructor(props){
    super(props)

    this.renderBody = this.renderBody.bind(this)
    this.renderFooter = this.renderFooter.bind(this)
    this.handleNextStep = this.handleNextStep.bind(this) 
  }

  handleNextStep(){
    console.log('image handle next', this.props.data)
    if(this.props.data !== '' || true){
      AppStore.nextStep()
    }
  }

  renderBody() {
    return <div>
      <h1>Select an image</h1>
      <div>
        <ImageUploader />
      </div>
    </div>
  }
}
