// react
import { Link } from 'react-router-dom';

// data
import { questions } from '../data/questions';

//icon
import { FaArrowRight } from 'react-icons/fa6';

const Community = () => {
  return (
    <main className="min-h-screen font-poppins">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-3xl font-playfair font-semibold text-eerie place-self-center lg:place-self-start mt-4 mb-2">
          Community Forum
        </h1>
        <p className="text-eerie mb-8">
          View how other women in tech responded to journal prompts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((q) => (
            <div
              key={q.day}
              className="bg-white p-6 rounded-lg border border-eerie flex flex-col justify-between"
            >
              <div>
                <h2 className="text-m font-semibold text-eerie font-playfair mb-2">
                  Theme: {q.theme}
                </h2>
                <p className="text-m text-eerie font-poppins mb-4">
                  {q.question}
                </p>
              </div>
              <div className="text-right">
                <Link
                  to={`/community/responses/${q.day}`}
                  className="bg-eerie text-white p-2 inline-flex items-center justify-center rounded-full cursor-pointer transition hover:bg-zinc active:bg-persianblue active:text-white active:p-2 flex-shrink-0 focus:outline-none focus-visible:ring-3 focus-visible:ring-persianblue focus-visible:ring-offset-2"
                  aria-label={`View responses for day ${q.day}`}
                >
                  <FaArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Community;