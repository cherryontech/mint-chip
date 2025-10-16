//react
import React from 'react';

//components
import ChallengeCardsGrid from '../components/Home/ChallengeCardsGrid';
import TestimonialCardsGrid from '../components/Home/TestimonialCardsGrid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

const Home = () => {
  return (
    // Se usa 'relative' aquí para que las secciones internas (challenge, testimonial) se posicionen correctamente.
    <div className="bg-white w-full relative"> 
      
      {/* 1. Navbar se renderiza primero */}
      <Navbar />

      {/* 2. Hero Container (Background + Content) 
          - AHORA la altura (h-[...]), el fondo (bg-gradient-to-b) y la forma (rounded-bl/br) 
          - están en un solo contenedor.
      */}
      <div className="w-full h-[550px] sm:h-[350px] bg-gradient-to-b from-nyanza to-celeste rounded-bl-[40px] rounded-br-[40px] relative"> 
          
          {/* 3. Hero Content - Centrado verticalmente usando h-full y justify-center. SIN MARGEN NEGATIVO. */}
          <section 
            // h-full asegura que ocupa toda la altura del contenedor padre.
            // justify-center centra el contenido verticalmente.
            className="w-full h-full flex flex-col items-center justify-center px-4 relative z-10"
          >
              {/* H2 Title */}
              <h2 className="w-[745px] max-w-full mx-auto h-auto mb-2 text-center text-stone-900 text-4xl sm:text-5xl lg:text-5xl font-bold font-playfair capitalize leading-snug">
                Helping Women In Tech <br />
                Fight Burnout
              </h2>

              {/* Paragraph */}
              <p className="w-[829px] max-w-full mx-auto h-auto mb-6 sm:mb-8 font-poppins font-normal text-eerie text-lg sm:text-2xl lg:text-xl text-center tracking-normal leading-normal px-2">
                Healie hosts a 30-Day Detox Challenge that provides five <br />
                healthy strategies women can use to prevent and fight burnout
              </p>

              <Button
                size="sm"
                color="primary"
                label="Sign Up"
                aria-label="Sign up to start the challenge"
              >
                Sign Up
              </Button>
          </section>
      </div>

      <main className="w-full"> 
        {/* 4. Challenge Cards Section - Fluye correctamente justo después del Hero Container. */}
        <section className="pt-10 pb-10 px-4">
          <ChallengeCardsGrid />
        </section>

        {/* 5. Testimonial Section - Ajuste de espaciado. */}
        <section className=" pb-10 px-4">
          
          <TestimonialCardsGrid />
        </section>
      </main>

      {/* 6. Footer component flows at the very end */}
      <Footer />
      
    </div>
  );
};

export default Home;