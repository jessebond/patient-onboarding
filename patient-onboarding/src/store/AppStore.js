import { HistoryOptions } from '../component/fields/HistorySelection'
import { GoalOptions } from '../component/fields/GoalSelect'
import { DoctorOptions } from '../component/fields/DoctorSelect'
import { InsuranceOptions } from '../component/fields/InsuranceSelect'
import InformationValidator from './InformationValidator'

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
      history: this.getDefaultHistory(),
      goal: GoalOptions ? GoalOptions.NONE : null,
      doctor: DoctorOptions ? DoctorOptions.NONE : null,
      insurance: InsuranceOptions ? InsuranceOptions.NONE : null
    }
  }

  getDefaultField(){
    return {
      value: '',
      valid: null,
      error: ''
    }
  }

  getDefaultHistory(){
    return HistoryOptions ? {
        wisdomTeeth: HistoryOptions.NO,
        crowns: HistoryOptions.NO,
        looseTeeth: HistoryOptions.NO,
        decayingTeeth: HistoryOptions.NO,
      } : null
  }

  nextStep(){
    let valid = true
    switch(this.state.step){
      case Steps.PERSONAL:
        for(let prop in this.state.personal){
          valid = valid && this.state.personal[prop].valid
        }
        break
      case Steps.IMAGE:
        valid = this.state.image !== ''
        break
      case Steps.GOALS:
        valid = this.state.goal !== GoalOptions.NONE
        break
      case Steps.DOCTOR:
        valid = this.state.doctor !== DoctorOptions.NONE
        break
      case Steps.INSURANCE:
        valid = this.state.goal !== InsuranceOptions.NONE
        break
      case Steps.HISTORY:
      default:
        valid = true
        break
    }

    if(valid){
      this.state.step++
      this.onUpdate()
    }
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
