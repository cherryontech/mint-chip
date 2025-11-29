import Button from "../components/Button";
import ChallengeTile from "../components/Challenges/ChallengeTile";

export default function Challenges() {
    return (
        <div className="bg-white">
            {/* title section */}
            <div className="flex flex-col mx-8 sm:mx-15 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-80">
                <h1 className="text-3xl font-playfair font-semibold text-eerie place-self-center lg:place-self-start mt-4">Which task would you like to work on today?</h1>
            </div>

            {/* challenge tile grid */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 auto-rows-min my-10 mx-8 sm:mx-15 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-80">
                {/* row 1 */}
                <ChallengeTile 
                    size="sm" 
                    span="2"
                    title="Sleep 7-9 hours" 
                    subtitle="Better sleep means a better you."
                    tags='#Sleep #Stress'
                />
                <ChallengeTile 
                    size="sm" 
                    span="2"
                    title="Read a Book" 
                    subtitle="Destress by reading for at least 20 minutes a day."
                    tags='#Sleep #Stress'
                />
                <ChallengeTile 
                    size="sm" 
                    span="2"
                    title="Practice Saying No" 
                    subtitle="Learn the different ways you can say no in & outside in the office."
                    tags='#Stress #SelfDoubt'
                />

                {/* row 2 */}
                <ChallengeTile 
                    size="lg" 
                    span="3"
                    title="Read Positive Affirmations" 
                    subtitle="Recite empowering messages meant to help you fight self-doubt and anxiety."
                    tags='#Sleep #SelfDoubt #GenderBias #Postpartum'
                />
                <ChallengeTile 
                    size="lg" 
                    span="3"
                    title="Daily Journal Entry" 
                    subtitle="Answer a different prompt each day or share what’s on your mind."
                    tags='#Stress #SelfDoubt #GenderBias #Postpartum'
                    to='/journal'
                />
            </div>
        </div>
  );
}
