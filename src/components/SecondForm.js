import React, { useState } from 'react'

const SecondForm = ({ nextStep, prevStep, billingType, setBillingType, summary, setSummary }) => {

  const toggleBillingType = () => {
    billingType === 'Monthly' ? setBillingType('Yearly') : setBillingType('Monthly')
  }

  let [arcadeClicked, setArcadeClicked] = useState(false)
  let [advancedClicked, setAdvancedClicked] = useState(false)
  let [proClicked, setProClicked] = useState(false)

  const handleArcade = () => {
    setArcadeClicked(true)
    setAdvancedClicked(false)
    setProClicked(false)
  }

  const handleAdvanced = () => {
    setArcadeClicked(false)
    setAdvancedClicked(true)
    setProClicked(false)
  }

  const handlePro = () => {
    setArcadeClicked(false)
    setAdvancedClicked(false)
    setProClicked(true)
  }

  const nextStepTwo = (e) => {
    if (arcadeClicked) {
      setSummary({...summary, billingTier: 'Arcade', billingType: billingType, billingCost: billingType === 'Monthly' ? 9 : 90})
    } else if (advancedClicked) {
      setSummary({...summary, billingTier: 'Advanced', billingType: billingType, billingCost: billingType === 'Monthly' ? 12 : 120})
    } else if (proClicked) {
      setSummary({...summary, billingTier: 'Pro', billingType: billingType, billingCost: billingType === 'Monthly' ? 15 : 150})
    }

    nextStep(e)
  }

  
  return (
    <div className='form-container'>
      <div className="form-info">
        <h1>Select Your Plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <div className="billing">
        <div onClick={handleArcade} className={!arcadeClicked ? 'billing-option' : 'billing-option clicked'}>
          <img src="/images/icon-arcade.svg" alt="" />
          <div>
            <h3>Arcade</h3>
            <p>{billingType === 'Monthly' ? '$9/mo' : '$90/yr'}</p>
            <h6>{billingType === 'Yearly' && '2 months free'}</h6>
          </div>
        </div>
        <div onClick={handleAdvanced} className={!advancedClicked ? 'billing-option' : 'billing-option clicked'}>
          <img src="/images/icon-advanced.svg" alt="" />
          <div>
            <h3>Advanced</h3>
            <p>{billingType === 'Monthly' ? '$12/mo' : '$120/yr'}</p>
            <h6>{billingType === 'Yearly' && '2 months free'}</h6>
          </div>
        </div>
        <div onClick={handlePro} className={!proClicked ? 'billing-option' : 'billing-option clicked'}>
          <img src="/images/icon-pro.svg" alt="" />
          <div>
            <h3>Pro</h3>
            <p>{billingType === 'Monthly' ? '$15/mo' : '$150/yr'}</p>
            <h6>{billingType === 'Yearly' && '2 months free'}</h6>
          </div>
        </div>
      </div>

      <div className="billing-control">
        <div className='billing-toggle-options'>
          <p className={billingType === 'Monthly' ? 'active' : ''}>Monthly</p>
          {/* <button onClick={toggleBillingType}>{billingType === 'Monthly' ? 'Yearly' : 'Monthly'}</button> */}
          <div className="billing-toggle-button">
            <div onClick={toggleBillingType} className={'toggle-circle ' + billingType.toLowerCase()}></div>
          </div>
          <p className={billingType === 'Yearly' ? 'active' : ''}>Yearly</p>
        </div>
      </div>

      <div className="navigate-forms">
        <button className='prev-step' onClick={prevStep}>Go Back</button>
        <button disabled={!arcadeClicked && !advancedClicked && !proClicked ? true : false} className='next-step' onClick={(e) => nextStepTwo(e)}>Next</button>
      </div>
    </div>
  )
}

export default SecondForm