import { Link } from 'react-router-dom';
import { tv } from 'tailwind-variants/lite';

const buttonVariants = tv({
  // base styles for all buttons
  base: 'flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out group',
  // all button variants
  variants: {
    size: {
      navbar: 'h-14 w-[220px] px-[58px] py-[8px] rounded-[10px]',
      sm: 'h-14 w-[220px] text-2xl text-md font-semibold rounded-lg drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
      md: 'h-16 w-82 text-2xl font-semibold rounded-lg drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
      lg: 'h-11 w-[501px] text-lg font-medium rounded-md drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
      circ: 'h-11 w-11 text-2xl rounded-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
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
  },
  // conditional style cases for specific prop combinations
  compoundVariants: [
    // remove drop shadow and lower font weight for onboarding quiz button
    {
      color: 'secondary',
      size: 'md',
      className: 'drop-shadow-none !font-normal',
    },
    {
      size: 'navbar',
      className: `
            hover:bg-eerie
            hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]
        `,
    },
  ],
});

//  Navbar classes
const navbarTextClasses = `
    text-stone-900 text-2xl font-normal font-playfair 
    group-hover:text-white 
    group-hover:text-2xl 
    group-hover:font-semibold 
    group-hover:font-poppins
`;

export default function Button({
  size,
  color,
  children,
  to,
  isNavbar = false,
  ...props
}) {
  const finalClasses = buttonVariants({
    size: isNavbar ? 'navbar' : size,
    color: isNavbar ? 'none' : color,
  });

  const getContent = () => {
    if (isNavbar) {
      return <span className={navbarTextClasses}>{children}</span>;
    }

    return children;
  };

  if (to) {
    return (
      <Link
        to={to}
        className={finalClasses}
        {...props} // Pasa props adicionales como aria-label
      >
        {getContent()}
      </Link>
    );
  }

  // Si NO se proporciona 'to', renderiza el <button> normal
  return (
    <button className={finalClasses} {...props}>
      {getContent()}
    </button>
  );
}
