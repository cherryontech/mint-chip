import CheckIcon from './CheckIcon';

const ChallengeCard = ({ title, description }) => {
  return (
    <div
      className="w-[90vw] h-full min-h-[192px] md:w-full bg-white rounded-[10px] outline-2 outline-offset-[-2px] outline-stone-900 px-8 py-7  flex-col justify-start items-start gap-3
        snap-start shrink-0 "
    >
      <div className="flex items-start gap-2.5">
        <CheckIcon />
        <h3 className="text-stone-900 text-xl font-normal font-Poppins leading-snug">
          {title}
        </h3>
      </div>

      <p className="text-stone-900 text-base font-normal font-Poppins leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ChallengeCard;
