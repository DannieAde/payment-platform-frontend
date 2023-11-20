import { useState } from 'react';
import './App.css';
import FormControl from './components/FormControl';
import Form from './components/Form';

function App() {

  let [formState, setFormState] = useState(1)
  let [billingType, setBillingType] = useState('Monthly')
  let [summary, setSummary] = useState({})


  const nextStep =  (e) => {
    e.preventDefault()
    formState < 5 && setFormState(formState + 1)
  }

  const prevStep =  () => {
    formState > 0 && setFormState(formState - 1)
  }

  return (
    <div className="App">
      <FormControl formState={formState}/>
      <Form 
        formState={formState} 
        nextStep={nextStep} 
        prevStep={prevStep} 
        billingType={billingType} 
        setBillingType={setBillingType} 
        summary={summary} 
        setSummary={setSummary} 
        setFormState={setFormState}
      />
    </div>
  );
}

export default App;
