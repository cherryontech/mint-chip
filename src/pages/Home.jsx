//react
import React from 'react';

//components
import Button from '../components/Button';
import ChallengeCardsGrid from '../components/Home/ChallengeCardsGrid';
import TestimonialCardsGrid from '../components/Home/TestimonialCardsGrid';

const Home = () => {
  return (
    <div className="bg-white w-full relative">
      <div className="w-full h-[350px] sm:h-[350px] bg-gradient-to-b from-nyanza to-celeste rounded-bl-[40px] rounded-br-[40px] relative mt-[-22px]">
        <section className="w-full h-full flex flex-col items-center justify-center px-4 relative z-10">
          <h1 className="w-[745px] max-w-full mx-auto h-auto mb- text-center text-stone-900 text-4xl sm:text-5xl lg:text-5xl font-bold font-playfair capitalize leading-snug">
            Helping Women In Tech <br />
            Fight Burnout
          </h1>

          <p className="w-[829px] max-w-full mx-auto h-auto mb-6 sm:mb-8 font-poppins font-normal text-eerie text-lg sm:text-2xl lg:text-xl text-center tracking-normal leading-normal px-2">
            Healie hosts a 30-Day Detox Challenge that provides five <br />
            healthy strategies women can use to prevent and fight burnout
          </p>

          <Button
            size="sm"
            color="primary"
            label="Sign Up"
            aria-label="Sign up to start the challenge"
            to="/signup"
          >
            Sign Up
          </Button>
        </section>
      </div>

      <main className="w-full">
        <section className="pt-10 pb-10 px-2">
          <ChallengeCardsGrid />
        </section>

        <section className=" pb-10 px-2">
          <TestimonialCardsGrid />
        </section>
      </main>
    </div>
  );
};

export default Home;
