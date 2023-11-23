import React from 'react'

const SuccessPage = ({ summary }) => {
  return (
    <div className='form-container success-container'>
      <img src="/images/icon-thank-you.svg" alt="" />
      <h1>Thank You!</h1>
      <p>Thank you {summary.name} for confirming your subscription! We hope you have fun using our platform. 
        If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  )
}

export default SuccessPage