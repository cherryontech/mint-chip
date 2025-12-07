//react
import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// firebase
import { db, auth } from '../firebase';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

//components
import ProgressBar from '../components/ProgressBar';
import DailyTrackerBar from '../components/DailyTrackerBar';
import DailySummary from '../components/DailySummary';

//data
import { questions, total_days } from '../data/questions';

const Journal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // State for user authentication
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [progressData, setProgressData] = useState({
    effectiveDays: 0,
    entries: {},
  });
  const [isDaySummaryOpen, setIsDaySummaryOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const nextDayToComplete = progressData.effectiveDays + 1;

  // Check authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        setLoading(false);
      } else {
       navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (!userId) return;

    // Create document reference using the authenticated user's ID
    const JOURNAL_DOC_REF = doc(db, 'journals', userId);

    const unsubscribe = onSnapshot(
      JOURNAL_DOC_REF,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          setProgressData({
            effectiveDays: data.effectiveDays || 0,
            entries: data.entries || {},
          });
        } else {
         
          setDoc(
            JOURNAL_DOC_REF,
            { effectiveDays: 0, entries: {} },
            { merge: true }
          ).catch((error) =>
            console.error('Error creating initial document:', error)
          );
        }
      },
      (error) => {
        console.error('Error listening to journal data:', error);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  // Open the DailySummary for a specific day
  const openSummaryForDay = useCallback((day) => {
    setSelectedDay(day);
    setIsDaySummaryOpen(true);
  }, []);

  // Handle navigation from ForumResponses
  useEffect(() => {
    if (location.state && location.state.openDaySummary) {
      openSummaryForDay(location.state.openDaySummary);
    }
  }, [location.state, openSummaryForDay]);

  const handleArrowClick = useCallback(() => {
    openSummaryForDay(nextDayToComplete);
  }, [openSummaryForDay, nextDayToComplete]);

  const handleSaveComment = useCallback((day, comment, isOptedOut) => {
    if (!userId) return;

    // Create document reference using the authenticated user's ID
    const JOURNAL_DOC_REF = doc(db, 'journals', userId);

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

      const finalEffectiveDays = Math.max(
        0,
        Math.min(newEffectiveDays, total_days)
      );

      const dataToSave = {
        effectiveDays: finalEffectiveDays,
        entries: newEntries,
      };

      // Save to Firestore
      setDoc(JOURNAL_DOC_REF, dataToSave, { merge: true }).catch((error) =>
        console.error('Error saving journal entry:', error)
      );

      return {
        effectiveDays: finalEffectiveDays,
        entries: newEntries,
      };
    });
  }, [userId]);

 
  if (loading) {
    return <div className="min-h-screen p-6 font-poppins">Loading...</div>;
  }

  return (
    <main className="min-h-screen p-6 font-poppins">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-3xl font-bold mb-2 font-playfair">
          Journal Entry
        </h1>
        

        <ProgressBar
          effectiveDays={progressData.effectiveDays}
          onArrowClick={handleArrowClick}
        />

        <section aria-labelledby="journal-entries-heading">
          {questions.map((q) => {
            const day = q.day;
            const entry = progressData.entries[`day${day}`];

            const isCompleted = !!(entry && entry.comment);

            // DailyTrackerBar
            const isDisabled = day > nextDayToComplete;

            // DailySummary
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