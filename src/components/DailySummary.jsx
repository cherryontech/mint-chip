//react
import { useState, useEffect } from 'react';

// component
import Button from './Button';

const DailySummary = ({
  isOpen,
  onClose,
  day,
  question,
  initialComment,
  onSave,
}) => {
  const max_chars = 500;
  const [comment, setComment] = useState(initialComment || '');
  const remainingChars = max_chars - comment.length;

  useEffect(() => {
    setComment(initialComment || '');
  }, [initialComment, day]);

  const handleSave = () => {
    onSave(day, comment);
    onClose();
  };

  const handleCancel = () => {
    setComment(initialComment || '');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      id={`summary-day${day}`}
      role="region"
      aria-labelledby={`day-${day}-trackerbar`}
      hidden={!isOpen}
      className=" absolute right-0 bg-opacity-50 flex justify-center items-center z-50 font-poppins"
    >
      <div className="bg-gradient-to-b from-nyanza to-celeste  p-6 rounded-xl w-full max-w-md shadow-2xl border  border-eerie">
        <h2 className="text-xl mb-2 font-semibold font-playfair text-center text-eerie ">
          Day {day} Summary
        </h2>

        <p className="text-sm mb-4 text-eerie">{question}</p>

        <textarea
          className="w-full p-4 border border-eerie bg-white rounded-sm resize-none focus:ring-3 focus:ring-persianblue text-eerie"
          rows="6"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          maxLength={max_chars}
          placeholder="Write your entry here..."
        ></textarea>

        <p className={`text-xs mt-1 text-left text-eerie font-poppins`}>
          {remainingChars}/{max_chars} characters remaining
        </p>

        <div className="mt-4 flex flex-col items-center space-y-2">
          <Button
            onClick={handleSave}
            color="primary"
            size="sm"
            label="Save Entry"
          />

          <div className="mt-2">
            <Button
              onClick={handleCancel}
              color="secondary"
              size="sm"
              label="Cancel"
            />
          </div>
        </div>

        <div className="text-center mt-4">
          <a
            href="/forum"
            className="text-blue-700 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus:p-2 focus-visible:ring-persianblue rounded-[5px]"
          >
            Visit Community Forum
          </a>
        </div>
      </div>
    </div>
  );
};

export default DailySummary;
