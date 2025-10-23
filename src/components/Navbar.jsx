// react
import { Link } from 'react-router-dom';

// components
import Button from './Button';

const navbarButtonClass = `
  flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out
  
  h-14 w-32 md:w-[220px] px-4 md:px-[58px] py-[8px] rounded-[10px] 
  
  text-stone-900 text-2xl font-normal font-playfair
  bg-transparent
  border-4 border-transparent
  
  hover:bg-[#888888] hover:text-white hover:font-semibold hover:font-poppins
  
  active:bg-[#0561A7] active:border-[#0561A7] active:text-white active:font-semibold active:font-poppins active:ring-0 active:ring-offset-0
  
  focus:outline-none focus:bg-stone-900 focus:text-white focus:ring-4 focus:ring-[#0561A7] focus:ring-offset-4 focus:ring-offset-nyanza focus:font-semibold focus:font-poppins
`;

// Home Navbar
const Navbar = () => {
  return (
    <header className="w-full bg-nyanza relative z-20 py-4">
      <a
        href="#main-content"
        className="
          absolute top-[-9999px] left-0 z-50 p-3 
          text-lg font-bold text-white bg-persianblue 
          focus:top-0 focus:left-0 focus:z-50 focus:relative
        "
      >
        Skip to main content
      </a>

      <div className="flex justify-between items-center px-10 py-4 md:px-12 md:py-6 h-20">
        <Link
          to="/"
          className="text-stone-900 text-2xl cursor-pointer md:text-2xl font-normal font-playfair focus:outline-none focus:ring-2 focus:ring-persianblue rounded-[5px]"
        >
          Healie
        </Link>

        <nav className="flex flex-row items-center gap-2 md:gap-4">
          <Link
            to="/signup"
            className={navbarButtonClass}
            onClick={() => console.log('Go to sign up')}
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className={navbarButtonClass}
            onClick={() => console.log('Go to sign in')}
          >
            Log In
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
