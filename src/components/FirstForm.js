import React, { useState } from 'react'

const FirstForm = ({ nextStep, summary, setSummary }) => {

  let [name, setName] = useState('')
  let [nameError, setNameError] = useState('')

  const handleName = (e) => {
    let nameInput = e.target.value
    nameInput <= 0 ? setNameError('This Field is required') : setNameError('')
    setName(nameInput)
  }

  let [email, setEmail] = useState('')
  let [emailError, setEmailError] = useState('')

  const handleEmail = (e) => {
    let emailInput = e.target.value
    emailInput <= 0 ? setEmailError('This Field is required') : setEmailError('')
    setEmail(emailInput)
  }

  let [telephone, setTelephone] = useState('')
  let [telephoneError, setTelephoneError] = useState('')

  const handleTelephone = (e) => {
    let telephoneInput = e.target.value
    telephoneInput <= 0 ? setTelephoneError('This Field is required') : setTelephoneError('')
    setTelephone(telephoneInput)
  }

  const nextStepOne = (e) => {
    setSummary({...summary, name: name, email: email ,telephone: telephone})
    nextStep(e)
  }

  return (
    <div className='form-container'>
      <div className="form-info">
        <h1>Personal info</h1>
        <p>Please provide your name, email address and phone number.</p>
      </div>
      <form action="">
        <div className="input-container">
          <div className='label-and-error'>
            <label htmlFor="name">Name</label>
            <p className='error-message'>{nameError}</p>
          </div>
          <input required onChange={handleName} autoFocus type="text" name="name" placeholder='e.g Hermione Granger' />
        </div>

        <div className="input-container">
          <div className='label-and-error'>
            <label htmlFor="email">Email</label>
            <p className='error-message'>{emailError}</p>
          </div>
          <input required onChange={handleEmail} type="email" name="email" placeholder='e.g hmgranger@hogwarts.com' />
        </div>

        <div className="input-container">
          <div className='label-and-error'>
            <label htmlFor="telephone">Phone Number</label>
            <p className='error-message'>{telephoneError}</p>
          </div>
          <input required onChange={handleTelephone} type="tel" name="phone" placeholder='e.g +44 674 748 847' />
        </div>

        <button disabled={name.length === 0 || email.length === 0 || telephone.length === 0 ? true : false} className='next-step' onClick={(e) => nextStepOne(e)}>Next Step</button>
      </form>
    </div>
  )
}

export default FirstForm