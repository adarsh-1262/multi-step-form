import React, { useState } from 'react';

const Step4 = ({ nextStep, prevStep, handleChange, formData }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    if (selectedOption) {
      nextStep();
    } else {
      alert('Please select an option');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-20 rounded shadow-md w-full max-w-3xl">
        <h2 className="text-2xl mb-2 font-bold text-center">What is your math comfort level?</h2>
        <div className="mb-2">
          <p className="text-sm text-center mb-10">Choose the highest level you feel confident in - you can always adjust later.</p>
        <div className="flex justify-around mb-8">
          <button
            className={`w-1/4 bg-blue-100 rounded-lg p-4 mx-4 focus:outline-none ${selectedOption === 'Introductory' ? 'bg-blue-300' : ''}`}
            onClick={() => handleOptionSelect('Introductory')}
          >
            <div className="text-lg font-medium mb-2">Introductory</div>
            <div className="text-sm">E = mc^2</div>
          </button>
          <button
            className={`w-1/4 bg-green-100 rounded-lg p-4 mx-4 focus:outline-none ${selectedOption === 'Foundational' ? 'bg-green-300' : ''}`}
            onClick={() => handleOptionSelect('Foundational')}
          >
            <div className="text-lg font-medium mb-2">Foundational</div>
            <div className="text-sm">∫ x^2 dx</div>
          </button>
          <button
            className={`w-1/4 bg-yellow-100 rounded-lg p-4 mx-4 focus:outline-none ${selectedOption === 'Intermediate' ? 'bg-yellow-300' : ''}`}
            onClick={() => handleOptionSelect('Intermediate')}
          >
            <div className="text-lg font-medium mb-2">Intermediate</div>
            <div className="text-sm">∇ · E = ρ / ε₀</div>
          </button>
          <button
            className={`w-1/4 bg-red-100 rounded-lg p-4 mx-4 focus:outline-none ${selectedOption === 'Advanced' ? 'bg-red-300' : ''}`}
            onClick={() => handleOptionSelect('Advanced')}
          >
            <div className="text-lg font-medium mb-2">Advanced</div>
            <div className="text-sm">e^(iπ) + 1 = 0</div>
          </button>
        </div>
        <div className="flex justify-center mt-6">
          <button
            className={`py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded focus:outline-none focus:bg-blue-600 ${selectedOption ? '' : 'opacity-50 cursor-not-allowed'}`}
            onClick={handleNext}
            disabled={!selectedOption}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Step4;
