import React, { Component } from 'react'
import AppStore, { Steps } from '../store/AppStore'
import '../assets/css/bootstrap.css'

const handlePrev = () => {
  AppStore.prevStep()
}

const handleNext = () => {
  AppStore.nextStep()
}

const Footer = (props) => {
  const prevButton = (props.step === Steps.PERSONAL || props.step === Steps.SUBMIT) ? null : 
    <div className="btn btn-default" onClick={handlePrev}>Previous Step</div>
  const nextButton = (props.step === Steps.SUBMIT) ? null : 
    <div className="btn btn-default" onClick={handleNext}>Next Step</div>

  return <footer className="footer">
    <div className="container">
      {prevButton}
      {nextButton}
    </div>
  </footer>
}

export default Footer
