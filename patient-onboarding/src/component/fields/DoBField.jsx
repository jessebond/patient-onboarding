import TextField from './TextField'

class DoBField extends TextField {
  handleChange(e){
    let value = e.target.value
    const valid = this.validate(value)

    if(value.length === 2 || value.length === 5){
      value += '/'
    } else if(value.length === 3 || value.length === 6){
      value = value.substring(0, value.length -1)
    }

    this.props.onUpdate(value)
  }
}

export default DoBField