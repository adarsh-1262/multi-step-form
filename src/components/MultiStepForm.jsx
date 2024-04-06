// MultiStepForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import ProgressBar from './ProgressBar';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const nextStep = () => setStep(step + 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading animation
    // Simulate loading for 1 second
    navigate('/loading'); // Redirect to loading page (optional
    setTimeout(() => {
      setLoading(false); // Stop loading animation
      navigate('/product'); // Redirect to product page
    }, 3000);
  };

  const handleChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 nextStep={nextStep} handleChange={handleChange} formData={formData} />;
      case 2:
        return <Step2 nextStep={nextStep} handleChange={handleChange} formData={formData} />;
      case 3:
        return <Step3 nextStep={nextStep} handleChange={handleChange} formData={formData} />;
      case 4:
        return <Step4 nextStep={nextStep} handleChange={handleChange} formData={formData} />;
      case 5:
        return <Step5 handleSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mt-4'>
      <ProgressBar step={step} />
      {renderStep()}
    </div>
  );
};

export default MultiStepForm;
