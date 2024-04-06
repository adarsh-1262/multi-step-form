import React, {useState} from 'react';
import student from '../assets/STUDENT.jpeg';
import professional from '../assets/professional.jpeg';
import parent from '../assets/parent.jpeg';
import learner from '../assets/learner.jpeg';
import teacher from '../assets/teacher.jpeg';
import other from '../assets/others.jpeg';

const Step1 = ({ nextStep, handleChange, formData }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    handleChange('favoriteColor', value); // Update formData with selected value
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
    <div className="bg-white p-20 rounded shadow-md w-full max-w-3xl h-auto">
      <h2 className="text-2xl mb-2 font-bold text-center">Which describes you best?</h2>
      <div className="mb-2">
        <p className="text-sm text-center mb-6">What is your favorite color?</p>
        <div className="flex flex-col space-y-4">
          <button
            className={`flex items-center bg-green-100 ${selectedOption === 'Blue' ? 'bg-blue-600' : ''}`}
            onClick={() => handleOptionSelect('Blue')}
          >
            <img src={student} alt="Blue" className="w-12 h-8 mr-2" />
            <span className="text-sm font-medium">Student or soon to be enrolled</span>
          </button>
          <button
                className={`flex items-center bg-green-100 ${selectedOption === 'Red' ? 'bg-red-300' : ''}`}
                onClick={() => handleOptionSelect('Red')}
              >
                <img src={professional} alt="Red" className="w-12 h-8 mr-2" />
                <span className="text-sm font-medium">Professional pursuing a career</span>
              </button>
              <button
                className={`flex items-center bg-green-100 ${selectedOption === 'Green' ? 'bg-green-400' : ''}`}
                onClick={() => handleOptionSelect('Green')}
              >
                <img src={parent} alt="Green" className="w-12 h-8 mr-2" />
                <span className="text-sm font-medium">Parent of a school-aged child</span>
              </button>
              <button
                className={`flex items-center bg-green-100 ${selectedOption === 'Pink' ? 'bg-pink-400' : ''}`}
                onClick={() => handleOptionSelect('Pink')}
              >
                <img src={learner} alt="Green" className="w-12 h-8 mr-2" />
                <span className="text-sm font-medium">Lifelong Learner</span>
              </button>
              <button
                className={`flex items-center bg-green-100 ${selectedOption === 'Violet' ? 'bg-violet-400' : ''}`}
                onClick={() => handleOptionSelect('Violet')}
              >
                <img src={teacher} alt="Green" className="w-12 h-8 mr-2" />
                <span className="text-sm font-medium">Teacher</span>
              </button>
              <button
                className={`flex items-center bg-green-100 ${selectedOption === 'Gray' ? 'bg-gray-400' : ''}`}
                onClick={() => handleOptionSelect('Gray')}
              >
                <img src={other} alt="Green" className="w-12 h-8 mr-2" />
                <span className="text-sm font-medium">Other</span>
              </button>
          </div>
        </div>
        <div className="flex justify-center ">
          <button
            className={`py-2 px-4 mt-4 text-white bg-pink-300 hover:bg-pink-600 rounded focus:outline-none focus:bg-pink-600 ${selectedOption ? '' : 'opacity-50 cursor-not-allowed'}`}
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

export default Step1;
