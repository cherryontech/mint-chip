// src/components/Journal.jsx
import React, { useState, useEffect, useCallback } from 'react';
import ProgressBar from '../components/ProgressBar';
import DailyTrackerBar from '../components/DailyTrackerBar';
import DaySummary from '../components/DaySummary'; // <-- CORRECTED IMPORT NAME
import { questions, total_days, local_storage_key } from '../data/questions';

// Utility function to load data from localStorage
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  // The day that should be filled (the next one after the last completed)
  const nextDayToComplete = progressData.effectiveDays + 1;

  // Hook to update localStorage every time progressData changes
  useEffect(() => {
    localStorage.setItem(local_storage_key, JSON.stringify(progressData));
  }, [progressData]);

  // Function to open the modal for a specific day
  const openModalForDay = (day) => {
    setSelectedDay(day);
    setIsModalOpen(true);
  };
  
  // Function for the progress bar arrow button
  const handleArrowClick = () => {
    if (nextDayToComplete <= total_days) {
      openModalForDay(nextDayToComplete);
    }
  };

  const handleSaveComment = useCallback((day, comment) => {
    setProgressData((prevData) => {
      const dayKey = `day${day}`;
      const trimmedComment = comment.trim();
      const hasPreviousComment = !!prevData.entries[dayKey];
      const hasNewComment = trimmedComment.length > 0;

      let newEffectiveDays = prevData.effectiveDays;

      // Logic for advancing/decrementing the day counter
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
      <div className="max-w-xl mx-auto">
        {/* Title: Using the title from the images */}
        <h1 className="text-2xl font-semibold mb-4 mt-6 text-[var(--color-eerie)]">
          Sleep 7 to 9 hours
        </h1>

        {/* Progress Bar: Pass the navigation function */}
        <ProgressBar 
          effectiveDays={progressData.effectiveDays} 
          onArrowClick={handleArrowClick}
        />

        {/* List of Daily Bars */}
        <div className="mt-8">
          {daysArray.map((day) => {
            const dayKey = `day${day}`;
            const isCompleted = !!progressData.entries[dayKey];
            
            // Sequential Logic: Only allow interaction with completed days (for editing)
            // or the immediately next day to complete.
            const isDisabled = day > nextDayToComplete;

            return (
              <DailyTrackerBar
                key={day}
                day={day}
                isCompleted={isCompleted}
                onClick={() => openModalForDay(day)}
                isDisabled={isDisabled}
              />
            );
          })}
        </div>

        {/* Daily Summary Modal */}
        {selectedDay && (
          <DaySummary // <-- CORRECTED COMPONENT NAME
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
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