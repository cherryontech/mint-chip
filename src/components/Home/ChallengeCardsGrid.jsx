import ChallengeCard from './ChallengeCard';

const challenges = [
  {
    title: 'Guided Journalling',
    description:
      'Writing down how you feel each day with the help of our journal prompts, can lead to emotional clarity.',
  },
  {
    title: 'Positive Affirmations',
    description:
      'Reciting positive phrases everyday can lower your stress levels and rebuild your confidence.',
  },
  {
    title: 'Sleep 7 to 9 Hours',
    description:
      'Track your sleep to see how it affects your mood and outlook in your daily life.',
  },
  {
    title: 'Reading Daily',
    description:
      'Reading each day for at least 15 minutes, can improve your memory and concentration. ',
  },
  {
    title: 'Practice Saying No',
    description:
      'Practice saying no in different ways to shorten your to-do list and establish boundaries.',
  },
];

const DESKTOP_MAX_WIDTH = 'max-w-6xl';

const ChallengeCardsGrid = () => {
  return (
    <div className="w-full py-10">
      <h2 className="text-center text-stone-900 text-5xl font-semibold font-playfair mb-12">
        Customize your tasks and start your journey today
      </h2>

      {/* mobile layout */}
      <div
        className="md:hidden flex space-x-[40px] overflow-x-scroll snap-x snap-mandatory px-4 pb-4"
      >
        {challenges.map((item, index) => (
          <div key={index} className="shrink-0 snap-start">
            <ChallengeCard title={item.title} description={item.description} />
          </div>
        ))}
      </div>

      {/* desktop layout */}
      <div className={`hidden md:block ${DESKTOP_MAX_WIDTH} mx-auto px-4`}>
        <div className="max-w-[944px] mx-auto">
          <div className="grid grid-cols-3 gap-[40px]">
            {challenges.slice(0, 3).map((item, index) => (
              <ChallengeCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div className="flex justify-center mt-[40px] gap-[40px]">
            {challenges.slice(3).map((item, index) => (
              <div key={index + 3} className="w-[288px]">
                <ChallengeCard
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCardsGrid;
