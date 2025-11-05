// src/components/ProgressBar.jsx
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6'; // Import React Icon

const ProgressBar = ({ effectiveDays, onArrowClick }) => {
  const progressPercentage = Math.min(Math.round((effectiveDays / 30) * 100), 100);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 font-poppins mb-6">
      <div className="flex justify-between items-center mb-2">
        <h4 id="progress-label" className="text-sm font-medium text-eerie">30 Day Progress</h4>
      </div>
      <div className="flex items-center space-x-4">
        <div 
          className="flex-grow bg-gray-200 rounded-full h-3"
          role="progressbar"
          aria-valuenow={progressPercentage}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-labelledby="progress-label"
        >
          {/* Progress fill color: --color-olivegreen */}
          <div
            className="h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%`, backgroundColor: 'var(--color-olivegreen)' }}
          ></div>
        </div>
        
        <span className="text-sm font-semibold text-[var(--color-eerie)]">
          {progressPercentage}%
        </span>
        {/* React Icon Button */}
        <button
          className="bg-eerie text-white p-2 rounded-full cursor-pointer hover:bg-gray-700 transition"
          onClick={onArrowClick}
          aria-label="Go to the next pending day"
        >
          <FaArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;