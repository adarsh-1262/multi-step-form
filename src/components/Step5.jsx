import React from 'react';
import stand from '../assets/stand.jpeg'; // Replace 'path_to_your_image.jpg' with the actual path to your image

const Step5 = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl flex">
          <div className="w-1/2 pr-8 flex align-middle p-18">
            <img src={stand} alt="Image" className="w-full h-auto" />
          </div>
          <div className="w-1/2">
            <h1 className="text-2xl mb-6 font-bold mt-20">You're in the right place</h1>
            <h2 className='mb-4'>⭐⭐⭐⭐⭐</h2>
            <div className="mb-4 font-thin">
              <p>"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations.</p>
              <p className="mt-2">- Jacob S.</p>
            </div>
            <div className="flex justify-start mt-10">
              <button
                type="submit" // Set button type to "submit"
                className="py-2 px-4 mt-4 text-white bg-pink-300 hover:bg-pink-600 rounded focus:outline-none focus:bg-pink-600"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Step5;
