import React from 'react'

const FormSummary = ({ prevStep, nextStep, setFormState ,summary }) => {

  const changeTier = (e) => {
    e.preventDefault()
    setFormState(2)
  }

  return (
      <div className='form-container'>
        <div className="form-info">
          <h1>Finishing up</h1>
          <p>Double-check everything looks okay before confirming.</p>
        </div>

        <div className="sub-summary">
          <div className="summary-details">
            <div className='billing-details'>
              <div>
                <p>{summary.billingTier} ({summary.billingType})</p>
                <a href='!' onClick={(e) => changeTier(e)}>Change</a>
              </div>
              <p>{`$${summary.billingCost}/${summary.billingType === 'Monthly' ? 'mo' : 'yr'}`}</p>
            </div>
            <div className="add-on-details">
            {summary.addons.onlineService > 0 && 
              (<div className="add-on">
                <p>Online Service</p>
                <p className='add-on-cost'>{`+$${summary.addons.onlineService}/${summary.billingType === 'Monthly' ? 'mo' : 'yr'}`}</p>
              </div>)
              }

              {summary.addons.storageService > 0 && (<div className="add-on">
                <p>Larger Storage</p>
                <p className='add-on-cost'>{`+$${summary.addons.storageService}/${summary.billingType === 'Monthly' ? 'mo' : 'yr'}`}</p>
              </div>)}

              {summary.addons.profileService > 0 && (<div className="add-on">
                <p>Customizable Profile</p>
                <p className='add-on-cost'>{`+$${summary.addons.profileService}/${summary.billingType === 'Monthly' ? 'mo' : 'yr'}`}</p>
              </div>)}
            </div>
          </div>
          <div className="summary-total">
            <p>{`Total (${summary.billingType === 'Monthly' ? 'per month' : 'per year'})`}</p>
            <p className='total-cost'>{`+$${summary.billingCost + summary.addons.onlineService + summary.addons.storageService + summary.addons.profileService}/${summary.billingType === 'Monthly' ? 'mo' : 'yr'}`}</p>
          </div>
        </div>

        <div className="navigate-forms">
          <button className='prev-step' onClick={prevStep}>Go Back</button>
          <button className='next-step' onClick={nextStep}>Confirm</button>
        </div>
      </div>
    )
}

export default FormSummary