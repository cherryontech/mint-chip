//icons
import { FaCircleCheck, FaCirclePlus } from 'react-icons/fa6';

const DailyTrackerBar = ({ day, isCompleted, onClick, isDisabled }) => {
  const icon = isCompleted ? (
    <FaCircleCheck
      color="#00AD00"
      className="w-8 h-8 rounded-full flex items-center justify-center  "
    />
  ) : (
    <FaCirclePlus className="w-8 h-8 stroke-2" />
  );

  return (
    <div
      onClick={!isDisabled ? onClick : undefined}
      className={`bg-white max-w-[1000px] p-4 rounded-lg border border-errie flex justify-between items-center mb-3 mt-8 transition font-poppins 
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-md'}`}
    >
      <span className="text-eerie font-medium text-base">Day {day}</span>
      <div className="flex-shrink-0">{icon}</div>
    </div>
  );
};

export default DailyTrackerBar;
