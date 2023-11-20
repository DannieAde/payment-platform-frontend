import React, { useState } from 'react'

const ThirdForm = ({ nextStep, prevStep, billingType, summary, setSummary }) => {

  let [serviceClicked, setServiceClicked] = useState(false)
  let [storageClicked, setStorageClicked] = useState(false)
  let [profileClicked, setProfileClicked] = useState(false)

  const handleService = () => {
    setServiceClicked(!serviceClicked) //alternate boolean value on click to toggle add-on
  }

  const handleStorage = () => { 
    setStorageClicked(!storageClicked) //alternate boolean value on click to toggle add-on
  }

  const handleProfile = () => {
    setProfileClicked(!profileClicked) //alternate boolean value on click to toggle add-on
  }

  const nextStepThree = (e) => {
    // changing service cost based on type of payment, Yearly or Monthly
    billingType === 'Monthly' ? setSummary({
      ...summary,
      addons: {
        onlineService : serviceClicked ? 1 : 0,
        storageService : storageClicked ? 2 : 0,
        profileService : profileClicked ? 2 : 0,
      }
    }) : setSummary({
      ...summary,
      addons: {
        onlineService : serviceClicked ? 10 : 0,
        storageService : storageClicked ? 20 : 0,
        profileService : profileClicked ? 20 : 0,
      }
    })

    nextStep(e)
  }

  return (
    <div className='form-container'>
      <div className="form-info">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <form action="">
        <div onClick={handleService} className={serviceClicked ? "add-ons-container clicked" : "add-ons-container"}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div className={serviceClicked ? "img-container clicked" : 'img-container'}>
            {serviceClicked ? <img src="/images/icon-checkmark.svg" alt="show" /> : null}
            </div>
            <div className='add-on-details'>
              <h3>Online service</h3>
              <p>Access to multiplayer games</p>
            </div>
          </div>
          <p className='add-on-cost'>{billingType === 'Monthly' ? '+1$/mo' : '+$10/yr'}</p>
        </div>

        <div onClick={handleStorage} className={storageClicked ? "add-ons-container clicked" : "add-ons-container"}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div className={storageClicked ? "img-container clicked" : 'img-container'}>
            {storageClicked ? <img src="/images/icon-checkmark.svg" alt="show" /> : null}
            </div>
            <div className='add-on-details'>
              <h3>Larger storage</h3>
              <p>Extra 1TB of cloud save</p>
            </div>
          </div>
          
          <p className='add-on-cost'>{billingType === 'Monthly' ? '+2$/mo' : '+$20/yr'}</p>
        </div>

        <div onClick={handleProfile} className={profileClicked ? "add-ons-container clicked" : "add-ons-container"}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div className={profileClicked ? "img-container clicked" : 'img-container'}>
              {profileClicked ? <img src="/images/icon-checkmark.svg" alt="show" /> : null}
            </div>
            <div className='add-on-details'>
              <h3>Customizable profile</h3>
              <p>Custom theme on your profile</p>
            </div>
          </div>
          <p className='add-on-cost'>{billingType === 'Monthly' ? '+2$/mo' : '+$20/yr'}</p>
        </div>

        <div className="navigate-forms">
          <button className='prev-step' onClick={(e) => prevStep(e)}>Go Back</button>
          <button disabled={!serviceClicked & !storageClicked & !profileClicked ? true : false} className='next-step' onClick={(e) => nextStepThree(e)}>Next Step</button>
        </div>

      </form>
    </div>
  )
}

export default ThirdForm