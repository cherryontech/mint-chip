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

  const initialCommentObject = initialComment || {};
  const [comment, setComment] = useState(initialCommentObject.comment || '');

  const [isOptedOut, setIsOptedOut] = useState(
    initialCommentObject.optOut || false
  );

  const remainingChars = max_chars - comment.length;

  useEffect(() => {
    const updatedCommentObject = initialComment || {};
    setComment(updatedCommentObject.comment || '');
    setIsOptedOut(updatedCommentObject.optOut || false);
  }, [initialComment, day]);

  const handleSave = () => {
    onSave(day, comment, isOptedOut);
    onClose();
  };

  const handleCancel = () => {
    const updatedCommentObject = initialComment || {};
    setComment(updatedCommentObject.comment || '');
    setIsOptedOut(updatedCommentObject.optOut || false);
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

       
        <p className="text-sm mb-4 text-eerie text-justify">{question}</p>
       
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

        {/*Checkbox for Opt-out */}
        <div className="flex items-center mt-5 mb-3 ml-6">
          <input
            id={`opt-out-${day}`}
            type="checkbox"
            checked={isOptedOut}
            onChange={(e) => setIsOptedOut(e.target.checked)}
            className="h-4 w-4 text-green border-eerie rounded focus:ring-persianblue"
          />
          <label
            htmlFor={`opt-out-${day}`}
            className="ml-2 text-sm text-eerie font-poppins"
          >
            Opt out of sharing in the Community Forum
          </label>
        </div>
      </div>
    </div>
  );
};

export default DailySummary;
