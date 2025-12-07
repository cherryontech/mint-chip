// react
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// firebase
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

// data
import { questions } from '../data/questions';

// icons
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';

const getResponsesForDay = async (day) => {
  if (!day) return [];

  const dayKey = `day${day}`;
  const journalRef = collection(db, 'journals');

  try {
    const querySnapshot = await getDocs(journalRef);
    const responses = [];

    querySnapshot.forEach((doc) => {
      const entry = doc.data().entries?.[dayKey];

      if (
        entry &&
        typeof entry === 'object' &&
        entry.comment &&
        !entry.optOut
      ) {
        responses.push(entry.comment);
      }
    });

    return responses;
  } catch (error) {
    console.error('Error retrieving community data from Firestore:', error);
    return [];
  }
};

const ForumResponses = () => {
  const { day: dayParam } = useParams();
  const navigate = useNavigate();
  const day = parseInt(dayParam);

  const [questionData, setQuestionData] = useState(null);
  const [responses, setResponses] = useState([]);

  const journalLink = `/journal`;

  useEffect(() => {
    const fetchResponses = async () => {
      if (day && day >= 1 && day <= questions.length) {
        const qData = questions[day - 1];
        setQuestionData(qData);

        const communityResponses = await getResponsesForDay(day);
        setResponses(communityResponses);
      } else {
        navigate('/community');
      }
    };

    fetchResponses();
  }, [day, navigate]);

  if (!questionData) {
    return <div className="min-h-screen p-6 font-poppins">Loading...</div>;
  }

  const { question } = questionData;
  const backLink = `/community`;

  return (
    <main className="min-h-screen p-6 font-poppins">
      <div className="max-w-[1000px] mx-auto">
        <Link
          to={backLink}
          className="inline-flex items-center text-eerie hover:text-persianblue transition mb-8 focus:outline-none focus-visible:ring-3 focus-visible:ring-persianblue focus:font-bold focus-visible:ring-offset-2 rounded p-1 -ml-1"
        
        >
          <FaArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
          <span className="font-poppins text-sm">Back to Forum</span>
        </Link>

        <h1 className="text-3xl font-bold mb-4 font-playfair text-eerie">
          Community Responses for Day {day}
        </h1>
        <p className="text-eerie mb-8 border-l-4 border-persianblue pl-4 py-2 bg-gray-50 rounded-r-md">
          <span className="font-semibold">Prompt:</span> {question}
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
            <div className="text-zinc-400 p-4 border rounded-lg flex items-center justify-between">
              Be the first to share your response from your journal.
              <Link
                to={journalLink}
                state={{ openDaySummary: day }}
                className="bg-eerie text-white p-2 inline-flex items-center justify-center rounded-full cursor-pointer transition hover:bg-zinc active:bg-persianblue active:text-white flex-shrink-0 focus:outline-none focus-visible:ring-3 focus-visible:ring-persianblue focus-visible:ring-offset-2"
                aria-label="Be the first to share your response from your journal."
              >
                <FaArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ForumResponses;