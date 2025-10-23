import { Link } from 'react-router-dom';
import { tv } from 'tailwind-variants/lite';

const buttonVariants = tv({
  // base styles for all buttons
  base: 'flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out group \
         focus:outline-none focus:ring-4 focus:ring-persianblue focus:ring-offset-[12px] focus:ring-opacity-75 \
         active:scale-[0.98]',

  // all button variants
  variants: {
    size: {
      navbar:
        'h-14 w-32 md:w-[220px] px-4 md:px-[58px] py-[8px] rounded-[10px]',
      sm: 'h-12 w-[162px] text-base font-semibold rounded-lg lg:h-14 lg:w-[220px] lg:text-xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
      md: 'h-11 w-[218px] text-base font-semibold rounded-lg lg:h-14 lg:w-[286px] lg:text-xl xl:h-16 xl:w-[327px] xl:text-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
      lg: 'h-11 w-[345px] text-base font-medium rounded-md lg:w-[501px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
      circ: 'h-11 w-11 text-2xl rounded-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
      onboarding: 'h-14 w-full text-xl font-normal rounded-lg md:w-[280px]',
    },
    color: {
      primary: 'bg-eerie text-white border-1 border-eerie',
      secondary: 'bg-white text-eerie border-1 border-eerie',
      gradient: 'bg-gradient-to-b from-electricgreen to-persianblue text-white',
      none: '', // use for navbar to avoid the defaultVariant
    },
    // Prop Navbar
    isNavbar: {
      true: '',
      false: '',
    },
  },
  // default button styles if no specified props
  defaultVariants: {
    size: 'sm',
    color: 'primary',
    isNavbar: false,
  },
  // conditional style cases for specific prop combinations
  compoundVariants: [
    // remove drop shadow and lower font weight for onboarding
    {
      color: 'secondary',
      size: 'md',
      className: 'drop-shadow-none !font-normal',
    },
    // onboarding selection buttons
    {
      color: 'secondary',
      size: 'onboarding',
      className:
        'drop-shadow-none border-2 border-black !text-black !font-normal',
    },
    {
      size: 'navbar',
      className: `
            hover:bg-zinc hover:text-white
            hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]
            active:bg-persianblue active:border-persianblue active:text-white   
        `,
    },
    {
      color: 'primary',
      className: `hover:bg-zinc hover:text-white
      active:bg-persianblue active:border-persianblue active:text-white
               
      `,
    },
    {
      isNavbar: true,
      className:
        'text-stone-900 text-2xl font-normal font-playfair group-hover:text-white group-hover:text-2xl group-hover:font-semibold group-hover:font-poppins active:bg-persianblue active:text-white active:border-persianblue focus:ring-offset-white',
    },
  ],
});

export default function Button({
  size,
  color,
  children,
  label,
  to,
  isNavbar = false,
  ...props
}) {
  // Pass isNavbar to buttonVariants
  const finalClasses = buttonVariants({
    size: isNavbar ? 'navbar' : size,
    color: isNavbar ? 'none' : color,
    isNavbar: isNavbar,
  });

  // Direct content without wrappers
  const content = children || label;

  if (to) {
    const { className, ...rest } = props;
    const merged = `${finalClasses} ${className || ''}`.trim();

    return (
      <Link to={to} className={merged} {...rest}>
        {content}
      </Link>
    );
  }

  const { className, ...rest } = props;
  const merged = `${finalClasses} ${className || ''}`.trim();

  return (
    <button className={merged} {...rest}>
      {content}
    </button>
  );
}
