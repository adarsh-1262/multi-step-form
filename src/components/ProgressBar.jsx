import React from 'react';
import { FiArrowLeft } from 'react-icons/fi'; // Import the icon from react-icons library

const ProgressBar = ({ step }) => {
  const showIcon = step > 1; // Check if step is greater than 1 to show the icon

  return (
    <div className="flex items-center">
      {showIcon && (
        <div className="mr-0">
          <FiArrowLeft className="text-blue-500 text-xl" /> {/* Use the FiArrowLeft icon */}
        </div>
      )}
      <div className="w-full bg-gray-200 h-1 rounded-full">
        <div
          className="bg-blue-500 h-1 rounded-full"
          style={{ width: `${(step - 1) * (100/step)}%` }} // Calculate the width of the progress bar
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
