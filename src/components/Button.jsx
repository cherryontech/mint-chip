// prettier-ignore-file
import { useNavigate } from 'react-router-dom';
import { tv } from 'tailwind-variants/lite';

const buttonVariants = tv({
  // base styles for all buttons
  base: 'font-poppins flex items-center justify-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
  // all button variants
  variants: {
    size: {
      sm: 'h-12 w-[162px] text-base font-semibold rounded-lg lg:h-14 lg:w-[220px] lg:text-xl',
      md: 'h-11 w-[218px] text-base font-semibold rounded-lg lg:h-14 lg:w-[286px] lg:text-xl xl:h-16 xl:w-[327px] xl:text-2xl',
      lg: 'h-11 w-[345px] text-base font-medium rounded-md lg:w-[501px]',
      xl: 'h-fit w-full md:w-[345px] text-sm sm:text-base font-medium rounded-md lg:w-[501px] 2xl:w-full p-3 justify-start',
      circ: 'h-11 w-11 text-2xl rounded-full'
    },
    color: {
      primary: 'bg-eerie text-white border-1 border-eerie',
      secondary: 'bg-white text-eerie border-1 border-eerie',
      gradient: 'bg-gradient-to-b from-electricgreen to-persianblue text-white'
    },
  },
  // default button styles if no specified props
  defaultVariants: {
    size: 'sm',
    color: 'primary'
  },
  // conditional style cases for specific prop combinations
  compoundVariants: [
    // remove drop shadow and lower font weight for user selection button
    {
      color: 'secondary',
      size: 'md',
      className: 'drop-shadow-none !font-normal'
    },
  ],
});

export default function Button({ size, color, label, onClick, isActive, to, title, subtitle, ...props }) {
  let navigate = useNavigate();

  function handleClick() {
    if (to) {
      navigate(to);
    } else {
      onClick();
    }
  }

  return (
    <button 
      onClick={handleClick} 
      className={isActive ? `${buttonVariants({ size, color })} active` : buttonVariants({ size, color })} {...props}
    >
      {title && subtitle ? (
        <div className='text-left'>
          <h3 className='font-semibold'>{title}</h3>
          <p>{subtitle}</p>
        </div>
      ) : (
        label
      )}
    </button>
  );
}
