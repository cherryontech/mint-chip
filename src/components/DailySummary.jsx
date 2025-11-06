//react
import { useState, useEffect } from 'react';

// component
import Button from './Button';

//icons
import { IoClose } from 'react-icons/io5';

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
  const remainingChars = max_chars  - comment.length;

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
    <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50 p-4 font-poppins">
      <div className="bg-gradient-to-b from-nyanza to-celeste  p-6 rounded-xl w-full max-w-md shadow-2xl">
        <button
          onClick={onClose}
          className="text-gray-500 w-8 h-8 rounded-full flex items-center justify-center"
          aria-label="Close modal"
        >
          <IoClose className="w-6 h-6 roun" />
        </button>

        <h2 className="text-xl mb-2 font-semibold font-playfair text-center text-eerie ">
          Day {day} Summary
        </h2>

        <p className="text-sm mb-4 text-eerie">{question}</p>

        <textarea
          className="w-full p-4 border border-errie bg-white rounded-sm resize-none focus:ring-3 focus:ring-persianblue text-eerie"
          rows="6"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          maxLength={max_chars}
          placeholder="Write your entry here..."
        ></textarea>

        
        <p
          className={`text-xs mt-1 text-left font-poppins`}
        >
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
