//icon
import { FaArrowRight } from 'react-icons/fa6';

const ProgressBar = ({ effectiveDays, onArrowClick }) => {
  const progressPercentage = Math.min(
    Math.round((effectiveDays / 30) * 100),
    100
  );

  return (
    <div className="bg-white max-w-[1000px] p-6 rounded-lg  border border-errie font-poppins mb-6">
      <div className="flex justify-between items-center mb-2">
        <h4
          id="progress-label"
          className="text-eerie font-medium text-base"
        >
          30 Day Progress
        </h4>
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
          <div
            className="h-3 rounded-full transition-all duration-500 ease-out bg-green"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        <span className="text-sm font-semibold text-eerie">
          {progressPercentage}%
        </span>

        <button
          className="bg-eerie text-white p-2 rounded-full cursor-pointer transition"
          onClick={onArrowClick}
          aria-label="Go to the next day for a new journal entry"
        >
          <FaArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
