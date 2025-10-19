import React from 'react';

const testimonials = [
  {
    title: 'Woman who Practiced Saying No',
    content:
      '"As the only woman in my office, I was always the go-to for menial tasks. I made it my mission to learn how to say no. Once I made an effort to do that, it was like a weight was lifted off my shoulders."',
  },
  {
    title: 'Woman who recited Positive Affirmations',
    content:
      '"I felt silly saying positive things to myself, but I do it everyday now and I feel so good. I am less irritable and I feel confident enough to ask for help when I feel overwhelmed. This helps me be a better mom."',
  },
  {
    title: 'Woman who completed Guided Journaling',
    content:
      '"I worked so hard to build my career into what it is today but I never took the time to celebrate my achievements or even take a break. This website helped me slow down and give myself a chance to breath."',
  },
];

const TestimonialCardsGrid = () => {
  return (
    // Contenedor principal
    <div className="w-full py-1">
      {/* Título - Mantenido */}
      <h2 className="text-center text-stone-900 text-5xl font-semibold font-Playfair mb-12">
        Women in Tech are developing life-changing habits
      </h2>

      {/* Contenedor de Carrusel/Grid Ajustado */}
      <div
        // CLAVES DE AJUSTE DE DESKTOP (lg:):
        // max-w-[1092px] mx-auto: Centra el contenedor a 1092px de ancho.
        // lg:px-[37px]: Padding de 37px para el margen interno (los '37' de los lados).
        // lg:gap-[38px]: Espacio exacto de 38px entre las columnas (las tarjetas).

        className="flex overflow-x-scroll snap-x snap-mandatory pb-4 
                   md:grid md:grid-cols-2 lg:grid-cols-3 
                   gap-6 lg:gap-[38px] 
                   max-w-full lg:max-w-[1092px] mx-auto 
                   px-4 lg:px-[37px]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((testimonial, index) => (
          // Tarjeta de Testimonio
          <article
            key={index}
            // p-9 (36px) para el padding interno
            // Dimensiones fijas en desktop (lg:w-[314px], lg:h-[335px])
            className="relative bg-white p-9 rounded-lg border-2 border-solid border-[#1e1e1e] shadow-lg flex flex-col 
                     snap-center min-w-[90%] sm:min-w-[400px] 
                     lg:w-[314px] lg:h-[335px] lg:min-w-0" // Aplicando medidas exactas
          >
            <div>
              <p className="mb-4 font-poppins font-normal text-[#1e1e1e] text-lg tracking-[0] leading-normal">
                {testimonial.title}
              </p>
              <blockquote className="font-poppins font-normal text-[#1e1e1e] text-base tracking-[0] leading-normal">
                {testimonial.content}
              </blockquote>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCardsGrid;
