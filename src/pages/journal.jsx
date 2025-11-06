//react
import { useState, useEffect, useCallback } from 'react';

//components
import ProgressBar from '../components/ProgressBar';
import DailyTrackerBar from '../components/DailyTrackerBar';
import DailySummary from '../components/DailySummary';

//data
import { questions, total_days, local_storage_key } from '../data/questions';

const getInitialData = () => {
  try {
    const storedData = localStorage.getItem(local_storage_key);
    return storedData
      ? JSON.parse(storedData)
      : { effectiveDays: 0, entries: {} };
  } catch (error) {
    console.error('Error retrieving data from localStorage:', error);
    return { effectiveDays: 0, entries: {} };
  }
};

const Journal = () => {
  const [progressData, setProgressData] = useState(getInitialData);
  const [isDaySummaryOpen, setIsDaySummaryOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const nextDayToComplete = progressData.effectiveDays + 1;

  // Update localStorage
  useEffect(() => {
    localStorage.setItem(local_storage_key, JSON.stringify(progressData));
  }, [progressData]);

  // Open the Day Summary for a specific day
  const openSummaryForDay = (day) => {
    setSelectedDay(day);
    setIsDaySummaryOpen(true);
  };

   const handleArrowClick = () => {
    if (nextDayToComplete <= total_days) {
      openSummaryForDay(nextDayToComplete);
    }
  };

  const handleSaveComment = useCallback((day, comment) => {
    setProgressData((prevData) => {
      const dayKey = `day${day}`;
      const trimmedComment = comment.trim();
      const hasPreviousComment = !!prevData.entries[dayKey];
      const hasNewComment = trimmedComment.length > 0;

      let newEffectiveDays = prevData.effectiveDays;

      if (!hasPreviousComment && hasNewComment) {
        newEffectiveDays += 1;
      } else if (hasPreviousComment && !hasNewComment) {
        newEffectiveDays -= 1;
      }

      const newEntries = {
        ...prevData.entries,
        [dayKey]: trimmedComment,
      };

      newEffectiveDays = Math.max(0, Math.min(newEffectiveDays, total_days));

      return {
        effectiveDays: newEffectiveDays,
        entries: newEntries,
      };
    });
  }, []);

  const daysArray = Array.from({ length: total_days }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gray-50 p-4 font-poppins">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-2xl font-semibold mb-4 mt-6 text-eerie font-playfair">
          Journal Entry
        </h1>

        <ProgressBar
          effectiveDays={progressData.effectiveDays}
          onArrowClick={handleArrowClick}
        />
        <p className="self-stretch justify-start text-black text-sd font-normal font-poppins">
          View saved journal entries or start a new journal entry.
        </p>

        {/* Daily Bars */}
        <div className="mt-8">
          {daysArray.map((day) => {
            const dayKey = `day${day}`;
            const isCompleted = !!progressData.entries[dayKey];
            const isDisabled = day > nextDayToComplete;

            return (
              <DailyTrackerBar
                key={day}
                day={day}
                isCompleted={isCompleted}
                onClick={() => openSummaryForDay(day)}
                isDisabled={isDisabled}
              />
            );
          })}
        </div>

        {/* Daily Summary*/}
        {selectedDay && (
          <DailySummary
            isOpen={isDaySummaryOpen}
            onClose={() => setIsDaySummaryOpen(false)}
            day={selectedDay}
            question={questions[selectedDay - 1]}
            initialComment={progressData.entries[`day${selectedDay}`]}
            onSave={handleSaveComment}
          />
        )}
      </div>
    </div>
  );
};

export default Journal;
