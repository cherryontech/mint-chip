// react
import { useState } from 'react';
import { Link } from 'react-router-dom';

// components
import Button from './Button';

const FourBarsIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true" 
    role="presentation"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    {...props}
  >
    <path
      d="M21.0938 18.75H0.78125C0.57405 18.75 0.375336 18.8323 0.228823 18.9788C0.0823101 19.1253 0 19.324 0 19.5312L0 21.0938C0 21.301 0.0823101 21.4997 0.228823 21.6462C0.375336 21.7927 0.57405 21.875 0.78125 21.875H21.0938C21.301 21.875 21.4997 21.7927 21.6462 21.6462C21.7927 21.4997 21.875 21.301 21.875 21.0938V19.5312C21.875 19.324 21.7927 19.1253 21.6462 18.9788C21.4997 18.8323 21.301 18.75 21.0938 18.75ZM21.0938 12.5H0.78125C0.57405 12.5 0.375336 12.5823 0.228823 12.7288C0.0823101 12.8753 0 13.074 0 13.2812L0 14.8438C0 15.051 0.0823101 15.2497 0.228823 15.3962C0.375336 15.5427 0.57405 15.625 0.78125 15.625H21.0938C21.301 15.625 21.4997 15.5427 21.6462 15.3962C21.7927 15.2497 21.875 15.051 21.875 14.8438V13.2812C21.875 13.074 21.7927 12.8753 21.6462 12.7288C21.4997 12.5823 21.301 12.5 21.0938 12.5ZM21.0938 6.25H0.78125C0.57405 6.25 0.375336 6.33231 0.228823 6.47882C0.0823101 6.62534 0 6.82405 0 7.03125L0 8.59375C0 8.80095 0.0823101 8.99966 0.228823 9.14618C0.375336 9.29269 0.57405 9.375 0.78125 9.375H21.0938C21.301 9.375 21.4997 9.29269 21.6462 9.14618C21.7927 8.99966 21.875 8.80095 21.875 8.59375V7.03125C21.875 6.82405 21.7927 6.62534 21.6462 6.47882C21.4997 6.33231 21.301 6.25 21.0938 6.25ZM21.0938 0H0.78125C0.57405 0 0.375336 0.08231 0.228823 0.228823C0.0823101 0.375336 0 0.57405 0 0.78125L0 2.34375C0 2.55095 0.0823101 2.74966 0.228823 2.89618C0.375336 3.04269 0.57405 3.125 0.78125 3.125H21.0938C21.301 3.125 21.4997 3.04269 21.6462 2.89618C21.7927 2.74966 21.875 2.55095 21.875 2.34375V0.78125C21.875 0.57405 21.7927 0.375336 21.6462 0.228823C21.4997 0.08231 21.301 0 21.0938 0Z"
      fill="currentColor"
    />
  </svg>
);

// 'X' icon
const CloseIcon = (props) => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

// Componente principal MenuIcon que cambia entre los dos SVGs
const MenuIcon = ({ isOpen, ...props }) => {
  if (isOpen) {
    return <CloseIcon {...props} />;
  }
  return <FourBarsIcon {...props} />;
};

const Navbar = () => {
  // Estado para controlar si el menú móvil está abierto
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full bg-nyanza relative z-20">
      {/* Contenedor principal de la barra (desktop y móvil) */}
      <div className="flex justify-between items-center px-4 py-4 md:px-12 md:py-6 h-20">
        {/* Logo */}
        <Link
          to="/"
          className="text-stone-900 text-2xl cursor-pointer md:text-2xl font-normal font-playfair"
        >
          Healie
        </Link>

        {/* Navegación de ESCRITORIO */}
        <nav className="hidden md:flex items-center gap-4">
          <Button
            isNavbar={true}
            onClick={() => console.log('Go to sign up')}
            aria-label="Sign Up"
            to="/signup"
          >
            Sign Up
          </Button>
          <Button
            isNavbar={true}
            onClick={() => console.log('Go to sign in')}
            aria-label="Log In"
            to="login"
          >
            Log In
          </Button>
        </nav>

        {/* Botón de Menú Móvil (VISIBLE en mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            // Aquí es donde usamos el nuevo componente MenuIcon
            className="text-stone-900 hover:text-gray-700 transition"
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </div>

      {/* Menú Desplegable (SOLO MÓVIL) */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} 
                           bg-nyanza border-t border-stone-300 p-4 absolute w-full z-10`}
      >
        <div className="flex flex-col gap-4 items-center">
          <Button
            isNavbar={true}
            onClick={() => console.log('Go to sign up')}
            aria-label="Sign Up"
            className="w-full"
          >
            Sign Up
          </Button>
          <Button
            isNavbar={true}
            onClick={() => console.log('Go to sign in')}
            aria-label="Log In"
            className="w-full"
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
