import { tv } from 'tailwind-variants/lite';
import { Link } from 'react-router-dom';

const buttonVariants = tv({
  // base styles for all buttons
  base: 'flex items-center justify-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
  // all button variants
  variants: {
    size: {
      sm: 'h-14 w-[220px] text-2xl text-md font-semibold rounded-lg',
      md: 'h-16 w-82 text-2xl font-semibold rounded-lg',
      lg: 'h-11 w-[501px] text-lg font-medium rounded-md',
      circ: 'h-11 w-11 text-2xl rounded-full',
    },
    color: {
      primary: 'bg-[#1E1E1E] text-white border-1 border-[#1E1E1E]',
      secondary: 'bg-white text-[#1E1E1E] border-1 border-[#1E1E1E]',
      gradient: 'bg-gradient-to-b from-[#15F30D] to-[#0561A7] text-white',
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
  ],
});

export default function Button({ size, color, label, className, to }) {
  const classes = `${buttonVariants({ size, color })} ${className || ''}`;

  // If 'to' prop exists, render as Link for navigation
  if (to) {
    return (
      <Link to={to} className={classes}>
        {label}
      </Link>
    );
  }

  // If 'to' prop does not exist, render a normal button
  return <button className={classes}>{label}</button>;
}
