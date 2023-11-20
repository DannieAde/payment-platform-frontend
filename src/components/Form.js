import FirstForm from "./FirstForm";
import FormSummary from "./FormSummary";
import SecondForm from "./SecondForm";
import SuccessPage from "./SuccessPage";
import ThirdForm from "./ThirdForm"

const Form = ({ formState, setFormState, nextStep, prevStep, billingType, setBillingType, summary, setSummary }) => {
  switch (formState) {
    case 1:
      return <FirstForm nextStep={nextStep} summary={summary} setSummary={setSummary} />

    case 2:
      return <SecondForm nextStep={nextStep} prevStep={prevStep} billingType={billingType} setBillingType={setBillingType} summary={summary} setSummary={setSummary} />

    case 3:
      return <ThirdForm nextStep={nextStep} prevStep={prevStep} billingType={billingType} summary={summary} setSummary={setSummary} />

    case 4:
      return <FormSummary summary={summary} nextStep={nextStep} prevStep={prevStep} formState={formState} setFormState={setFormState}/>
    case 5:
      return <SuccessPage summary={summary}/>

    default:
      return <FirstForm />;
  }
}

export default Form