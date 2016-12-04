
class AppStoreClass {
  constructor(){
    this.state = {
      personal: {
        email: {
          value: '',
          valid: false,
          error: ''
        },
        password: {
          value: '',
          valid: false,
          error: ''
        },
        firstName: {
          value: '',
          valid: false,
          error: ''
        },
        lastName: {
          value: '',
          valid: false,
          error: ''
        },
        dob: {
          value: '',
          valid: false,
          error: ''
        },
        phoneNumber: {
          value: '',
          valid: false,
          error: ''
        }
      }
    }
  }

  updatePersonalField(fieldname, value){
    let field = Object.assign({}, this.state.personal[fieldname])
    field.value = value
    this.state.personal[fieldname] = InformationValidator.validateField(fieldname, field)

    this.onUpdate()
  }

  onUpdate() {
    window.dispatchEvent(new Event('storeUpdate'))
  }
}

let AppStore = new AppStoreClass()
export default AppStore

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^.*$/
const NAME_REGEX = /^[a-zA-Z0-9]+$/
const DOB_REGEX = /^(\d{2})\/(\d{2})\/(\d{4})$/
const PHONE_NUMBER_REGEX = /^.*$/
const CURRENT_YEAR = 2016

class InformationValidator {
  static validateField(fieldname, field){
    switch(fieldname){
      case 'email':
        return InformationValidator.validateEmail(field)
      case 'password':
        return InformationValidator.validatePassword(field)
      case 'firstName':
        return InformationValidator.validateName(field)
      case 'lastName':
        return InformationValidator.validateName(field)
      case 'dob':
        return InformationValidator.validateDoB(field)
      case 'phoneNumber':
        return InformationValidator.validatePhoneNumber(field)
      default:
        return field  
    }
  }

  static validateEmail(field){
    field.valid = EMAIL_REGEX.test(field.value)
    if(!field.valid){
      field.error = "Invalid email"
    }
    
    return field
  }

  static validatePassword(field){
    field.valid = PASSWORD_REGEX.test(field.value)
    if(!field.valid){
      field.error = "bad pass"
    }
    
    return field
  }

  static validateName(field){
    field.valid = NAME_REGEX.test(field.value)
    if(!field.valid){
      field.error = "bad pass"
    }
    
    return field
  }

  static validateDoB(field){    
    if(DOB_REGEX.test(field.value)){
      field.valid = false
      field.error = 'Bad date of birth'

      return field
    }

    let dob = new Date(field.value.replace(DOB_REGEX, '$3-$2-$1'));
    let ageInYears = (Date.now() - dob.getTime()) / 1000 / 60 / 60 / 24 /365
    if(ageInYears < 18){
      field.valid = false
      field.error = 'You must be age 18 or older'

      return field
    }

    field.valid = true
    return field
  }

  static validatePhoneNumber(field){
    field.valid = PHONE_NUMBER_REGEX.test(field.value)
    if(!field.valid){
      field.error = "Invalid phone number"
    }
    
    return field
  }
}