//react
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//icons
import { MdOutlineLogin } from 'react-icons/md';
import { HiMenu } from 'react-icons/hi';

//components
import MobileMenu from './MobileMenu';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile menu state
  const [isAuthenticated, setIsAuthenticated] = useState(false); // user authentication state

  // check authentication from localstorage
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      setIsAuthenticated(!!token);
    };
    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  // navbar for NON-authenticated user
  if (!isAuthenticated) {
    return (
      <header className="w-full bg-nyanza relative z-20 py-4">
        <a
          href="#main-content"
          className="absolute top-[-9999px] left-0 z-50 p-3 text-lg font-bold text-white bg-persianblue focus:top-0 focus:left-0 focus:z-50 focus:relative"
        >
          Skip to main content
        </a>
        <div className="flex justify-between items-center px-10 py-4 md:px-12 md:py-6 h-20">
          <Link
            to="/"
            className="text-stone-900 text-2xl cursor-pointer font-normal font-playfair focus:outline-none focus:ring-2 focus:ring-persianblue rounded-[5px]"
          >
            Healie
          </Link>
          <nav
            className="flex flex-row items-center gap-2 md:gap-4"
            aria-label="Main navigation"
          >
            <Link
              to="/signup"
              className="flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out h-14 w-32 md:w-[220px] px-4 md:px-[58px] py-[8px] rounded-[10px] text-stone-900 text-2xl font-normal font-playfair bg-transparent border-4 border-transparent hover:border-persianblue focus:outline-none focus:ring-2 focus:ring-persianblue"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out h-14 w-32 md:w-[220px] px-4 md:px-[58px] py-[8px] rounded-[10px] text-stone-900 text-2xl font-normal font-playfair bg-transparent border-4 border-transparent hover:border-persianblue focus:outline-none focus:ring-2 focus:ring-persianblue"
            >
              Log In
            </Link>
          </nav>
        </div>
      </header>
    );
  }

  // navbar for authenticated user
  return (
    <>
      <header className="w-full bg-gradient-to-b from-nyanza to-celeste relative z-20 py-4">
        <a
          href="#main-content"
          className="absolute top-[-9999px] left-0 z-50 p-3 text-lg font-bold text-white bg-persianblue focus:top-0 focus:left-0 focus:z-50 focus:relative"
        >
          Skip to main content
        </a>
        <div className="flex justify-between items-center px-4 md:px-12 h-12 md:h-20">
          {/* hamburger menu */}
          <button
            onClick={toggleMenu}
            className="text-stone-900 text-3xl focus:outline-none focus:ring-2 focus:ring-persianblue rounded-[5px] md:hidden p-2"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label="Open navigation menu"
          >
            <HiMenu />
          </button>

          {/* logo */}
          <Link
            to="/"
            className="hidden md:block text-stone-900 text-2xl cursor-pointer font-normal font-playfair focus:outline-none focus:ring-2 focus:ring-persianblue rounded-[5px] hover:font-bold"
          >
            Healie
          </Link>

          <nav
            className="hidden md:flex items-center gap-12"
            aria-label="Main navigation"
          >
            <ul className="flex items-center gap-12 list-none p-0 m-0">
              <li>
                <Link
                  to="/dashboard"
                  className="text-stone-900 text-base font-normal font-Playfair hover:font-bold focus:outline-none focus:ring-2 focus:ring-persianblue rounded-[5px]"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/detox-challenge"
                  className="text-stone-900 text-base font-normal font-Playfair hover:font-bold focus:outline-none focus:ring-2 focus:ring-persianblue rounded-[5px]"
                >
                  Detox Challenge
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-stone-900 text-base font-normal font-Playfair hover:font-bold focus:outline-none focus:ring-2 focus:ring-persianblue rounded-[5px]"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </nav>
          <div className="hidden md:flex justify-start items-center gap-3">
            <button
              onClick={handleLogout}
              className="text-stone-900 text-base font-normal font-Playfair cursor-pointer hover:font-bold focus:outline-none focus:ring-2 focus:ring-persianblue rounded-[5px] p-1"
              aria-label="Log out of your account"
            >
              Log Out
            </button>
            <MdOutlineLogin className="text-2xl" aria-hidden="true" />
          </div>
          <div className="flex md:hidden justify-start items-center gap-3">
            <button
              onClick={handleLogout}
              className="text-stone-900 text-base font-normal font-Playfair cursor-pointer focus:outline-none focus:ring-2 focus:ring-persianblue rounded-[5px] p-1"
              aria-label="Log out of your account"
            >
              Log Out
            </button>
            <MdOutlineLogin aria-hidden="true" />
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
}

export default Navbar;
