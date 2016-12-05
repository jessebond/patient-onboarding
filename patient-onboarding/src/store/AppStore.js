import { HistoryOptions } from '../component/fields/HistorySelection'
import { GoalOptions } from '../component/fields/GoalSelect'
import { DoctorOptions } from '../component/fields/DoctorSelect'
import { InsuranceOptions } from '../component/fields/InsuranceSelect'

export const Steps = {
  PERSONAL: 0,
  IMAGE: 1,
  HISTORY: 2,
  GOALS: 3,
  DOCTOR: 4,
  INSURANCE: 5,
  SUBMIT: 6
}

export class AppStoreClass {
  constructor(){
    console.log('steps', Steps)
    this.state = {
      step: Steps.PERSONAL,
      personal: {
        email: this.getDefaultField(),
        password: this.getDefaultField(),
        firstName: this.getDefaultField(),
        lastName: this.getDefaultField(),
        dob: this.getDefaultField(),
        phoneNumber: this.getDefaultField()
      },
      image: '',
      history: {
        wisdomTeeth: HistoryOptions.NO,
        crowns: HistoryOptions.NO,
        looseTeeth: HistoryOptions.NO,
        decayingTeeth: HistoryOptions.NO,
      },
      goal: GoalOptions.NONE,
      doctor: DoctorOptions.NONE,
      insurance: InsuranceOptions.NONE
    }
  }

  getDefaultField(){
    return {
      value: '',
      valid: false,
      error: ''
    }
  }

  nextStep(){
    this.state.step++
    this.onUpdate()
  }

  prevStep(){
    this.state.step--
    this.onUpdate()
  }

  updateImage(file){
    this.state.image = file
    this.onUpdate()
  }

  updatePersonalField(fieldname, value){
    let field = Object.assign({}, this.state.personal[fieldname])
    field.value = value
    this.state.personal[fieldname] = InformationValidator.validateField(fieldname, field)
    
    this.onUpdate()
  }

  updateHistory(fieldname, value){
    let history = Object.assign({}, this.state.history)
    history[fieldname] = value
    this.state.history = history

    this.onUpdate()
  }

  updateGoal(value){
    this.state.goal = value
    this.onUpdate()
  }

  updateDoctor(value){
    this.state.doctor = value
    this.onUpdate()
  }

  updateInsurance(value){
    this.state.insurance = value
    this.onUpdate()
  }

  getState(){
    return this.state
  }

  onUpdate() {
    window.dispatchEvent(new Event('StoreUpdate'))
  }
}

let AppStore = new AppStoreClass()
export default AppStore

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^[\w!@#$%^&\*\(\)\-_=+]{10,}$/
const NAME_REGEX = /^[a-zA-Z0-9]+$/
const DOB_REGEX = /^(\d{2})\/(\d{2})\/(\d{4})$/
const PHONE_NUMBER_REGEX = /^(1[-\. ])?\(?\d{3}\)?[-\. ]?\d{3}[-\. ]?\d{4}$/

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
    field.error = field.valid ? null : "Invalid email"
    
    return field
  }

  static validatePassword(field){
    if(field.value.length < 10){
      field.error = "Password must be atleast 10 characters"
      field.info = "Password strength: Weak"
      field.valid = false
      return field
    }
    if(!PASSWORD_REGEX.test(field.value)){
      field.error = "Password must be atleast 10 characters"
      field.valid = false
      field.info = "Password strength: Weak"

      return field
    }

    const hasLetter = /[a-zA-Z]+/.test(field.value)
    const hasNumber = /\d+/.test(field.value)
    const hasSymbol = /[!@#$%^&\*\(\)\-_=+]+/.test(field.value)
    if(hasLetter && hasNumber && hasSymbol){
      field.info = "Password strength: Strong"
      field.valid = true
      field.error = null
      return field
    }

    if((hasLetter && hasNumber) || (hasLetter && hasSymbol) || (hasNumber || hasSymbol)){
      field.info = "Password strength: Medium"
      field.valid = true
      field.error = null
      return field
    }

    field.valid = false
    field.error = "Password too weak. Try adding aleast one number or a symbol"
    field.info = "Password strength: Weak"
    
    return field
  }

  static validateName(field){
    field.valid = NAME_REGEX.test(field.value)
    field.error = field.valid ? null : "Invalid name"
    
    return field
  }

  static validateDoB(field){    
    if(!DOB_REGEX.test(field.value)){
      field.valid = false
      field.error = 'Bad date of birth'

      return field
    }

    let dob = new Date(field.value.replace(DOB_REGEX, '$3-$2-$1'));
    const age = Date.now() - dob.getTime()
    const ageInYears = age / 1000 / 60 / 60 / 24 /365
    console.log('age', age, ageInYears)
    if(ageInYears < 18){
      field.valid = false
      field.error = 'You must be age 18 or older'

      return field
    }

    field.valid = true
    field.error = null
    return field
  }

  static validatePhoneNumber(field){
    field.valid = PHONE_NUMBER_REGEX.test(field.value)
    field.error = field.valid ? null : "Invalid phone number"
    
    return field
  }
}