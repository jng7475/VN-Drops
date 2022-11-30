import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';

const UserSignup = () => {
  const [step, setStep] = useState(1);
  const [userDetails, setUserDetails] = useState(null);
  return step === 1 ? (
    <Step1 setStep={setStep} setUserDetails={setUserDetails} />
  ) : (
    <Step2 userDetails={userDetails} setUserDetails={setUserDetails} />
  );
};
export default UserSignup;
