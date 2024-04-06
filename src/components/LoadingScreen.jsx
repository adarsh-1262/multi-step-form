import React from 'react';
import searchingAnimation from '../assets/searchingAnimation.gif';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-20 rounded shadow-md w-full max-w-md flex flex-col items-center">
        <img src={searchingAnimation} alt="Searching Animation" className="w-40 h-40 mb-4" />
        <p className="text-sm text-gray-500">Finding learning path recommendations for you based on your responses</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
