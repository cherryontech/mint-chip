// src/components/DaySummary.jsx
import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5'; // Import Close Icon

const DaySummary = ({ isOpen, onClose, day, question, initialComment, onSave }) => {
  const MAX_CHARS = 500;
  // HOOKS PLACED BEFORE CONDITIONAL RETURN
  const [comment, setComment] = useState(initialComment || '');
  const remainingChars = MAX_CHARS - comment.length;

  useEffect(() => {
    // Sync internal state when props change
    setComment(initialComment || '');
  }, [initialComment, day]);

  const handleSave = () => {
    onSave(day, comment);
    onClose();
  };

  const handleCancel = () => {
    // Restore initial comment if the user cancels
    setComment(initialComment || '');
    onClose();
  };
  
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 p-4 font-poppins">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-2xl">
        <div className="flex justify-between items-start mb-4">
          {/* Title: Using font-playfair for the style seen in the modal image */}
          <h2 className="text-xl font-bold font-playfair text-[var(--color-eerie)]">Day {day} Summary</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-[var(--color-eerie)]" aria-label="Close modal">
            {/* React Icon for Close */}
            <IoClose className="w-6 h-6" />
          </button>
        </div>

        <p className="text-sm mb-4 text-[var(--color-eerie)]">{question}</p>

        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-[var(--color-olivegreen)] focus:border-[var(--color-olivegreen)] text-[var(--color-eerie)]"
          rows="6"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          maxLength={MAX_CHARS}
          placeholder="Write your entry here..."
        ></textarea>

        {/* Character count */}
        <p className={`text-xs mt-1 text-right ${remainingChars < 0 ? 'text-red-500' : 'text-gray-500'}`}>
          {remainingChars}/{MAX_CHARS} characters remaining
        </p>

        {/* Save and Cancel buttons (matching the image) */}
        <div className="mt-6 flex flex-col items-center space-y-2">
          {/* Save Entry Button - Background: --color-eerie */}
          <button
            onClick={handleSave}
            className="w-full bg-[var(--color-eerie)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            Save Entry
          </button>
          {/* Cancel Button - Background: White, Border: Gray */}
          <button
            onClick={handleCancel}
            className="w-full bg-white text-[var(--color-eerie)] px-8 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
        </div>
        
        {/* Community Forum Link - Text: --color-persianblue */}
        <div className="text-center mt-4">
          <a href="#" className="text-[var(--color-persianblue)] text-sm hover:underline">
            Visit Community Forum
          </a>
        </div>
      </div>
    </div>
  );
};

export default DaySummary;