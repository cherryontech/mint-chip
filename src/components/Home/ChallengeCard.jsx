// src/components/ChallengeCard.jsx (Ajustado para el carrusel responsive)
import CheckIcon from './CheckIcon';

const ChallengeCard = ({ title, description }) => {
  return (
    // CAMBIO CLAVE: Quitamos 'min-w-[288px]' y usamos 'w-[90vw]' para que se ajuste al móvil.
    <div className="
        // Por defecto (móvil): 90% del ancho del viewport. Esto asegura que se ajusta a cualquier pantalla.
        w-[90vw] 
        h-full 
        min-h-[192px] 
        
        // Desktop (md: en adelante): Vuelve a ocupar el ancho completo de la columna del grid.
        md:w-full 

        bg-white rounded-[10px] outline-2 outline-offset-[-2px] outline-stone-900 
        px-8 py-7  flex-col justify-start items-start gap-3
        // Clases esenciales para el carrusel
        snap-start shrink-0 
    ">
      {/* Title and Icon Container */}
      <div className="flex items-start gap-2.5">
        <CheckIcon /> 
        <h3 className="text-stone-900 text-xl font-normal font-Poppins leading-snug">
          {title}
        </h3>
      </div>

      {/* Description Container */}
      <p className="text-stone-900 text-base font-normal font-Poppins leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ChallengeCard;