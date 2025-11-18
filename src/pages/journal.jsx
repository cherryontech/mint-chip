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

  const handleSaveComment = useCallback((day, comment, isOptedOut) => {
    setProgressData((prevData) => {
      const dayKey = `day${day}`;
      const trimmedComment = comment.trim();

      const previousEntry = prevData.entries[dayKey];
      const hasPreviousComment = !!(
        previousEntry &&
        (previousEntry.comment || typeof previousEntry === 'string')
      );
      const hasNewComment = trimmedComment.length > 0;

      let newEffectiveDays = prevData.effectiveDays;

      if (!hasPreviousComment && hasNewComment) {
        newEffectiveDays += 1;
      } else if (hasPreviousComment && !hasNewComment) {
        newEffectiveDays -= 1;
      }

      const entryData =
        trimmedComment.length > 0
          ? { comment: trimmedComment, optOut: isOptedOut }
          : null;

      const newEntries = {
        ...prevData.entries,
        [dayKey]: entryData,
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
    <main className="min-h-screen bg-gray-50 p-4 font-poppins">
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
        <section>
          {daysArray.map((day) => {
            const dayKey = `day${day}`;
            const entry = progressData.entries[dayKey];

            const isCompleted = !!(
              entry &&
              (entry.comment || typeof entry === 'string')
            );
            const isDisabled = day > nextDayToComplete;

            const initialCommentData =
              typeof entry === 'string'
                ? { comment: entry, optOut: false }
                : entry;

            return (
              <div key={day} className="relative w-full">
                <DailyTrackerBar
                  day={day}
                  isCompleted={isCompleted}
                  onClick={() => {
                    if (isDaySummaryOpen && selectedDay === day) {
                      setIsDaySummaryOpen(false);
                    } else {
                      openSummaryForDay(day);
                    }
                  }}
                  isDisabled={isDisabled}
                />
                {/* Daily Summary*/}
                {selectedDay === day && isDaySummaryOpen ? (
                  <DailySummary
                    isOpen={isDaySummaryOpen}
                    onClose={() => setIsDaySummaryOpen(false)}
                    day={selectedDay}
                    question={questions[selectedDay - 1].question}
                    initialComment={initialCommentData}
                    onSave={handleSaveComment}
                  />
                ) : (
                  /* Serves placeholder so aria-controls points to something in the DOM and accessibility is followed for dropdown*/
                  <div id={`summary-day${day}`} className="sr-only" />
                )}
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Journal;
