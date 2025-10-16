import React from 'react';

const testimonials = [
  {
    title: 'Woman who Practiced Saying No',
    content:
      'As the only woman in my office, I was always the go-to for menial tasks. I made it my mission to learn how to say no. Once I made an effort to do that, it was like a weight was lifted off my shoulders.',
  },
  {
    title: 'Woman who recited Positive Affirmations',
    content:
      'I felt silly saying positive things to myself, but I do it everyday now and I feel so good. I am less irritable and I feel confident enough to ask for help when I feel overwhelmed. This helps me be a better mom.',
  },
  {
    title: 'Woman who completed Guided Journaling',
    content:
      'I worked so hard to build my career into what it is today but I never took the time to celebrate my achievements or even take a break. This website helped me slow down and give myself a chance to breath.',
  },
];

const TestimonialCardsGrid = () => {
  return (
    <div
    
      className="inline-flex items-center gap-[66px] absolute top-[1205px] left-[183px]"
            
    >
      

      
      {testimonials.map((testimonial, index) => (
        <article
          key={index}
          className={`relative w-[316px] h-[335px] ${index === 2 ? 'mr-[-2.00px]' : ''}`}
        >
          <div className="absolute -top-0.5 left-[calc(50.00%_-_160px)] w-[318px] h-[339px] bg-white rounded-[10px] border-2 border-solid border-[#1e1e1e]" />

          <div className="absolute top-9 left-[34px] w-[245px]">
            
          
            <h3 className="font-poppins font-normal text-[#1e1e1e] text-base tracking-[0] leading-[normal] mb-4">
              {testimonial.title}
            </h3>
            
          
            <blockquote className="font-poppins font-normal text-[#1e1e1e] text-base tracking-[0] leading-[normal]">
              &quot;{testimonial.content}&quot;
            </blockquote>
          </div>
        </article>
      ))}
    </div>
  );
};

export default TestimonialCardsGrid;
