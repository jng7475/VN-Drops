import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

const HospitalSignup = () => {
  const [step, setStep] = useState(1);
  const [userDetails, setUserDetails] = useState(null);
  if (step === 1) {
    return <Step1 setStep={setStep} setUserDetails={setUserDetails} />;
  }
  if (step === 2) {
    return <Step2 setStep={setStep} setUserDetails={setUserDetails} />;
  }
  if (step === 3) {
    return <Step3 setStep={setStep} userDetails={userDetails} />;
  }
  if (step === 4) {
    return <Step4 setStep={setStep} userDetails={userDetails} />;
  }
  if (step === 5) {
    return <Step5 userDetails={userDetails} />;
  }
};

export default HospitalSignup;
