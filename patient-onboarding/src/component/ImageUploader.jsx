import React, { Component } from 'react'
import AppStore from '../store/AppStore'
import '../assets/css/bootstrap.css'

export default class ImageUploader extends Component {
  constructor(props){
    super(props)

    this.state = {
      file: '',
      imagePreviewUrl: ''
    }

    this.handleImageChange = this.handleImageChange.bind(this)
  }

  handleImageChange(e){
    e.preventDefault()
    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }

    reader.readAsDataURL(file)
    AppStore.updateImage(file)
  }

  render(){
    const {imagePreviewUrl} = this.state
    const preview = imagePreviewUrl ? <img src={imagePreviewUrl} alt="Damn, looking good." className="img-thumbnail profileImage" /> :
      <div>Please select an image</div>

    return <div>
      <input type="file" onChange={this.handleImageChange} />
      {preview}
    </div>
  }
}