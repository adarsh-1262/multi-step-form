import React, {useState} from 'react';
import graph from '../assets/graph.png';
import globe from '../assets/globe.jpeg';
import math from '../assets/maths.jpeg';
import archery from '../assets/archery.png';
import eye from '../assets/eye.png';

const Step2 = ({ nextStep, handleChange, formData }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    handleChange('interest', value); // Update formData with selected value
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
        <h2 className="text-2xl mb-2 font-bold text-center">Which are you most interested in?</h2>
        <div className="mb-2">
          <p className="text-sm text-center mb-10">Choose just one. This will help us get you started (but won't limit your experience).</p>
          <div className="flex flex-col space-y-4">
            <button
              className={`flex items-center bg-green-100 ${selectedOption === 'Red' ? 'bg-red-500' : ''}`}
              onClick={() => handleOptionSelect('Red')}
            >
              <img src={graph} alt="Blue" className="w-12 h-8 mr-2" />
              <span className="text-sm font-medium">Learning specific skills to advance my career</span>
            </button>
            <button
              className={`flex items-center bg-green-100 ${selectedOption === 'Yellow' ? 'bg-yellow-500' : ''}`}
              onClick={() => handleOptionSelect('Yellow')}
            >
              <img src={globe} alt="Red" className="w-12 h-8 mr-2" />
              <span className="text-sm font-medium">Exploring new topics I'm interested in</span>
            </button>
            <button
              className={`flex items-center bg-green-100 ${selectedOption === 'Violet' ? 'bg-violet-500' : ''}`}
              onClick={() => handleOptionSelect('Violet')}
            >
              <img src={math} alt="Green" className="w-12 h-8 mr-2" />
              <span className="text-sm font-medium">Refreshing my maths foundations</span>
            </button>
            <button
              className={`flex items-center bg-green-100 ${selectedOption === 'Orange' ? 'bg-orange-500' : ''}`}
              onClick={() => handleOptionSelect('Orange')}
            >
              <img src={archery} alt="Green" className="w-12 h-8 mr-2" />
              <span className="text-sm font-medium">Exercising my brain to stay sharp</span>
            </button>
            <button
              className={`flex items-center bg-green-100 ${selectedOption === 'Pink' ? 'bg-pink-500' : ''}`}
              onClick={() => handleOptionSelect('Pink')}
            >
              <img src={eye} alt="Green" className="w-12 h-8 mr-2" />
              <span className="text-sm font-medium">Something else</span>
            </button>
          </div>
        </div>
        <div className="flex justify-center ">
        <button
            className={`py-2 px-4 mt-4 text-black bg-pink-400 hover:bg-pink-600 rounded focus:outline-none focus:bg-pink-500 ${selectedOption ? '' : 'opacity-50 cursor-not-allowed'}`}
            onClick={handleNext}
            disabled={!selectedOption}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
