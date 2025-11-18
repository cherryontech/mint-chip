// react
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// data
import { questions, local_storage_key } from '../data/questions';

// icon
import { FaArrowLeft } from 'react-icons/fa6';

const getResponsesForDay = (day) => {
  try {
    const storedData = localStorage.getItem(local_storage_key);
    if (!storedData) return [];

    const allEntries = JSON.parse(storedData).entries;
    const entry = allEntries[`day${day}`];

    if (entry && typeof entry === 'object' && entry.comment && !entry.optOut) {
      return [entry.comment];
    }

    return [];
  } catch (error) {
    console.error('Error retrieving community data:', error);
    return [];
  }
};

const ForumResponses = () => {
  const { day: dayParam } = useParams();
  const navigate = useNavigate();
  const day = parseInt(dayParam);

  const [questionData, setQuestionData] = useState(null);
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    if (day && day >= 1 && day <= questions.length) {
      const qData = questions[day - 1];
      setQuestionData(qData);
      setResponses(getResponsesForDay(day));
    } else {
      navigate('/community');
    }
  }, [day, navigate]);

  if (!questionData) {
    return <div className="p-6 text-center font-poppins">Loading...</div>;
  }

  return (
    <main className="min-h-screen p-6 font-poppins">
      <div className="max-w-[1000px] mx-auto">
        <button
          onClick={() => navigate('/community')}
          className="flex items-center mb-6 font-playfair"
          size="sm"
          color="primary"
          aria-label="Back to Community Forum"
        >
          <FaArrowLeft className="w-4 h-4 mr-2" />
          Back to Forum
        </button>

        <h1 className="text-3xl font-bold mb-2 font-playfair">
          Community Forum
        </h1>
        <p className="text-eerie mb-8">
          View how other women in tech answered, {questionData.question}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {responses.length > 0 ? (
            responses.map((response, index) => (
              <div
                key={index}
                className="border border-eerie p-6 rounded-lg bg-white shadow-sm"
              >
                <p className="font-medium text-m text-eerie mb-2 font-playfair">
                  Anonymous
                </p>

                <p className="text-base text-eerie font-poppins whitespace-pre-wrap">
                  {response}
                </p>
              </div>
            ))
          ) : (
            <div className="text-zinc p-4 border rounded-lg">
              Be the first to share your response from your journal.
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ForumResponses;
