// react
import { Link } from 'react-router-dom';

// components
import Button from './Button';

//Home Navbar
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
          className="text-stone-900 text-2xl cursor-pointer md:text-2xl font-normal font-playfair"
        >
          Healie
        </Link>

        <nav className="flex flex-row items-center gap-2 md:gap-4">
          <Button
            isNavbar={true}
            onClick={() => console.log('Go to sign up')}
            to="/signup"
          >
            Sign Up
          </Button>
          <Button
            isNavbar={true}
            onClick={() => console.log('Go to sign in')}
            to="/login"
          >
            Log In
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
