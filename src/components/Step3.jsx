import React from 'react';
import pulley from '../assets/pulley.png'; // Replace 'path_to_your_image.jpg' with the actual path to your image

const Step3 = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl flex">
        <div className="w-1/2 pr-8">
          <img src={pulley} alt="Image" className="w-full h-auto" />
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl mb-4 font-bold mt-20">You're in the right place</h2>
          {/* Add your form fields here */}
          <div className="mb-4">
            <p>Brilliant gets you hands-on to help improve your professional skills and knowledge.
                You'll interact with concepts and solve fun problems in math, science and computer science. </p>
          {/* Add more form fields as needed */}
          
        </div>
        <div className="flex justify-start mt-20 ">
          <button
            className="py-2 px-4 mt-4 text-white bg-pink-300 hover:bg-pink-600 rounded focus:outline-none focus:bg-pink-600"
            onClick={nextStep}
          >
            Continue
          </button>
        </div>
      </div>
      
    </div>
    
    </div>
  );
};

export default Step3;
