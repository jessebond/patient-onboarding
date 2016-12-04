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

    this.setState({
      value: value,
      valid: valid
    })

    this.props.onUpdate(valid ? value : null)
  }

  validate(value){
    const matches = value.match(this.props.regex)

    if(matches.length < 4){
      return false
    }

    if(matches[1]

    return true
  }
}

export default DoBField