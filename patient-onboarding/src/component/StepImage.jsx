import React from 'react'
import Step from './Step'
import ImageUploader from './ImageUploader'
import AppStore from '../store/AppStore'

export default class StepImage extends Step {
  renderBody() {
    return <div>
      <h1>Select an image</h1>
      <ImageUploader />
    </div>
  }
}
