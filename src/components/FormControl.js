const FormControl = ({ formState }) => {

  return (
    <div className='form-control'>
      <div className="steps-container">
        <div className="step">
          <div className={formState === 1 ? "step-value-active" : 'step-value' }>1</div>
          <div className="step-description">
            <p>STEP 1</p>
            <h3>YOUR INFO</h3>
          </div>
        </div>
        <div className="step">
          <div className={formState === 2 ? "step-value-active" : 'step-value' }>2</div>
          <div className="step-description">
            <p>STEP 2</p>
            <h3>SELECT PLAN</h3>
          </div>
        </div>
        <div className="step">
          <div className={formState === 3 ? "step-value-active" : 'step-value' }>3</div>
          <div className="step-description">
            <p>STEP 3</p>
            <h3>ADD-ONS</h3>
          </div>
        </div>
        <div className="step">
          <div className={formState === 4 ? "step-value-active" : 'step-value' }>4</div>
          <div className="step-description">
            <p>STEP 4</p>
            <h3>SUMMARY</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormControl