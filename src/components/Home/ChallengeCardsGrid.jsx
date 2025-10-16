// src/components/ChallengeCardsGrid.jsx (Versión Final)

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
    // Ojo: En la imagen_85b626.png, 'Sleep 7 to 9 Hours' y 'Practice Saying No'
    // tienen las descripciones originales INTERCAMBIADAS respecto a tu data.
    // Usaremos tu data, que es más lógica con el título.
    title: 'Sleep 7 to 9 Hours',
    description:
    'Track your sleep to see how it affects your mood and outlook in your daily life.'
      ,
  },
  {
    title: 'Reading Daily',
    description:
      'Reading each day for at least 15 minutes, can improve your memory and concentration. ',
  },
  {
    title: 'Practice Saying No',
    description:'Practice saying no in different ways to shorten your to-do list and establish boundaries.'
      ,
  },
];

// Ancho máximo para el desktop para limitar y centrar el contenedor del grid.
const DESKTOP_MAX_WIDTH = 'max-w-6xl'; // Se puede usar 'max-w-[944px]' o un valor más genérico como 'max-w-6xl'

const ChallengeCardsGrid = () => {
  
  return (
    <div className="w-full py-10"> 
      
      {/* Título */}
      <h2 className="text-center text-stone-900 text-5xl font-semibold font-Playfair mb-12">
        Customize your tasks and start your journey today
      </h2>
      
      {/* 1. MOBILE CAROUSEL (md:hidden) */}
      <div className="
        md:hidden 
        flex space-x-[40px] 
        overflow-x-scroll snap-x snap-mandatory 
        px-4 pb-4 
      ">
        {challenges.map((item, index) => (
          <div key={index} className="shrink-0 snap-start">
            <ChallengeCard
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>


      {/* 2. DESKTOP LAYOUT (md:block) - Centramos el contenedor principal */}
      <div className={`hidden md:block ${DESKTOP_MAX_WIDTH} mx-auto px-4`}>
          
        {/* Usamos un contenedor de ancho fijo para la disposición 3x2. 
           max-w-[944px] es 3*288 + 2*40. Esto es crucial para centrar la Fila 2. */}
        <div className="max-w-[944px] mx-auto">
        
            {/* Fila 1: Layout de Grid (3 columnas) */}
            <div className="grid grid-cols-3 gap-[40px]"> 
              {challenges.slice(0, 3).map((item, index) => (
                <ChallengeCard
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>

            {/* Fila 2: Layout de Flexbox (2 tarjetas centradas) */}
            <div className="flex justify-center mt-[40px] gap-[40px]">
              {challenges.slice(3).map((item, index) => (
                // Para la Fila 2, necesitamos que la tarjeta use su ancho fijo (min-w-[288px]) 
                // en lugar de heredar w-full. El w-full en ChallengeCard funciona mal con flex.
                // Usamos un wrapper con w-[288px] o w-72 para forzar el ancho en desktop.
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