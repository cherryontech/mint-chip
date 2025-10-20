// react
import { Link } from 'react-router-dom';

// components
import Button from './Button';

const Navbar = () => {
  return (
    <div className="w-full bg-nyanza relative z-20 py-4">
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
            aria-label="Sign Up"
            to="/signup"
            className="mx-1"
          >
            Sign Up
          </Button>
          <Button
            isNavbar={true}
            onClick={() => console.log('Go to sign in')}
            aria-label="Log In"
            to="/login"
            className="mx-1"
          >
            Log In
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
