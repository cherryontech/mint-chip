//icons
import { FaCircleCheck, FaCirclePlus } from 'react-icons/fa6';

const DailyTrackerBar = ({ day, isCompleted, onClick, isDisabled, isOpen }) => {
  const icon = isCompleted ? (
    <FaCircleCheck
      color="#00AD00"
      className="w-8 h-8 rounded-full flex items-center justify-center"
      aria-hidden="true"
    />
  ) : (
    <FaCirclePlus className="w-8 h-8 stroke-2" aria-hidden="true" />
  );

  return (
    <div
      id={`day-${day}-trackerbar`}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-controls={`summary-day${day}`}
      onClick={!isDisabled ? onClick : undefined}
      className={`bg-white max-w-[1000px] p-4 rounded-lg border border-errie flex justify-between items-center mb-3 mt-8 transition font-poppins 
        ${isDisabled ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer hover:shadow-md'}`}
      onKeyDown={(e) => {
        if (!isDisabled && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <span className="text-eerie font-medium text-base">Day {day}</span>
      <div className="flex-shrink-0">{icon}</div>
    </div>
  );
};

export default DailyTrackerBar;
