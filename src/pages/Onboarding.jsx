import Button from '../components/Button';

export default function Onboarding() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-b from-nyanza to-celeste sm:via-celeste sm:via-50% sm:to-white sm:to-50%">
      {/* quiz card */}
      <div className="flex flex-col justify-center items-center gap-10 bg-white rounded-[10px] h-[80vh] w-full sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[65vw] 2xl:w-[60vw] shadow-[0_4px_15px_8px_rgba(30,30,30,0.10)]">
        {/* title and subtitle */}
        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium">
            What are some of your concerns today?
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl font-normal">
            Your selections help us customize your dashboard
          </p>
        </div>
        {/* button quiz grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:grid-rows-3 md:gap-y-10 md:gap-x-14">
          <Button size="md" color="secondary" label="Sleep" />
          <Button size="md" color="secondary" label="Postpartum Anxiety" />
          <Button size="md" color="secondary" label="Self-Doubt" />
          <Button size="md" color="secondary" label="Stress" />
          <Button size="md" color="secondary" label="Saying No" />
          <Button size="md" color="secondary" label="Gender Bias" />
        </div>
        {/* next and skip buttons */}
        <div className="flex flex-col-reverse gap-5 md:flex-row md:gap-8">
          <Button size="sm" color="secondary" label="Skip" />
          <Button size="sm" color="primary" label="Next" />
        </div>
      </div>
    </div>
  );
}
