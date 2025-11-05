// src/components/DailyTrackerBar.jsx
import React from 'react';
import { IoMdCheckmarkCircle } from 'react-icons/io'; // For Completed
import { IoAdd } from 'react-icons/io5'; // For Pending

const DailyTrackerBar = ({ day, isCompleted, onClick, isDisabled }) => {
  
  const icon = isCompleted ? (
    // Green Check Icon: --color-green
    <IoMdCheckmarkCircle 
      className="w-8 h-8 rounded-full flex items-center justify-center" 
      style={{ backgroundColor: 'var(--color-green)' }} // Green background
    />
  ) : (
    // Add Icon: --color-eerie (or --color-zinc if disabled)
    <IoAdd 
      className="w-6 h-6 stroke-2" 
      style={{ color: isDisabled ? 'var(--color-zinc)' : 'var(--color-eerie)' }} 
    />
  );

  return (
    <div
      onClick={!isDisabled ? onClick : undefined}
      className={`bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center mb-3 transition font-poppins 
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-md'}`}
    >
      <span className="text-[var(--color-eerie)] font-medium text-base">Day {day}</span>
      <div className="flex-shrink-0">
        {icon}
      </div>
    </div>
  );
};

export default DailyTrackerBar;